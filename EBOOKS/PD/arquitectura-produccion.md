# Arquitectura de Producción — Ebooks con Claude API

## Visión general del sistema

El pipeline transforma un **brief de 1 página** en un **ebook listo para vender en PDF** con intervención humana mínima (~20% del tiempo total). El 80% es generado, revisado y formateado por agentes de Claude.

---

## Diagrama del pipeline completo

```
┌─────────────────────────────────────────────────────────────────────┐
│                        TRIGGER: Brief del ebook                      │
│              (título, ICP, problema que resuelve, precio)            │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  AGENTE 1: ORCHESTRATOR — claude-opus-4-6                            │
│                                                                      │
│  Input: Brief (500-1000 palabras)                                    │
│  Output JSON:                                                        │
│  {                                                                   │
│    "title": "...",                                                   │
│    "subtitle": "...",                                                │
│    "icp": {...},                                                     │
│    "tone": "professional|casual|technical",                          │
│    "chapters": [                                                     │
│      { "num": 1, "title": "...", "goal": "...",                      │
│        "word_count": 2500, "key_points": [...] }                     │
│    ],                                                                │
│    "templates_to_include": [...],                                    │
│    "total_pages_target": 90                                          │
│  }                                                                   │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ JSON outline
                               ▼
           ┌───────────────────┬───────────────────┐
           │                   │                   │
           ▼                   ▼                   ▼
    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
    │ WRITER A    │    │ WRITER B    │    │ WRITER C    │
    │ Capítulos   │    │ Capítulos   │    │ Templates + │
    │ 1, 2, 3     │    │ 4, 5, 6     │    │ Checklists  │
    │ sonnet-4-6  │    │ sonnet-4-6  │    │ sonnet-4-6  │
    └──────┬──────┘    └──────┬──────┘    └──────┬──────┘
           │                   │                   │
           └───────────────────┴───────────────────┘
                               │ Markdown por capítulo
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  CHECKPOINT HUMANO #1 — Revisión de contenido                        │
│  Tiempo: 2-3 horas                                                  │
│  Qué revisar: precisión técnica, tono, ejemplos, gaps               │
│  Qué NO hacer: reescribir todo (es edición, no creación)            │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ Feedback en formato bullet list
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  AGENTE 2: EDITOR — claude-haiku-4-5                                 │
│                                                                      │
│  Tarea: Aplicar feedback + pulir estilo + verificar consistencia     │
│  Input: Markdown bruto + lista de correcciones                       │
│  Output: Markdown final corregido                                    │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  AGENTE 3: METADATA & MARKETING — claude-sonnet-4-6                  │
│                                                                      │
│  Genera en paralelo:                                                 │
│  - Tabla de contenidos final                                         │
│  - Descripción del producto (Gumroad/Etsy/KDP)                      │
│  - 5 bullet points de beneficios para landing page                   │
│  - Email de lanzamiento (secuencia de 3 emails)                      │
│  - Tweet thread de presentación                                      │
│  - 3 variantes de headline para A/B test                            │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  AGENTE 4: COVER DESIGN — DALL-E 3                                   │
│                                                                      │
│  Prompt template:                                                    │
│  "Professional ebook cover for '[TITLE]'. Dark minimal background,  │
│  violet-blue accent (#3B2FC9), clean sans-serif typography,         │
│  subtle tech/AI geometric pattern. No people. No text in image      │
│  (text added in Canva). High contrast. 1600x2560px portrait."       │
│                                                                      │
│  Output: 3 variantes → human selects → add title in Canva           │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  FORMATO: n8n workflow → Pandoc → PDF                                │
│                                                                      │
│  Input: Markdown final + CSS stylesheet                              │
│  Process: pandoc input.md -o output.pdf --pdf-engine=weasyprint     │
│           --css ebook-style.css --toc --toc-depth=2                 │
│  Output: PDF 90-120 páginas, ready-to-sell                          │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  CHECKPOINT HUMANO #2 — QA final del PDF                             │
│  Tiempo: 30-60 minutos                                               │
│  Checklist: formato OK, links funcionan, cover se ve bien,          │
│  tabla de contenidos correcta, no hay secciones cortadas            │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Configuración técnica del pipeline

### 1. n8n Workflow Principal

```json
{
  "name": "Ebook Production Pipeline",
  "nodes": [
    {
      "name": "Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "ebook-brief",
        "responseMode": "lastNode"
      }
    },
    {
      "name": "Orchestrator (Claude Opus)",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": {
          "x-api-key": "={{ $env.ANTHROPIC_API_KEY }}",
          "anthropic-version": "2023-06-01",
          "content-type": "application/json"
        },
        "body": {
          "model": "claude-opus-4-6",
          "max_tokens": 4096,
          "system": "{{ $node.OrchestratorPrompt.json.system }}",
          "messages": [{"role": "user", "content": "{{ $json.brief }}"}]
        }
      }
    },
    {
      "name": "Split Chapters",
      "type": "n8n-nodes-base.splitInBatches",
      "parameters": {
        "batchSize": 1
      }
    },
    {
      "name": "Writer (Claude Sonnet) - Parallel",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "body": {
          "model": "claude-sonnet-4-6",
          "max_tokens": 8192,
          "system": "{{ $node.WriterPrompt.json.system }}",
          "messages": [{"role": "user", "content": "{{ $json.chapter_brief }}"}]
        }
      }
    },
    {
      "name": "Merge Chapters",
      "type": "n8n-nodes-base.merge"
    },
    {
      "name": "Editor (Claude Haiku)",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "body": {
          "model": "claude-haiku-4-5-20251001",
          "max_tokens": 4096
        }
      }
    },
    {
      "name": "Generate PDF via Pandoc",
      "type": "n8n-nodes-base.executeCommand",
      "parameters": {
        "command": "pandoc {{ $json.markdown_path }} -o {{ $json.output_path }} --pdf-engine=weasyprint --css=/opt/ebooks/style.css --toc"
      }
    }
  ]
}
```

### 2. Prompt del Orchestrator (claude-opus-4-6)

```
SYSTEM:
Eres un experto en creación de infoproductos de alto valor. Tu trabajo es tomar
un brief de ebook y generar una estructura JSON completa y detallada que sirva
de blueprint para el equipo de escritura.

REGLAS:
- Cada capítulo debe tener un objetivo claro y verificable
- Los ejemplos deben ser ESPECÍFICOS (con números, casos reales, herramientas reales)
- Cada capítulo debe terminar con: recap, acción concreta, y recurso adicional
- El total de palabras debe ser 25.000-35.000 para un ebook de 90-120 páginas
- Incluir mínimo 3 templates/checklists reutilizables en el ebook

OUTPUT FORMAT: JSON puro, sin markdown, válido para parsear.

USER:
[BRIEF DEL EBOOK - título, ICP, problema, precio objetivo, diferenciadores]
```

### 3. Prompt de los Writers (claude-sonnet-4-6)

```
SYSTEM:
Eres un ghostwriter especializado en infoproductos de negocio sobre IA y automatización.

AUDIENCIA: {{ icp.description }}
NIVEL: {{ icp.knowledge_level }} ({{ icp.knowledge_description }})
TONO: {{ tone }} — escribe como si explicaras a un colega inteligente, no a un estudiante
LONGITUD OBJETIVO: {{ chapter.word_count }} palabras

ESTRUCTURA DEL CAPÍTULO (obligatoria):
1. Hook de apertura (anécdota, dato, pregunta provocadora) — 150 palabras
2. Contexto del problema — 300 palabras
3. Desarrollo con subsecciones H3 — [el bulk del capítulo]
4. Ejemplo real o caso de uso detallado — 400 palabras
5. Recap de 3-5 bullets — 150 palabras
6. Acción concreta para el lector — 100 palabras

REGLAS:
- NO usar frases genéricas como "en el mundo actual" o "es fundamental que"
- SÍ usar datos específicos (aunque sean estimaciones razonadas, indicarlas como tal)
- SÍ incluir prompts de Claude listos para copiar cuando sea relevante
- Markdown puro: H2 para título del capítulo, H3 para subsecciones, **bold** para términos clave
- NO escribir introducción del tipo "En este capítulo vamos a ver..."

USER:
CAPÍTULO {{ chapter.num }}: {{ chapter.title }}
OBJETIVO: {{ chapter.goal }}
PUNTOS CLAVE A CUBRIR:
{{ chapter.key_points | join('\n- ') }}

CONTEXTO DEL LIBRO:
{{ book_summary }}
```

### 4. CSS para el PDF (estilo profesional)

```css
/* ebook-style.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400&display=swap');

body {
  font-family: 'Inter', sans-serif;
  font-size: 11pt;
  line-height: 1.7;
  color: #1a1a2e;
  max-width: 680px;
  margin: 0 auto;
  padding: 40px;
}

h1 { font-size: 28pt; color: #3B2FC9; margin-top: 60px; }
h2 { font-size: 20pt; color: #1a1a2e; border-bottom: 2px solid #3B2FC9; padding-bottom: 8px; }
h3 { font-size: 14pt; color: #3B2FC9; }

code, pre {
  font-family: 'JetBrains Mono', monospace;
  background: #f4f4f8;
  border-left: 3px solid #3B2FC9;
  padding: 16px;
  font-size: 9pt;
}

blockquote {
  border-left: 4px solid #3B2FC9;
  background: #f8f7ff;
  padding: 16px 20px;
  margin: 24px 0;
  font-style: italic;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
}

th { background: #3B2FC9; color: white; padding: 10px; }
td { border: 1px solid #e0e0e0; padding: 8px; }
tr:nth-child(even) { background: #f8f7ff; }

.page-break { page-break-after: always; }
```

### 5. Estructura de archivos del sistema

```
/opt/ebooks/
├── pipeline/
│   ├── n8n-workflow.json
│   ├── orchestrator-prompt.md
│   ├── writer-prompt.md
│   ├── editor-prompt.md
│   └── marketing-prompt.md
├── styles/
│   ├── ebook-style.css
│   └── cover-template.canva (link)
├── outputs/
│   ├── [product-slug]/
│   │   ├── outline.json
│   │   ├── chapters/
│   │   │   ├── ch01.md
│   │   │   ├── ch02.md
│   │   │   └── ...
│   │   ├── final.md (merged)
│   │   ├── final.pdf (output)
│   │   └── marketing/
│   │       ├── description.txt
│   │       ├── email-sequence.md
│   │       └── social-posts.md
└── templates/
    └── brief-template.md
```

---

## Estimación de costos de API por producto

### Ebook típico (90 páginas, ~28.000 palabras)

| Agente | Modelo | Tokens Input | Tokens Output | Costo |
|---|---|---|---|---|
| Orchestrator | opus-4-6 | 2.000 | 3.000 | $0.065 |
| Writer ×6 capítulos | sonnet-4-6 | 48.000 | 180.000 | $2.88 |
| Editor | haiku-4-5 | 60.000 | 40.000 | $0.026 |
| Marketing agent | sonnet-4-6 | 8.000 | 12.000 | $0.204 |
| **TOTAL API** | | | | **~$3.17** |

_Precios referencia 2026: opus-4-6 $15/MTok input $75/MTok output; sonnet-4-6 $3/$15; haiku-4-5 $0.25/$1.25_

### Costos adicionales por ebook

| Concepto | Costo |
|---|---|
| DALL-E 3 (3 imágenes de cover) | $0.12 |
| Canva Pro (agregar texto al cover) | Amortizado ($0.50/ebook si haces 26/año) |
| Pandoc/WeasyPrint | $0 (open source) |
| Almacenamiento (Google Drive) | $0 |
| **TOTAL PRODUCCIÓN** | **~$3.79/ebook** |

---

## Protocolo de control de calidad (QA)

### Checklist pre-publicación

```
CONTENIDO:
[ ] Cada capítulo tiene hook fuerte de apertura
[ ] Los ejemplos son específicos (nombres, números, herramientas)
[ ] Los prompts de Claude incluidos son funcionales (testeados)
[ ] Las checklists son accionables (verbos concretos)
[ ] No hay contradicciones entre capítulos
[ ] La tabla de contenidos refleja la estructura real
[ ] Longitud total: 80-130 páginas en PDF

FORMATO:
[ ] PDF se ve bien en pantalla Y al imprimir
[ ] Código/prompts tienen el formato monospace correcto
[ ] Imágenes no están pixeladas
[ ] Tablas no se cortan entre páginas
[ ] Números de página correctos
[ ] Links funcionan (si aplica)

MARKETING:
[ ] Descripción de venta: clara, beneficios > características
[ ] Precio final decidido y coherente con el mercado
[ ] Preview/muestra gratuita preparada (primeros 2 capítulos en PDF)
[ ] Email de lanzamiento listo
[ ] Publicación coordinada con video de YouTube
```

---

## Cómo escalar el sistema: de 1 a 12 ebooks/año

El bottleneck NO es la producción (Claude puede escribir en horas).  
El bottleneck ES la distribución y el marketing.

**Regla de oro:** Nunca lanzar un nuevo ebook hasta que el anterior tenga al menos  
50 ventas orgánicas (sin ads pagados). Eso valida la demanda real del mercado.

**Flywheel:**
```
Video YouTube gratis → Lista de email → Ebook de entrada ($47)
  → Upsell ebook premium ($147) → Bundle ($297) → Membership ($49/mes)
```

**Meta año 1:** 5 ebooks × 30 ventas/mes promedio × $80 precio medio = **$144.000/año**
