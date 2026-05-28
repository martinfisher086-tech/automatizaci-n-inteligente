# Base de Datos de Afiliados

**Instrucción:** Registrar aquí cada programa de afiliados activo. El Script Agent y el Metadata Agent usan este archivo para insertar links correctos en guiones y descripciones.

---

## Programas activos

| # | Programa | Comisión | Link de afiliado | UTM base | Estado | Mejor para |
|---|---|---|---|---|---|---|
| 1 | n8n Cloud | 20% recurrente | _pendiente registro_ | `?utm_source=youtube&utm_medium=desc` | ⏳ Registrar | Todos los videos de n8n |
| 2 | Make.com | 20% primer pago | _pendiente registro_ | `?utm_source=youtube&utm_medium=desc` | ⏳ Registrar | Videos de comparación, Make |
| 3 | ElevenLabs | 20% primer mes | _pendiente registro_ | `?utm_source=youtube&utm_medium=desc` | ⏳ Registrar | Videos de voz IA, TTS |
| 4 | Notion | $5 por signup | _pendiente registro_ | `?utm_source=youtube&utm_medium=desc` | ⏳ Registrar | Videos de productividad, CRM |
| 5 | Canva Pro | Hasta $36 por referido | _pendiente registro_ | `?utm_source=youtube&utm_medium=desc` | ⏳ Registrar | Videos de thumbnails, diseño |
| 6 | DigitalOcean | $25 por cliente nuevo | _pendiente registro_ | `?utm_source=youtube&utm_medium=desc` | ⏳ Registrar | Videos de self-hosting, VPS |
| 7 | NordVPN | $3–10 por venta | _pendiente registro_ | `?utm_source=youtube&utm_medium=desc` | ⏳ Registrar | Cualquier video (integración genérica) |

---

## Cómo registrarse

| Programa | URL del programa de afiliados |
|---|---|
| n8n Cloud | https://n8n.io/affiliate |
| Make.com | https://www.make.com/en/affiliate-program |
| ElevenLabs | https://elevenlabs.io/affiliates |
| Notion | https://www.notion.so/affiliates |
| Canva | https://www.canva.com/affiliates/ |
| DigitalOcean | https://www.digitalocean.com/referral-program |
| NordVPN | https://nordvpn.com/affiliate/ |

---

## Reglas de uso

1. **Un afiliado por video** como máximo (más se ve spam).
2. El afiliado debe ser mencionado naturalmente en el guión — no forzado al final.
3. Siempre incluir el disclaimer en la descripción (ver `description-template.md`).
4. Trackear conversiones con el UTM de cada video para identificar qué afiliados convierten mejor.

---

## Tracker de rendimiento

| Video # | Afiliado | Clicks | Conversiones | Ingresos USD |
|---|---|---|---|---|
| — | — | — | — | — |

_Actualizar manualmente o via Google Sheets API cuando lleguen los reportes mensuales._

---

## Pendientes de configurar (Semana 1 del MVP)

- [ ] Registrarse en los 7 programas de la tabla superior
- [ ] Generar links de afiliado únicos para el canal
- [ ] Actualizar la columna "Link de afiliado" en esta tabla
- [ ] Crear UTMs únicos por video en Google Campaign URL Builder
- [ ] Configurar tracking en Google Analytics o Google Sheets
