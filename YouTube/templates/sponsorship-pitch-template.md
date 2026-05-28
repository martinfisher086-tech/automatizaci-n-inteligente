# Plantilla de Pitch de Sponsorship

**Cuándo usar:** Cuando el canal supere 1.000 suscriptores. El Sponsorship Outreach Agent (Gmail MCP) personaliza y envía este email automáticamente.

---

## EMAIL TEMPLATE — Primer contacto

**Asunto:** Propuesta de colaboración — Canal [Nombre Canal] ([X] subs, [Y] views/mes)

```
Hola [nombre],

Soy Juan Manuel Castillo, creador del canal [Nombre Canal] de YouTube, 
enfocado en automatización con IA para dueños de PYMES en LATAM.

En los últimos [X] meses construí una audiencia de [subs] suscriptores con 
un promedio de [views] reproducciones por video. Mi audiencia son dueños de 
pequeñas y medianas empresas en Argentina, México, Colombia y Chile que 
buscan activamente herramientas para automatizar sus negocios.

Por qué [empresa] encaja perfectamente con mi canal:
→ [Razón específica 1 — relacionar el producto con el contenido del canal]
→ [Razón específica 2 — dato sobre la audiencia relevante para ellos]

Lo que ofrezco:
• Mención integrada (30-60 seg) en [X] videos del mes
• Segmento dedicado de 2-3 minutos si prefieren una integración más profunda
• Story de Instagram + clip de TikTok del segmento

Métricas del canal (último mes):
- Suscriptores: [número]
- Reproducciones totales: [número]
- Watch time promedio: [minutos]
- Datos demográficos: [X]% 25-40 años, [Y]% dueños de negocio
- CTR promedio en links de descripción: [X]%

Precio por mención: $[rango según tabla de precios].

¿Tiene 15 minutos esta semana para una llamada rápida? 
Puedo mostrarles el canal y responder cualquier pregunta.

Saludos,
Juan Manuel Castillo
[link canal] | [link web] | [link LinkedIn]
```

---

## EMAIL TEMPLATE — Follow-up (7 días sin respuesta)

**Asunto:** Re: Propuesta de colaboración — [nombre empresa]

```
Hola [nombre],

Te escribí la semana pasada sobre una posible colaboración con [nombre empresa] 
en mi canal de YouTube.

Entiendo que están ocupados — solo quería saber si llegó mi mensaje o si lo 
puedo dirigir a alguien más del equipo.

Si el timing no es el correcto ahora, con gusto vuelvo a escribir en [X] meses 
cuando el canal tenga más alcance.

Saludos,
Juan Manuel
```

---

## Variables que completa el Sponsorship Outreach Agent

| Variable | Fuente |
|---|---|
| `[nombre]` | Research del prospecto (LinkedIn / web empresa) |
| `[empresa]` | Nombre de la empresa |
| `[Nombre Canal]` | Config fija |
| `[subs]` | YouTube Analytics API |
| `[views]` | YouTube Analytics API (últimos 30 días) |
| `[X]%` demográfico | YouTube Analytics API |
| `[Razón específica 1-2]` | Claude genera basado en el producto de la empresa |
| `[rango precio]` | Tabla de precios del blueprint según subs actuales |

---

## Lista de prospectos prioritarios (primera tanda, >1.000 subs)

| Empresa | Producto | Relevancia | Email contacto |
|---|---|---|---|
| n8n GmbH | Plataforma automatización | Directamente relacionado | partnerships@n8n.io |
| Make.com | Plataforma automatización | Competencia directa a n8n | — |
| ElevenLabs | Síntesis de voz | Mencionado en varios videos | — |
| Notion | Productividad | Audiencia emprendedores | — |
| DigitalOcean | Cloud / hosting | Self-hosting n8n | — |
| Canva | Diseño | Audiencia PYMES | — |
| Hotmart | Infoproductos | Audiencia emprendedores LATAM | — |
| Tiendanube | E-commerce | PYMES LATAM | — |

**Instrucción al Agent:** Buscar el email de partnerships/marketing de cada empresa con web_search antes de enviar. No enviar a emails genéricos de info@.
