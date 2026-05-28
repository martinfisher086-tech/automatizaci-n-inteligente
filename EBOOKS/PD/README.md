# EBOOKS & Productos Digitales — Ecosistema Claude AI

> **Tesis central:** El costo marginal de producir un ebook con Claude es $4–10 en tokens de API.  
> El precio de venta es $47–197. Margen bruto: 95–99%.  
> La barrera de entrada es la distribución, no la producción.

---

## Visión del proyecto

Construir una línea de productos digitales que:
1. Se producen USANDO Claude como motor de escritura/investigación (costo ≈ $0)
2. Enseñan a USAR Claude para resolver problemas reales de negocio
3. Se distribuyen por canales donde el ICP ya está buscando soluciones
4. Generan ingresos recurrentes sin inventario, sin logística, sin soporte complejo

Este modelo es el complemento natural de los canales de YouTube — cada video es contenido de marketing gratuito para los productos digitales.

---

## Los 5 Productos (ordenados por prioridad de lanzamiento)

| # | Producto | Precio | Canal principal | Tiempo al primer $ | Score |
|---|---|---|---|---|---|
| 1 | **Claude Agency Blueprint** | $147 | YouTube + LinkedIn | 30 días | ⭐⭐⭐⭐⭐ |
| 2 | **Amazon FBA AI Playbook** | $97 | YouTube + Reddit/FBA communities | 45 días | ⭐⭐⭐⭐⭐ |
| 3 | **200 Claude Business Prompts** | $47 | Etsy + Gumroad + Twitter | 15 días | ⭐⭐⭐⭐ |
| 4 | **YouTube AI Content Machine** | $127 | YouTube (auto-promo) | 30 días | ⭐⭐⭐⭐ |
| 5 | **n8n + Claude: AI sin Código** | $167 | YouTube + n8n community | 60 días | ⭐⭐⭐⭐⭐ |

---

## Stack tecnológico de producción

```
INPUT: Brief / Outline / Investigación previa
    ↓
[ORCHESTRATOR] claude-opus-4-6
  → Define estructura, tone of voice, persona del comprador
  → Genera outline completo con word count por sección
  → JSON de configuración para los siguientes agentes
    ↓
[WRITERS] claude-sonnet-4-6 (bulk, cost-efficient)
  → Escribe capítulos en paralelo (máx 4 concurrent)
  → Genera ejemplos, casos de uso, checklists
  → Produce templates y prompts listos para usar
    ↓
[EDITOR] claude-haiku-4-5 (rápido, barato)
  → Grammar, flujo, transiciones
  → Verifica consistencia de estilo
  → Genera tabla de contenidos final
    ↓
[DESIGN] DALL-E 3 / Midjourney
  → Cover design (3 variantes A/B/C)
  → Imágenes de capítulo (si aplica)
    ↓
[FORMAT] n8n + Pandoc/WeasyPrint
  → Markdown → PDF profesional
  → Numeración automática
  → Insertar links, tabla de contenidos
    ↓
OUTPUT: PDF listo para venta + Landing page copy generado
```

---

## Economía del modelo

### Costo de producción por ebook

| Concepto | Costo |
|---|---|
| Claude API (opus: planning ~50k tokens) | ~$0.75 |
| Claude API (sonnet: escritura ~400k tokens) | ~$3.00–6.00 |
| Claude API (haiku: editing ~100k tokens) | ~$0.04 |
| DALL-E 3 (cover, 3 variantes) | ~$0.12 |
| Pandoc/WeasyPrint (PDF) | $0 |
| Hosting/plataforma de venta | $0 (variable) |
| **TOTAL COSTO MARGINAL** | **$4–7 por ebook** |

### Revenue proyectado (escenario conservador mes 6)

| Producto | Precio | Ventas/mes | Ingresos |
|---|---|---|---|
| Prompt Library | $47 | 40 | $1.880 |
| Amazon FBA AI Playbook | $97 | 25 | $2.425 |
| Agency Blueprint | $147 | 20 | $2.940 |
| YouTube AI Machine | $127 | 20 | $2.540 |
| n8n + Claude | $167 | 25 | $4.175 |
| **TOTAL BRUTO** | | **130 ventas** | **$13.960** |
| Plataforma fees (~10%) | | | -$1.396 |
| **TOTAL NETO** | | | **$12.564/mes** |

### Tiempo de inversión real

| Etapa | Primera vez | Subsecuentes |
|---|---|---|
| Setup pipeline n8n + prompts | 8–12 hs | 0 |
| Research + brief por ebook | 2–3 hs | 2–3 hs |
| Revisión de contenido generado | 4–6 hs | 3–4 hs |
| Diseño y formateo | 2–3 hs | 1–2 hs |
| Landing page + marketing | 3–4 hs | 1–2 hs |
| **TOTAL por producto** | **19–28 hs** | **7–11 hs** |

---

## Archivos en esta carpeta

- `investigacion-mercado.md` — Research de mercado, validación de demanda, competidores
- `arquitectura-produccion.md` — Pipeline técnico completo con prompts y configs
- `canales-venta.md` — Comparativa de plataformas, estrategia por canal, copywriting
- `producto-01-claude-agency-blueprint.md` — Blueprint completo producto #1
- `producto-02-amazon-fba-ai-playbook.md` — Blueprint completo producto #2
- `producto-03-prompt-library.md` — Blueprint completo producto #3
- `producto-04-youtube-content-machine.md` — Blueprint completo producto #4
- `producto-05-n8n-claude-automation.md` — Blueprint completo producto #5

---

## Cronograma de lanzamiento

```
MES 1 (Validación):
  Semana 1: Setup pipeline técnico + producir Prompt Library (#3)
  Semana 2: Publicar en Gumroad + Etsy → validar demanda con precio bajo
  Semana 3: Producir Amazon FBA Playbook (#2) con el pipeline
  Semana 4: Lanzar #2 + crear video de YouTube que linkea a ambos

MES 2 (Escala):
  Semana 1-2: Producir Agency Blueprint (#1)
  Semana 3-4: Lanzar con webinar gratuito + email list

MES 3 (Flywheel):
  Semana 1-2: YouTube AI Machine (#4)
  Semana 3-4: n8n + Claude (#5)

MES 4+:
  Bundle todos los productos → $297 "AI Entrepreneur Starter Pack"
  Membership mensual → $49/mes "nuevos prompts + actualizaciones"
```
