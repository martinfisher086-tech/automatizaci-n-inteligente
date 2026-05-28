# Calendario Maestro de Contenido — 5 Canales × 5 Plataformas

## Respuesta a la pregunta: ¿3–5 publicaciones por día es spam?

**Respuesta corta: NO — si se hace bien.**

La clave está en que:
1. Son 5 CANALES DISTINTOS en YouTube (no 5 posts en el mismo canal)
2. El contenido se REPARTE entre plataformas diferentes
3. En estado estable (semana 2+), cada día publican 5 piezas en total: 1 YT long + 1 Short + 1 Reel + 1 TikTok + 1 thread

Frecuencia por plataforma por canal:
- YouTube largo: **1 video/semana** por canal = correcto, no es spam
- YouTube Shorts: **1 Short/semana** por canal = correcto
- Instagram: **1 Reel/semana** por canal = correcto
- TikTok: **1 video/semana** por canal = debajo del mínimo recomendado

Para TikTok se recomienda 3–5 videos/semana por cuenta para crecer. Solución: usar este pipeline como base y agregar contenido nativo adicional más adelante.

---

## Distribución diaria en estado estable (Semana 2+)

| Plataforma | Lunes | Martes | Miércoles | Jueves | Viernes |
|---|---|---|---|---|---|
| **YouTube Long** | Canal 1 🤖 | Canal 2 💰 | Canal 3 🏠 | Canal 4 🛠️ | Canal 5 🛒 |
| **YouTube Short** | Canal 1 | Canal 2 | Canal 3 | Canal 4 | Canal 5 |
| **Instagram Reel** | Canal 5 (viernes prev) | Canal 1 | Canal 2 | Canal 3 | Canal 4 |
| **TikTok** | Canal 5 (viernes prev) | Canal 1 | Canal 2 | Canal 3 | Canal 4 |
| **Twitter/X** | Canal 4 (jueves prev) | Canal 5 | Canal 1 | Canal 2 | Canal 3 |
| **LinkedIn** | Canal 3 (miérc prev) | Canal 4 | Canal 5 | Canal 1 | Canal 2 |

**Total diario: 5–6 piezas** (perfecto, dentro del rango objetivo sin ser spam en ninguna plataforma)

Leyenda canales:
- 🤖 Canal 1: Automatización con Claude
- 💰 Canal 2: Finanzas LATAM
- 🏠 Canal 3: Real Estate USA
- 🛠️ Canal 4: AI Tools para Creadores
- 🛒 Canal 5: E-Commerce IA

---

## Horarios óptimos de publicación (por plataforma)

Basado en datos de audiencia LATAM (Argentina UTC-3 como referencia):

| Plataforma | Hora óptima | Días mejores | Fuente |
|---|---|---|---|
| YouTube Long | 18:00 | Martes, Jueves | Google/YouTube analytics LATAM |
| YouTube Shorts | 10:00 (mismo día) | Cualquiera | YouTube Studio recomendación |
| Instagram Reel | 19:00 – 21:00 | Martes, Jueves | Meta Business insights |
| TikTok | 8:00 AM o 20:00 | Lunes–Jueves | TikTok analytics LATAM |
| Twitter/X | 12:00 | Martes, Miércoles | Datos engagement LATAM |
| LinkedIn | 8:00 AM | Martes, Miércoles | LinkedIn research |

---

## Calendario Semana 0 — Setup (Días 1–7)

**Objetivo:** Infraestructura lista. Ningún canal publicado todavía.

| Día | Tarea | Responsable | Tiempo |
|---|---|---|---|
| Día 1 | Crear los 5 canales de YouTube (nombres, banners, foto de perfil) | Humano | 3h |
| Día 1 | Crear cuentas de Instagram, TikTok, X, LinkedIn por canal | Humano | 2h |
| Día 2 | Configurar YouTube Data API v3 en Google Cloud Console | Humano | 1h |
| Día 2 | Configurar ElevenLabs — elegir voz por canal (A/B test) | Humano | 1h |
| Día 2 | Obtener OpenAI API key (DALL-E 3 + GPT-4) | Humano | 30min |
| Día 3 | Instalar y testear FFmpeg | IA + Humano | 1h |
| Día 3 | Crear Pexels API key | Humano | 15min |
| Día 3 | Crear Google Sheet "Dashboard YouTube" con 5 pestañas | Humano | 1h |
| Día 4 | Configurar n8n — importar workflows de `/workflows/` | IA + Humano | 3h |
| Día 4 | Configurar `channel-config.json` para los 5 canales | Humano | 1h |
| Día 5 | Registrarse en programas de afiliados (ver `affiliates-db.md`) | Humano | 2h |
| Día 5 | Test pipeline Canal 1 con video piloto (sin publicar) | IA + Humano | 4h |
| Día 6 | Corregir errores del pipeline | IA + Humano | 2h |
| Día 7 | Publicar video piloto Canal 1 manualmente | Humano | 1h |

**DoD Semana 0:** Un video publicado, pipeline funcionando para Canal 1.

---

## Semana 1 — Canal 1 + Canal 2 arrancando

| Fecha | Plataforma | Canal | Contenido | Estado |
|---|---|---|---|---|
| Lunes 18:00 | YouTube | 🤖 Canal 1 | "Automaticé la facturación de un estudio contable con Claude" | PRODUCIR |
| Lunes 20:00 | YouTube Shorts | 🤖 Canal 1 | Hook del video (55 seg) | AUTO |
| Martes 18:00 | YouTube | 💰 Canal 2 | "Con $500 dólares y esta estrategia..." | PRODUCIR |
| Martes 20:00 | YouTube Shorts | 💰 Canal 2 | Hook del video | AUTO |
| Martes 21:00 | Instagram Reel | 🤖 Canal 1 | Reel del video del lunes | AUTO |
| Martes 21:30 | TikTok | 🤖 Canal 1 | TikTok del video del lunes | AUTO |
| Miércoles 18:00 | YouTube | 🏠 Canal 3 | "Cómo un colombiano compró duplex en Atlanta" | PRODUCIR |
| Miércoles 12:00 | Twitter/X | 🤖 Canal 1 | Thread del video del lunes | AUTO |
| Jueves 18:00 | YouTube | 🛠️ Canal 4 | "Antes: 18 horas. Ahora: 90 minutos" | PRODUCIR |
| Jueves 21:00 | Instagram Reel | 💰 Canal 2 | Reel del video del martes | AUTO |
| Viernes 18:00 | YouTube | 🛒 Canal 5 | "Dropshipping 2026: ¿Funciona o no? (con números)" | PRODUCIR |
| Viernes 08:00 | LinkedIn | 🤖 Canal 1 | Post del video del lunes | AUTO |

**Total Semana 1:** 5 videos largos + 5 Shorts + 2 Reels + 2 TikToks + 1 thread + 1 post LinkedIn = **16 piezas**

---

## Backlog de Topics por Canal (Primeros 4 Videos)

### 🤖 Canal 1 — Automatización con Claude

| # | Título | Keyword | Afiliado | Semana |
|---|---|---|---|---|
| 1 | Automaticé la facturación de un estudio contable con Claude API | automatización facturación claude | n8n Cloud | 1 |
| 2 | El chatbot de WhatsApp más avanzado de LATAM: cómo lo construí con Claude | chatbot whatsapp claude api | ElevenLabs | 2 |
| 3 | 5 automatizaciones con Claude que toda PYME debería tener | automatizaciones con claude pymes | n8n Cloud | 3 |
| 4 | De 50 emails diarios a 5 minutos: mi sistema con Claude y Gmail | automatizar emails claude | Notion | 4 |

### 💰 Canal 2 — Finanzas LATAM

| # | Título | Keyword | Afiliado | Semana |
|---|---|---|---|---|
| 1 | Con $500 dólares: cómo empezar a invertir desde cero en LATAM | invertir 500 dolares latam | Wise / Binance | 1 |
| 2 | El error financiero que cometen el 87% de los latinoamericanos | error financiero latinoamerica | Payoneer | 2 |
| 3 | ETFs en español: qué son y cómo comprarlos desde Argentina/México | etf español como comprar | broker_afiliado | 3 |
| 4 | Cómo pagar menos impuestos siendo freelancer en LATAM (legal) | impuestos freelancer latam legal | Notion | 4 |

### 🏠 Canal 3 — Real Estate USA

| # | Título | Keyword | Afiliado | Semana |
|---|---|---|---|---|
| 1 | Comprar propiedades en USA siendo extranjero: el proceso completo | comprar propiedades usa extranjero | tokenización_afiliado | 1 |
| 2 | Miami vs Orlando vs Atlanta: ¿dónde conviene más invertir en 2026? | miami orlando atlanta invertir 2026 | agente_inmobiliario | 2 |
| 3 | La LLC para extranjeros: qué es y por qué la necesitás | llc extranjeros inversión usa | abogado_afiliado | 3 |
| 4 | REITs en español: invertir en real estate desde $100 | reits español latam | broker_reits | 4 |

### 🛠️ Canal 4 — AI Tools para Creadores

| # | Título | Keyword | Afiliado | Semana |
|---|---|---|---|---|
| 1 | De 18 horas a 90 minutos: mi workflow de producción con IA | workflow produccion ia youtubers | ElevenLabs | 1 |
| 2 | ElevenLabs tutorial completo en español 2026 | elevenlabs tutorial español | ElevenLabs | 2 |
| 3 | Synthesia vs HeyGen vs D-ID: cuál IA de avatares es mejor en 2026 | synthesia heygen did comparativa | Synthesia | 3 |
| 4 | Cómo hacer thumbnails virales con DALL-E 3 (sin Photoshop) | thumbnails youtube dall-e 3 | OpenAI | 4 |

### 🛒 Canal 5 — E-Commerce IA

| # | Título | Keyword | Afiliado | Semana |
|---|---|---|---|---|
| 1 | Dropshipping 2026: funciona o no (con mis números reales) | dropshipping 2026 funciona | Shopify | 1 |
| 2 | Print-on-demand con IA: de 0 a 50 diseños en un día | print on demand ia latam | Printful | 2 |
| 3 | Los 5 nichos de dropshipping menos saturados en 2026 | nichos dropshipping 2026 | AliExpress | 3 |
| 4 | Cómo automatizar la atención al cliente de tu tienda con IA | automatizar atencion cliente tienda | n8n Cloud | 4 |

---

## Métricas de éxito por semana

| Semana | Meta subs (total 5 canales) | Meta views | Checkpoints |
|---|---|---|---|
| 1 | 50 | 500 | Pipeline funcionando, 5 videos publicados |
| 2 | 150 | 1.500 | Repurposing activo (Shorts + Reels) |
| 4 | 500 | 5.000 | Primeros clicks en afiliados |
| 8 | 1.500 | 15.000 | 1 canal cerca de 1.000 subs |
| 12 | 4.000 | 40.000 | Primeros ingresos de afiliados |
| 20 | 10.000 | 100.000 | YPP activo en 2–3 canales |

---

## Regla anti-spam (resumen ejecutivo)

✅ **Lo que SÍ hacemos:**
- 1 video largo por canal por semana (5 total)
- Repurposamos cada video en Short + Reel + TikTok + thread (escalonado 24-48h)
- Total: 5–6 piezas por día, en plataformas DISTINTAS

❌ **Lo que NO hacemos:**
- Publicar el mismo clip en IG y TikTok el mismo día
- Publicar más de 1 video largo por semana por canal
- Publicar contenido sin pasar los 3 checkpoints de revisión humana
- Reutilizar el mismo texto/caption en múltiples plataformas sin adaptar

Sources:
- [US Real Estate: A Strategic Pillar for Latam Investors 2026](https://mexicobusiness.news/finance/news/us-real-estate-strategic-pillar-latam-investors-2026)
- [YouTube, brújula de las finanzas para los millennials](https://www.thinkwithgoogle.com/intl/es-419/estrategias-de-marketing/video/youtube-brujula-finanzas-millennials/)
- [Video content trends for 2026](https://milx.app/en/trends/video-content-trends-for-2026-on-youtube-and-social-media)
