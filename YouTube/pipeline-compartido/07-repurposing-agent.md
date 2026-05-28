# Repurposing Agent — De 1 Video a 6 Piezas de Contenido

**Propósito:** A partir de un video largo aprobado, generar automáticamente todas las variantes para distribución multiplataforma.

**Input:** `video-final.mp4` + `guion.md` + `storyboard.json`
**Output:** 6 piezas de contenido listas para publicar

---

## Output que genera este agente

| Pieza | Plataforma | Duración | Formato | Herramienta |
|---|---|---|---|---|
| `short.mp4` | YouTube Shorts | 50–60 seg | 1080×1920 (9:16) | FFmpeg |
| `reel.mp4` | Instagram Reels | 60–90 seg | 1080×1920 (9:16) | FFmpeg |
| `tiktok.mp4` | TikTok | 60–90 seg | 1080×1920 (9:16) | FFmpeg (igual que Reel) |
| `twitter-thread.txt` | X/Twitter | 5–7 tweets | Texto | Claude |
| `linkedin-post.txt` | LinkedIn | 1 post largo | Texto | Claude |
| `ig-caption.txt` | Instagram | Caption + hashtags | Texto | Claude |

---

## Prompt: Generación de Short / Reel / TikTok

```bash
# STEP 1: Extraer primeros 55 segundos (hook + inicio de intro)
ffmpeg -i video-final.mp4 -ss 0 -t 55 -c copy temp-short-landscape.mp4

# STEP 2: Convertir a vertical 9:16 (crop central)
ffmpeg -i temp-short-landscape.mp4 \
  -vf "crop=ih*9/16:ih:(iw-ih*9/16)/2:0,scale=1080:1920" \
  -c:v libx264 -crf 20 -c:a aac \
  short.mp4

# STEP 3: Agregar texto overlay "SEGUÍ VIENDO EN EL VIDEO" (últimos 5 segundos)
ffmpeg -i short.mp4 \
  -vf "drawtext=text='VER VIDEO COMPLETO':fontfile=Impact.ttf:fontsize=60:
       fontcolor=yellow:x=(w-text_w)/2:y=h-100:
       enable='between(t,50,55)'" \
  short-final.mp4
```

**Para Reel/TikTok:** Misma lógica pero 75–85 segundos. Incluir los mejores 90 segundos del video (no necesariamente el inicio).

**Selector de mejores 90 segundos:**
```
Instrucción al agente: Analiza el storyboard.json y el guion.md.
Identifica el segmento de 90 segundos con:
1. El dato más impactante DEL VIDEO (estadística, caso, resultado)
2. Una promesa clara de valor
3. Un gancho final ("en el video completo te explico cómo")

Devuelve: {inicio_segundos: X, fin_segundos: X+90, razon: "..."}
```

---

## Prompt: Twitter/X Thread

```
Eres un experto en Twitter/X. A partir del siguiente guión de YouTube,
crea un hilo de 6 tweets que capture la esencia del video y genere clicks.

REGLAS:
- Tweet 1: Hook con el dato más impactante del video (máx 280 chars)
- Tweets 2-5: Un punto clave por tweet, empezar cada uno con un número (2/, 3/, etc.)
- Tweet 6: CTA con link al video y pregunta para engagement
- Usar emojis con moderación (1-2 por tweet máximo)
- Sin jerga técnica — lenguaje de dueño de negocio
- Incluir [LINK] donde va la URL del video de YouTube

GUIÓN:
{{guion_completo}}

Output format:
---
TWEET 1/6:
[texto]
---
TWEET 2/6:
[texto]
---
[etc]
```

---

## Prompt: LinkedIn Post

```
Eres un ghostwriter experto en LinkedIn para emprendedores LATAM.
A partir del siguiente guión de YouTube, escribe un post de LinkedIn.

FORMATO DEL POST:
- Línea 1: Hook fuerte (pregunta o afirmación provocadora) — es lo que aparece antes del "ver más"
- Líneas 2-3: El problema en 2 oraciones
- Párrafo principal: La solución (3-4 oraciones, sin jerga técnica)
- Lista con viñetas: 3 puntos de aprendizaje del video
- CTA: "Si querés ver el proceso completo, lo publiqué en YouTube → [LINK]"
- Pregunta de cierre: Para generar comentarios

TONO: Profesional pero conversacional. Primera persona. Sin exceso de hashtags (máx 5, al final).
Extensión: 200–300 palabras.

GUIÓN:
{{guion_completo}}
```

---

## Prompt: Instagram Caption

```
Escribe el caption de Instagram para el Reel de este video.

ESTRUCTURA:
- Línea 1 (antes del "más"): Dato o pregunta que genere curiosidad (máx 125 chars)
- Cuerpo: 3-4 líneas con el valor del video
- CTA: "Link en bio para ver el video completo 🔗"
- Emojis: Sí, con moderación (3-5 en total)
- Hashtags: 15-20, al final, mezcla de broad + nicho + geográficos

HASHTAGS POR CANAL:
- Automatización Claude: #automatizacion #ia #n8n #claude #pymes #emprendedores #productividad #argentina #latam #inteligenciaartificial #nocode #workflow #digitalizacion #emprendimiento #tecnologia
- Finanzas LATAM: #finanzaspersonales #inversiones #libertadfinanciera #dinero #ahorro #inversión #emprendedor #latam #argentina #mexico #colombia #finanzas #criptomonedas #bolsa #forex
- Real Estate USA: #bienesraices #realestate #inversion #propiedades #miami #usa #latam #inversiones #rentabilidad #dolar #patrimonio #bienesinmuebles #inversioninmobiliaria #argentina #mexico
- AI Tools: #herramientasia #creadores #contenido #ia #youtube #instagram #tiktok #automatizacion #creadordecontenido #aitools #chatgpt #elevenlabs #creator #contentcreator #latam
- E-Commerce: #ecommerce #dropshipping #negocioonline #emprendedor #printOnDemand #shopify #ventas #latam #emprendimiento #dinerodesdeinternet #libertadfinanciera #negocio #amazon #mercadolibre #argentina

GUIÓN:
{{guion_completo}}
```

---

## Calendario de publicación de piezas derivadas

Una vez que el video principal está publicado, el resto se publica escalonado:

| Tiempo desde publicación YT | Pieza | Plataforma | Hora |
|---|---|---|---|
| Simultáneo (D+0) | Short | YouTube Shorts | Misma hora que el largo |
| D+0, 2 horas después | Caption | Instagram (post con Reel) | Hora pico (18:00–20:00) |
| D+1, mañana | TikTok | TikTok | 8:00 AM |
| D+1, tarde | Thread | X/Twitter | 12:00 PM |
| D+2, mañana | Post | LinkedIn | 8:00 AM |

**Resultado:** Un video genera actividad en 5 plataformas durante 48 horas.

---

## Notas sobre spam y calidad

- **YouTube:** 1 long + 1 Short por semana por canal. No es spam.
- **Instagram:** 1 Reel por video = 1 Reel por semana por canal. No es spam.
- **TikTok:** 1 video por semana por canal de este pipeline. Se puede complementar con contenido nativo adicional.
- **Twitter/X:** 1 thread por semana por canal. Debajo del umbral de spam.
- **LinkedIn:** 1 post por semana por canal. Frecuencia ideal para LinkedIn B2B.

**Regla anti-spam:** El mismo clip NO se publica el mismo día en Instagram Y TikTok. Se escalonan 24 horas. Los algoritmos detectan contenido idéntico publicado simultáneamente.
