# Canales — Mapa de Navegación

## Los 5 canales del ecosistema

| ID | Canal | Nicho | CPM est. | YPP est. | Estado |
|---|---|---|---|---|---|
| 01 | Automatización con Claude | IA para PYMES LATAM | $8–18 | Mes 4–5 | 🔄 En construcción |
| 02 | Finanzas LATAM | Inversión personal | $12–25 | Mes 4–5 | 📋 Planificado |
| 03 | Real Estate USA | Inversión inmobiliaria | $16–22 | Mes 4–5 | 📋 Planificado |
| 04 | AI Tools para Creadores | Herramientas IA | $20–28 | Mes 3–4 | 📋 Planificado |
| 05 | E-Commerce IA | Dropshipping / POD | $10–16 | Mes 4–6 | 📋 Planificado |

## Qué hay en cada carpeta de canal

```
XX-nombre-canal/
├── _config/
│   ├── channel-config.json    ← CONFIGURAR ESTO PRIMERO antes de correr el pipeline
│   ├── icp.md                 ← Leer esto antes de escribir cualquier guión
│   └── brand-guide.md         ← Referencia visual para el Storyboard Agent
│
├── pipeline/
│   ├── 02-guion/
│   │   ├── hook-library.md    ← El agente de guión usa esto para el hook
│   │   └── cta-library.md     ← El agente de guión usa esto para el CTA
│   ├── 03-storyboard/
│   │   └── visual-style-guide.md  ← Qué imágenes son aceptables para este canal
│   └── 05-qa/
│       └── checklist.md       ← Qué revisar antes de aprobar cada pieza
│
├── content/
│   ├── backlog/
│   │   ├── topics-backlog.md  ← Lista de topics pendientes de producir
│   │   └── content-calendar.md ← Calendario del canal (generado desde CALENDARIO-MAESTRO.md)
│   └── videos/
│       └── video-NNN/         ← Carpeta por video (se crea automáticamente)
│
├── analytics/
│   └── performance-log.md     ← Métricas de cada video publicado
│
└── monetization/
    ├── affiliates.md          ← Afiliados específicos de este canal
    └── sponsors.md            ← Pipeline de sponsors del canal

```

## Orden de configuración (nuevo canal)

1. `_config/channel-config.json` → completar todos los campos PENDIENTE
2. Crear el canal en YouTube con el nombre elegido
3. Subir banner y foto de perfil (ver brand-guide.md)
4. Configurar APIs en n8n usando los IDs de `channel-config.json`
5. Correr Research Agent manualmente → elegir primer topic
6. Correr pipeline completo → Checkpoint #1 → #2 → #3
7. Publicar primer video

## Archivos compartidos entre todos los canales

Están en `/YouTube/pipeline-compartido/`:
- `03-storyboard-agent.md` — el mismo prompt sirve para todos los canales
- `05-qa-checklist.md` — la misma checklist aplica a todos
- `07-repurposing-agent.md` — el mismo proceso de repurposing para todos

El único archivo que VARÍA por canal es `hook-library.md` y `icp.md`.
El `script-agent-prompt.md` usa el ICP del canal como contexto variable.
