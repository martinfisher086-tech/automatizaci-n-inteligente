# Prompt para imagen OG — automatizaciones.dev

Guardar el resultado como `public/og-image.png` (1200 × 630 px).

---

## Prompt para modelo generativo (Nanobana 2 / DALL-E 3 / Flux / Ideogram)

```
Create a professional Open Graph banner image at exactly 1200x630 pixels for a freelancer AI automation service called "Automatizaciones con IA" based in Buenos Aires, Argentina.

LAYOUT:
- Left 60%: main copy and branding
- Right 40%: abstract tech visual element

BACKGROUND:
- Very dark navy, almost black: #080A12 (near hsl(240 20% 5%))
- Subtle radial gradient in bottom-left corner using deep violet #2D1B69 (10% opacity)
- Fine grid pattern overlay at 2% opacity in white — small squares, tech aesthetic

LEFT SIDE — TEXT CONTENT (render as crisp vector text, not raster):
- Top badge (small, rounded pill): "AUTOMATIZACIÓN CON IA · CABA · LATAM" — monospace font, 11px, cyan color #2DDDB8, uppercase, with a 1px cyan border
- Main headline: "Automatizaciones con IA" — Inter Bold, 62px, white #FFFFFF, letter-spacing -1px
- Gradient subline: "que trabajan por vos." — Inter Bold, 58px, gradient left-to-right from cyan #2DDDB8 to violet #7C6DFA
- Separator line: thin 1px horizontal line, 200px wide, gradient cyan to transparent
- Three stat pills below the line (horizontal row, gap 16px):
  · "+1.000h / Trabajo eliminado"
  · "5–10d / Entrega"
  · "30d / Soporte"
  Each pill: rounded full, dark background #0F1120, 1px border at 30% opacity, small text 12px Inter Medium, white text
- Bottom URL: "automatizaciones.dev" — Inter Regular, 16px, muted color #8892A0

RIGHT SIDE — VISUAL ELEMENT:
- An abstract floating dark card (rounded-2xl, subtle border at 20% white opacity, very dark bg #0D0F1E)
- Inside the card: a minimal terminal window showing 4 lines of glowing text:
  · "$ n8n workflow · activado"    (cyan #2DDDB8)
  · "◆ [WhatsApp] lead recibido"  (white/muted)
  · "◆ [Claude] score: 91"         (violet #7C6DFA)
  · "✓ Pipeline · 1.2s"            (green #22C55E)
- Terminal has 3 colored dots at top-left (red, yellow, green) — standard macOS style
- Around the card: 12-15 small glowing nodes connected by thin cyan lines, like a neural network — same aesthetic as the site's canvas background

OVERALL STYLE:
- Dark mode, developer aesthetic, professional and trustworthy
- Not generic AI stock art — no robot hands, no blue brain neurons
- Clean whitespace, strong typography hierarchy
- Cyan (#2DDDB8) as the primary accent, violet (#7C6DFA) as secondary, green (#22C55E) only for success indicators
- No gradients that look cheap — subtle, directional, purposeful
- The overall feel: "This is a real professional who knows what they're doing, not a startup trying to look techy"

OUTPUT: PNG, 1200x630px, sRGB color space
```

---

## Colores exactos del sitio (para consistencia)

| Token | Hex | Uso |
|-------|-----|-----|
| Fondo | `#080A12` | Background principal |
| Cyan primario | `#2DDDB8` | Accent, CTAs, highlights |
| Violeta secundario | `#7C6DFA` | Gradient, badges |
| Texto principal | `#F1F5F9` | Headings |
| Texto secundario | `#8892A0` | Subtítulos, labels |
| Card background | `#0D0F1E` | Surfaces oscuras |

## Texto fijo que debe aparecer en la imagen

- **Headline:** `Automatizaciones con IA`
- **Subline:** `que trabajan por vos.`
- **URL:** `automatizaciones.dev`

## Notas para el diseñador / prompt engineer

- La imagen se muestra en previews de WhatsApp, LinkedIn, Twitter/X, Facebook y Slack cuando alguien comparte el link
- El público objetivo son dueños de PYMES argentinas — el tono debe ser profesional pero accesible, no frío ni corporativo
- Evitar: imágenes de stock de robots, íconos de engranajes genéricos, gradientes de arcoíris
- Si el modelo genera texto malo, renderizar el texto en post-producción con Figma/Canva usando la fuente Inter Bold
