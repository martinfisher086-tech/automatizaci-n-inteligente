# Thumbnail Agent — Prompt

**Propósito:** Generar 3 variantes de thumbnail candidatas para cada video usando DALL-E 3.

**Input:** Título del video + descripción breve del contenido.

**Output:** 3 imágenes PNG 1280×720px guardadas en Google Drive.

---

## Prompt base para DALL-E 3

**Instrucción del sistema para el nodo de generación:**

```
Generate a YouTube thumbnail image for a Spanish-language tech/business channel 
called "Automatización con IA para negocios LATAM".

Video title: {{video_title}}

Visual requirements:
- Format: 1280x720px, high contrast, vibrant colors
- Style: professional tech content creator thumbnail (like MrBeast but for business)
- Background: dark gradient (deep blue/purple to black) with tech grid pattern overlay
- Focal element: expressive Latino person (25-35 years old, business casual) looking 
  directly at camera with either surprised, excited, or "mind blown" expression
- Text overlay area: leave right 40% of image clear for text (text will be added in post)
- Tech elements: subtle floating icons of n8n, workflow diagrams, or robot/AI symbols
- Color accent: electric blue (#5B4FFF) or neon green (#00FF88) glow effects
- Lighting: dramatic studio lighting from above-left
- No text in the image itself

Make it click-worthy and professional, targeting small business owners in Latin America.
```

---

## 3 variantes a generar

### Variante A — "Persona expresiva + fondo tech"
El prompt base sin modificaciones. Persona con expresión de asombro.

### Variante B — "Resultado visual"
```
[mismo prompt base pero modificar:]
- Instead of a person, show a computer screen displaying an n8n workflow 
  with connected nodes glowing in blue
- Add a visual metaphor for automation: gears transforming into money or time
- Same dark background and color scheme
- Photo-realistic style
```

### Variante C — "Comparación antes/después"
```
[mismo prompt base pero modificar:]
- Split image: left half shows stressed person with paper stacks (chaotic, red tones)
- Right half shows calm person with clean desk and flowing workflow diagram (blue/green tones)
- Diagonal dividing line in the center
- Both halves use the same person/character
```

---

## Nodo n8n para generación

```
1. Input: {video_title, video_description}
2. HTTP Request POST → OpenAI Images API
   - model: "dall-e-3"
   - size: "1792x1024" (closest to 1280x720 ratio)
   - quality: "hd"
   - n: 1 (repetir 3 veces con prompts A, B, C)
3. Download image URLs
4. Upload to Google Drive /YouTube/content/video-XXX/
   - thumbnail-A.png
   - thumbnail-B.png  
   - thumbnail-C.png
5. Gmail notify: "3 thumbnails listos para video: {{video_title}}"
```

---

## Reglas de selección

Por defecto se usa la **Variante A** para publicación automática.

Si el Score del Research Agent es ≥ 9/10 (video de alto potencial), pausar pipeline y notificar al creador para selección manual.

---

## Post-producción de texto overlay (manual o Canva API)

El texto se superpone DESPUÉS de la generación con DALL-E. Formato estándar:

- **Línea 1 (superior):** Keyword principal — fuente Impact, blanco con stroke negro, 72pt
- **Línea 2 (inferior):** Número o promesa — fuente Impact, amarillo (#FFD700), 96pt
- Ejemplo: "AUTOMATIZA TU NEGOCIO" + "EN 1 HORA"
