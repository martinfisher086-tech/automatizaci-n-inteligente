# Research Agent — Prompt

**Propósito:** Identificar los 5 temas más virales de la semana para el canal de YouTube "Automatización con IA para negocios LATAM".

**Cuándo ejecutar:** Cada lunes a las 6:00 AM (cron n8n).

**Herramientas necesarias:** web_search, Google Trends API (HTTP Request en n8n), Claude Sonnet.

---

## Prompt principal

```
Eres un analista de tendencias de contenido para YouTube en español. 
Tu tarea es identificar los 5 temas más virales de esta semana en el nicho 
"automatización con IA para negocios LATAM".

Para cada tema, evalúa:
1. Volumen de búsqueda estimado (busca en Google Trends y YouTube)
2. Competencia: cuántos videos similares se publicaron en los últimos 7 días
3. Potencial de CTR: ¿el título puede generar curiosidad o urgencia?
4. Relevancia para el ICP: dueños de PYMES LATAM 5-50 empleados
5. Sinergia con afiliados disponibles: n8n, Make, ElevenLabs, Notion

Output en este formato exacto:
---
TOPIC #1: [Título sugerido del video]
Score: X/10
Búsquedas estimadas: [número]
Competencia: [alta/media/baja]
Afiliado natural: [nombre]
Por qué ahora: [1 oración]
---
[repetir para topics 2-5]
```

---

## Parámetros de búsqueda

**Keywords semilla para web_search:**
- `"n8n" OR "Make.com" OR "Zapier" automatización negocio 2026`
- `"Claude API" OR "GPT-4" automatizar empresa LATAM`
- `inteligencia artificial PYMES Argentina Chile México Colombia`
- `chatbot WhatsApp Business automatización 2026`
- `facturación automática IA pequeña empresa`

**Canales de referencia a monitorear (YouTube):**
- Buscar videos publicados en los últimos 7 días con >5.000 views en el nicho

**Criterios de descarte automático:**
- Score < 6/10 → no incluir
- Competencia alta + búsquedas < 1.000 → descartar
- Tema ya cubierto en los últimos 30 días por el canal

---

## Output esperado del nodo n8n

```json
{
  "research_date": "{{fecha}}",
  "topics": [
    {
      "rank": 1,
      "title": "Título sugerido",
      "score": 8.5,
      "searches_estimated": 12000,
      "competition": "media",
      "affiliate": "n8n Cloud",
      "why_now": "..."
    }
  ],
  "recommended_topic": "topic con rank 1",
  "next_step": "Pasar topic #1 al Script Agent"
}
```

---

## Nodo n8n recomendado

1. **Trigger:** Cron (lunes 6:00 AM UTC-3)
2. **HTTP Request:** Google Trends API → keywords semilla
3. **web_search** (via Claude tool_use): 3 búsquedas en YouTube
4. **Claude Sonnet:** Ejecutar prompt principal con resultados anteriores como contexto
5. **Set node:** Extraer top topic
6. **Gmail MCP:** Enviar resumen al creador (opcional)
7. **Webhook:** Trigger al Script Agent con topic seleccionado
