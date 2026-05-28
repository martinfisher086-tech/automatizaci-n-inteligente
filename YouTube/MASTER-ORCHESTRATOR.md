# MASTER ORCHESTRATOR — Sistema de Producción de Contenido Multi-Canal

## Visión del sistema

Un agente recibe un `canal_id` + `topic` y produce, sin intervención humana adicional, todos los assets necesarios para publicar en 5 plataformas. El humano solo interviene en **3 checkpoints** de revisión.

---

## Arquitectura del Pipeline (por video)

```
LUNES 6:00 AM — TRIGGER AUTOMÁTICO (cron n8n)
│
├─► [AGENT 1: RESEARCH]           ~15 min
│   Input:  canal_id, fecha
│   Output: topics-scored.json (5 temas con score)
│   ──────────────────────────────────────────────
│   ⚠️  CHECKPOINT #1 — HUMANO (5 min)
│   Acción: Elegir topic del ranking → aprobar en n8n
│   ──────────────────────────────────────────────
│
├─► [AGENT 2: SCRIPT]             ~10 min
│   Input:  topic aprobado + icp.md + hook-library.md + cta-library.md
│   Output: guion.md (hook + 4 secciones + CTA)
│   ──────────────────────────────────────────────
│   ⚠️  CHECKPOINT #2 — HUMANO (10 min)
│   Acción: Leer guión, editar si es necesario → aprobar
│   ──────────────────────────────────────────────
│
├─► [AGENT 3: STORYBOARD]         ~10 min
│   Input:  guion.md aprobado
│   Output: storyboard.json (escena por escena con prompts visuales)
│   ──────────────────────────────────────────────
│   ⚠️  CHECKPOINT #3 — HUMANO (5 min)
│   Acción: Revisar brief visual → aprobar o ajustar prompts clave
│   ──────────────────────────────────────────────
│
├─► [AGENT 4A: VOICE] ──────────────────┐   ~20 min (paralelo)
│   Input:  guion.md (texto puro)        │
│   Output: audio.mp3 (ElevenLabs)       │
│                                        │
├─► [AGENT 4B: VISUALS] ────────────────┤   ~30 min (paralelo)
│   Input:  storyboard.json              │
│   Output: /assets/ (imgs + clips)      │
│           Fuentes: DALL-E 3, Pexels    │
│                                        │
└─► [AGENT 5: ASSEMBLY] ◄───────────────┘   ~15 min
    Input:  audio.mp3 + /assets/ + storyboard.json
    Output: video-draft.mp4 (1080p, subtítulos incluidos)
    
    ──────────────────────────────────────────────
    ✅  AUTO QA
    Checks: duración 8-13 min, resolución 1920×1080,
            audio -14 LUFS, subtítulos sincronizados
    ──────────────────────────────────────────────

├─► [AGENT 6: REPURPOSING]        ~10 min
│   Input:  video-draft.mp4 + guion.md
│   Output: short.mp4, reel.mp4, tiktok.mp4,
│           twitter-thread.txt, linkedin-post.txt,
│           ig-caption.txt
│
└─► [AGENT 7: PUBLISHING]         ~10 min
    Input:  todos los assets de repurposing
    Output: scheduled en todas las plataformas
    Log:    Google Sheets dashboard actualizado
```

**Tiempo total de producción:** 2–3 horas (IA)
**Tiempo humano:** ~20 minutos en 3 checkpoints
**Output por video:** 1 largo + 1 Short + 1 Reel + 1 TikTok + 1 thread + 1 post = **6 piezas de contenido**

---

## Scrum Framework — Sprints de Producción

### Sprint de Setup (una vez, Semana 0)

| Task | Responsable | Tiempo |
|---|---|---|
| Crear los 5 canales de YouTube | Humano | 2h |
| Configurar APIs (YouTube, ElevenLabs, OpenAI, Pexels) | Humano | 3h |
| Configurar n8n (workflows por canal) | IA + Humano | 4h |
| Completar `channel-config.json` para los 5 canales | Humano | 1h |
| Registrar programas de afiliados | Humano | 1h |
| Test pipeline completo con video piloto | IA + Humano | 4h |

**DoD Sprint 0:** Pipeline end-to-end funcionando, primer video publicado manualmente.

---

### Sprint de Producción (semanal, recurrente)

**Lunes:**
- 6:00 AM: Research Agent corre para los 5 canales
- 8:00 AM: Humano revisa 5 topic rankings → elige 1 por canal (Checkpoint #1)
- 8:30 AM: Script Agent corre para los 5 canales
- 10:00 AM: Humano revisa 5 guiones (Checkpoint #2) — leer en diagonal, 2 min/guión
- 10:30 AM: Storyboard Agent corre para los 5 canales
- 11:00 AM: Humano aprueba visual briefs (Checkpoint #3) — 1 min/canal

**Lunes tarde (automático):**
- 11:00 AM → 3:00 PM: Voice + Visuals + Assembly corriendo en paralelo
- 3:00 PM: Auto QA + Repurposing Agent
- 4:00 PM: Publishing Agent schedula todo para la semana

**El resto de la semana:** Publicaciones automáticas según calendario.

---

## Estructura de Carpetas por Canal

```
canales/
├── 01-automatizacion-claude/    ← ya tiene contenido
├── 02-finanzas-latam/
├── 03-real-estate-usa/
├── 04-ai-tools-creators/
└── 05-ecommerce-ia/

Cada canal tiene:
├── _config/
│   ├── channel-config.json      ← API keys, voice ID, branding, ICP
│   ├── icp.md                   ← ideal customer profile
│   └── brand-guide.md           ← tono, colores, estilo visual
├── pipeline/
│   ├── 02-guion/
│   │   ├── hook-library.md      ← 20+ hooks probados por nicho
│   │   └── cta-library.md       ← CTAs por objetivo
│   ├── 03-storyboard/
│   │   └── visual-style-guide.md ← qué tipo de imágenes usar
│   └── 05-qa/
│       └── checklist.md
├── content/
│   ├── backlog/
│   │   ├── topics-backlog.md
│   │   └── content-calendar.md
│   └── videos/
│       └── video-NNN/
│           ├── research.json
│           ├── guion.md
│           ├── storyboard.json
│           ├── assets/
│           │   ├── scene-001.png
│           │   ├── scene-002.mp4
│           │   └── ...
│           ├── audio.mp3
│           ├── video-draft.mp4
│           ├── video-final.mp4
│           ├── short.mp4
│           ├── reel.mp4
│           └── publicado/
│               ├── youtube-url.txt
│               ├── instagram-url.txt
│               └── metrics-day7.json
├── analytics/
│   └── performance-log.md
└── monetization/
    ├── affiliates.md
    └── sponsors.md
```

---

## Reglas del Orquestador

1. **Nunca publicar sin pasar los 3 checkpoints humanos.** El QA automático no reemplaza la revisión humana.
2. **Un canal publica 1 video largo por semana.** No más — la calidad importa más que la cantidad en YouTube.
3. **El Short se publica el mismo día que el largo.** El Reel/TikTok al día siguiente. El thread 48h después.
4. **Si un checkpoint falla (humano no aprueba), el pipeline para para ese canal esa semana.** No se publica contenido no revisado.
5. **Todos los assets se guardan en `/videos/video-NNN/`** antes de publicar. Si algo falla en publicación, se puede re-intentar sin re-generar.
6. **El dashboard de Google Sheets se actualiza automáticamente** después de cada publicación y cada 7 días con métricas de performance.

---

## KPIs del Sistema (revisión mensual)

| KPI | Meta Mes 1–2 | Meta Mes 3–6 | Meta Mes 6–12 |
|---|---|---|---|
| Videos publicados/mes (total 5 canales) | 20 | 20 | 20 |
| Subs ganados/mes (total) | 500 | 2.000 | 10.000 |
| Watch time (horas/mes) | 200 | 1.000 | 5.000 |
| Ingresos afiliados/mes | $50 | $500 | $3.000 |
| Ingresos YPP/mes | $0 | $200 | $2.000 |
| Costo stack IA/mes | $200 | $200 | $250 |
| ROI del sistema | Negativo | Break-even | Positivo 10x |
