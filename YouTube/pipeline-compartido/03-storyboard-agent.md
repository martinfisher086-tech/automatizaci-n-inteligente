# Storyboard Agent — Prompt y Especificaciones

**Propósito:** Convertir un guión aprobado en un archivo `storyboard.json` escena-por-escena que el Assembly Agent puede procesar directamente con FFmpeg, sin intervención humana adicional.

**Input:** `guion.md` aprobado por el humano
**Output:** `storyboard.json` + resumen visual en `storyboard-preview.md` (para el Checkpoint #3)

---

## Prompt del Storyboard Agent

```
Eres un director de arte especializado en videos educativos de YouTube para LATAM.
Tu tarea es convertir el siguiente guión en un storyboard técnico que un sistema 
de automatización pueda procesar directamente.

REGLAS ESTRICTAS:
1. Cada escena dura entre 5 y 10 segundos (no más, no menos)
2. El total de escenas debe cubrir exactamente la duración del audio
3. Alterna inteligentemente entre TIPO_IMAGEN y TIPO_VIDEO para evitar que el video sea estático
4. Las escenas de datos/estadísticas SIEMPRE usan TIPO_ANIMACION o TIPO_IMAGEN con overlay
5. Las escenas de procesos paso-a-paso usan TIPO_SCREENCAST cuando sea posible
6. Los primeros 30 segundos son críticos: usa los visuales más impactantes

TIPOS DE ESCENA disponibles:
- IMAGEN_GENERADA: genera con DALL-E 3 (usa para personas, situaciones, conceptos)
- VIDEO_STOCK: busca en Pexels (usa para B-roll genérico: oficinas, tecnología, ciudades)
- SCREENCAST: instrucción de captura de pantalla (usa para demos de software)
- ANIMACION_TEXTO: solo texto animado sobre fondo oscuro (usa para stats, quotes)
- IMAGEN_EXISTENTE: usa asset del brand guide (logos, thumbnails del canal)

FORMATO DE OUTPUT (JSON estricto):

{
  "video_id": "{{video_id}}",
  "canal": "{{canal_nombre}}",
  "titulo": "{{titulo_video}}",
  "duracion_estimada_segundos": {{duracion}},
  "total_escenas": {{n}},
  "escenas": [
    {
      "id": "S001",
      "inicio_segundos": 0,
      "fin_segundos": 6,
      "guion_segmento": "texto exacto que narra la voz en este momento",
      "tipo": "IMAGEN_GENERADA",
      "prompt_visual": "prompt en inglés para DALL-E 3, estilo cinematográfico, 16:9, dark professional",
      "query_pexels": "english keywords for Pexels fallback search",
      "texto_overlay": {
        "linea1": "texto línea 1 (Impact, blanco, mayúsculas)",
        "linea2": "texto línea 2 (Impact, amarillo #FFD700)",
        "posicion": "top-right | bottom-center | center",
        "mostrar": true
      },
      "musica": "mantener | fade-in | fade-out | silencio",
      "transicion_entrada": "fade | cut | slide-left | zoom-in",
      "notas_produccion": "instrucción especial para el editor/assembler"
    }
  ],
  "musica_fondo": {
    "track": "ambient-tech-01.mp3",
    "volumen_base": 0.15,
    "duck_en_habla": true
  },
  "subtitulos": {
    "activar": true,
    "idioma": "es",
    "fuente": "Inter",
    "color_texto": "#FFFFFF",
    "color_fondo": "rgba(0,0,0,0.7)",
    "posicion": "bottom-center"
  }
}

GUIÓN A PROCESAR:
{{guion_completo}}

PERFIL DE MARCA (para consistencia visual):
{{brand_guide}}

Genera el storyboard completo. No omitas ninguna escena. Cada línea del guión debe estar cubierta.
```

---

## Reglas de correspondencia Guión → Visual

| Tipo de contenido en guión | Tipo de escena recomendado | Ejemplo de prompt |
|---|---|---|
| Hook con estadística | ANIMACION_TEXTO + IMAGEN_GENERADA | "El 73% de las PYMES..." → texto grande, luego persona sorprendida |
| Problema del ICP | IMAGEN_GENERADA | "stressed Latin businessman drowning in paperwork, dark office" |
| Solución / herramienta | SCREENCAST o VIDEO_STOCK | "n8n workflow diagram animated" |
| Caso de negocio real | IMAGEN_GENERADA | "successful small business owner smiling at computer, LATAM office" |
| Paso a paso | SCREENCAST | Grabación de pantalla de la herramienta |
| Dato / cifra | ANIMACION_TEXTO | Número grande, fondo oscuro, sin imágenes |
| CTA final | IMAGEN_EXISTENTE + ANIMACION_TEXTO | Logo del canal + "SUSCRIBITE" |
| Afiliado | VIDEO_STOCK + texto overlay | B-roll de la herramienta + link en pantalla |

---

## Especificaciones técnicas para Assembly Agent (FFmpeg)

El `storyboard.json` es la fuente de verdad para el assembler. Cada campo mapea a un parámetro de FFmpeg:

```bash
# Ejemplo de escena IMAGEN_GENERADA con overlay de texto
ffmpeg -loop 1 -t {duracion} -i {imagen.png} \
  -vf "scale=1920:1080,zoompan=z='min(zoom+0.001,1.3)':d={frames}" \
  -vf "drawtext=text='{linea1}':fontfile=Impact.ttf:fontsize=72:fontcolor=white:x=50:y=50" \
  scene_{id}.mp4

# Ejemplo de escena VIDEO_STOCK
ffmpeg -i {clip_pexels.mp4} -ss {inicio} -t {duracion} \
  -vf "scale=1920:1080,setsar=1" scene_{id}.mp4

# Concatenar todas las escenas
ffmpeg -f concat -safe 0 -i scene_list.txt \
  -i audio.mp3 -c:v libx264 -c:a aac -shortest video-draft.mp4
```

---

## Storyboard Preview (para Checkpoint #3 humano)

El agente también genera `storyboard-preview.md` con este formato (legible por humano):

```markdown
## Storyboard Preview — [Título del video]

**Total escenas:** 72 | **Duración estimada:** 10:24 min

| # | Tiempo | Texto narrado | Visual | Overlay |
|---|---|---|---|---|
| S001 | 0:00–0:06 | "¿Sabías que el 73%..." | 🎨 Imagen generada (hombre sorprendido) | "73% DE LAS PYMES" |
| S002 | 0:06–0:12 | "...pierde 10 horas..." | 📊 Texto animado | "10 HORAS/SEMANA" |
| S003 | 0:12–0:20 | "Hoy te voy a mostrar..." | 🎬 Video stock (oficina moderna) | — |
...
```

El humano revisa este preview en 5 minutos y aprueba o edita prompts específicos antes de que el agente de producción visual empiece.

---

## Límites de escenas por sección

| Sección del guión | Duración | Escenas aprox |
|---|---|---|
| Hook | 0:00–0:30 | 4–6 |
| Intro | 0:30–2:00 | 10–12 |
| Sección 1 | 2:00–3:30 | 10–12 |
| Sección 2 | 3:30–5:00 | 10–12 |
| Sección 3 | 5:00–6:30 | 10–12 |
| Sección 4 | 6:30–8:00 | 10–12 |
| CTA | 8:00–9:00 | 6–8 |
| **Total** | **~9–10 min** | **~70–75** |
