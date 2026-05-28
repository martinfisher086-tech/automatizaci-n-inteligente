# Producto #4 — "The YouTube AI Content Machine: Build an Automated Channel in 30 Days"

> **Ventaja única:** Estás construyendo exactamente esto. El ebook documenta el sistema que ya tenés en producción. Eso genera una credibilidad imbatible — no enseñás teoría, enseñás lo que funciona.

---

## Concepto del producto

### El problema

Los creadores de contenido enfrentan dos problemas simultáneos:
1. **El problema del tiempo:** Crear un video de YouTube bien producido toma 8-20 horas entre investigar, escribir, grabar, editar y publicar. Hacerlo consistentemente es insostenible.
2. **El problema de la escala:** Los canales exitosos necesitan publicar 1-2 veces por semana para crecer. Nadie puede hacer eso solo con calidad alta.

La IA cambia esta ecuación. Pero la mayoría de los videos sobre "YouTube con IA" enseñan trucos aislados (usar ChatGPT para escribir el guión). Nadie enseña el SISTEMA COMPLETO.

### La propuesta única de valor

"El sistema exacto para crear un canal de YouTube automatizado en 30 días: desde la investigación de temas hasta la publicación, usando un pipeline de 7 agentes de IA que produce videos con 80% menos tiempo — con puntos de revisión humana para mantener calidad."

### Por qué esto vende

- Los creadores de YouTube SIEMPRE están buscando cómo ser más eficientes
- El tema "YouTube + IA" tiene demanda creciente pero poca oferta de calidad
- El ebook puede auto-demostrarse: el canal de YouTube del autor es la prueba viviente del sistema

---

## ICP

**Avatar:** Andrés, 28 años, creador de contenido o aspirante

| Dimensión | Detalle |
|---|---|
| **Perfil A** | YouTuber con 1k-50k subs que quiere escalar sin contratar un equipo |
| **Perfil B** | Emprendedor/freelancer que quiere construir un canal para monetizar su expertise |
| **Dolor A** | "Publico irregular porque el proceso de producción me consume" |
| **Dolor B** | "Quiero empezar un canal pero no tengo tiempo ni sé por dónde empezar" |
| **Aspiración** | Un canal con ingresos pasivos de $2.000-$10.000/mes sin trabajar 40hs/semana en él |
| **Objeción** | "¿Los videos generados por IA son penalizados por YouTube?" |
| **Trigger de compra** | Ve un canal creciendo rápido y descubre que usa IA como parte del proceso |

---

## Estructura del ebook (100-120 páginas)

### Parte 0 — El Sistema y la Filosofía (10 páginas)
- **Cap 1:** Por qué el modelo "1 video semanal repurposed en 6 piezas" gana al modelo de grind diario
  - Datos de comparativa: consistencia > frecuencia para el algoritmo de YouTube
  - El mito de "el algoritmo detecta contenido de IA" — qué dice YouTube realmente
  - Los 3 puntos de revisión humana que preservan autenticidad y calidad
- **Cap 2:** La arquitectura de los 7 agentes — visión general
  - Mapa del pipeline completo (el mismo que tenés en tu MASTER-ORCHESTRATOR)
  - Qué hace cada agente, qué modelo usa, y por qué
  - Cuánto cuesta correr el pipeline por video (~$3-7 en API)

### Parte 1 — Setup del Canal (20 páginas)
- **Cap 3:** Elegir el nicho ganador con Claude
  - Los 5 criterios de un nicho monetizable (CPM, competencia, demanda, durabilidad, tu expertise)
  - El prompt de análisis de nicho: Claude evalúa 10 ideas y rankea por potencial
  - Cómo encontrar el "ángulo único" dentro de un nicho saturado
- **Cap 4:** El ICP del canal — construir la audiencia ideal con IA
  - Prompt para definir al espectador ideal en profundidad
  - Cómo usar el ICP para escribir mejores guiones y thumbnails
- **Cap 5:** Configuración técnica del canal
  - Nombres de canal, arte, descripción — generados con Claude
  - Playlists estratégicas desde el inicio
  - Monetización: cuándo y cómo configurar AdSense, afiliados y productos propios

### Parte 2 — El Pipeline de Producción (50 páginas)
- **Cap 6: Agente Research** — Encontrar temas que rankean
  - Cómo configurar el research agent (prompt completo + configuración)
  - Fuentes de data: YouTube search, Google Trends, Reddit, comments de competidores
  - Output: JSON con 10 temas rankeados por potencial + keyword principal + ángulo de hook
  - Checkpoint humano #1: seleccionar el tema (5 minutos)

- **Cap 7: Agente Script** — Guiones que retienen y convierten
  - La estructura del guión: Hook (30s) → Intro (90s) → 4 secciones → CTA
  - La biblioteca de hooks: 20 formatos probados con ejemplos escritos
  - Cómo incluir CTAs de afiliados de forma natural
  - Checkpoint humano #2: revisar el guión (10 minutos)

- **Cap 8: Agente Storyboard** — De texto a imágenes
  - El formato JSON del storyboard por escena
  - Los 5 tipos de escena: IMAGEN_GENERADA, VIDEO_STOCK, SCREENCAST, ANIMACION_TEXTO, IMAGEN_EXISTENTE
  - Prompts de DALL-E 3 que generan imágenes consistentes con el estilo del canal
  - Cómo obtener videos stock gratuitos con Pexels + instrucciones de búsqueda

- **Cap 9: Agente Voice** — Voz over con ElevenLabs
  - Elegir la voz adecuada para tu nicho (parámetros de stability, similarity, style)
  - Configurar la pronunciación de términos técnicos
  - Normalización de audio: -14 LUFS para YouTube
  - Alternativa gratuita: Murf.ai o Adobe Podcast

- **Cap 10: Agente Assembly** — Ensamblar el video con FFmpeg
  - Los comandos FFmpeg para cada tipo de escena (con código listo para copiar)
  - Cómo generar transiciones automáticas
  - Agregar música de fondo (playlists libres de derechos + volumen automático)
  - Render final: 1080p, 30fps, AAC audio

- **Cap 11: Agente QA** — Checklist de calidad automatizado
  - Qué verifica el agente QA: durabilidad, coherencia visual, audio limpio, CTAs presentes
  - El checklist manual de 15 minutos antes de publicar
  - Cómo manejar los rechazos del QA agent

- **Cap 12: Agente Publishing** — Publicación y distribución
  - YouTube Data API v3: cargar video, título, descripción, tags, thumbnail desde código
  - Programar publicación en el horario óptimo de tu audiencia
  - Distribuir automáticamente a Shorts, Instagram Reels, TikTok

### Parte 3 — Monetización y Escala (25 páginas)
- **Cap 13: Agente Repurposing** — 1 video → 6 piezas de contenido
  - FFmpeg para cortar shorts: los 55 segundos más impactantes del video
  - Claude genera automáticamente: tweet thread + LinkedIn post + IG caption + newsletter
  - Programar todo desde Buffer o Later de forma automatizada

- **Cap 14:** Monetización sin llegar a 1.000 suscriptores
  - Afiliados: qué programas tienen los CPMs más altos y cómo integrarlos en los guiones
  - Productos digitales: link al ebook en la descripción del primer video
  - Patrocinios: cuándo, cómo cobrar, qué incluir en el media kit

- **Cap 15:** Escalar de 1 canal a 5 — el multi-canal strategy
  - Cómo el mismo pipeline sirve para múltiples nichos
  - Gestión del pipeline multi-canal (el calendario maestro)
  - Cuándo contratar un editor humano para revisar los videos de mayor valor

### Apéndices
- Todos los prompts del sistema (Research + Script + Storyboard + QA + Repurposing)
- n8n workflow template (JSON para importar)
- ElevenLabs voice config JSON
- FFmpeg commands cheat sheet
- Calendario de contenido template (Google Sheets)

---

## Cómo Claude produce este ebook

Este es el producto donde la ironía es más fuerte: **el ebook sobre usar Claude para YouTube está escrito por Claude**. Y eso es parte del marketing.

```python
# ORCHESTRATOR prompt para este ebook
"""
Escribe el Capítulo 8 del ebook "YouTube AI Content Machine".
El tema es: Agente Storyboard — de texto a imágenes.

AUDIENCIA: Creadores de contenido con conocimiento intermedio de IA.
No saben Python pero pueden seguir instrucciones técnicas paso a paso.

ESTE CAPÍTULO DEBE INCLUIR:
1. El formato JSON del storyboard (con ejemplo completo de 5 escenas)
2. Los 5 tipos de escena con descripción y cuándo usar cada uno
3. Mínimo 5 prompts de DALL-E 3 de ejemplo (para diferentes tipos de contenido)
4. Tabla comparativa: cuándo usar imagen generada vs. stock video
5. Checkpoint humano: cómo revisar el storyboard en 5 minutos

IMPORTANTE: Incluir código JSON y prompts listos para copiar.
Tonos los bloques de código deben estar en backticks triple.
"""
```

**Ventaja de producción:** El capítulo 8 es básicamente la documentación del archivo `pipeline-compartido/03-storyboard-agent.md` que ya existe. Claude lo reformatea para audiencia de creadores.

---

## Formato y precio

| Variante | Precio | Contenido |
|---|---|---|
| **Ebook PDF** | $97 | 120 páginas |
| **Ebook + n8n Template** | $127 | PDF + workflow importable |
| **Ebook + n8n + Consulta** | $247 | Todo + 60 min setup call |

---

## Canal de distribución

### Auto-marketing desde YouTube

Este ebook se vende solo desde los canales de YouTube porque el contenido del canal ES el ebook en acción:

- Cada video del canal es evidencia de que el sistema funciona
- Descripción de cada video: "Usé el sistema del ebook para crear este video — Link abajo"
- End screen: "Descubrí cómo automaticé este canal → Link en descripción"

### Gumroad como plataforma principal

- No Etsy (demasiado creativo, no técnico)
- Gumroad tiene la audiencia técnica correcta
- Opción de "pay what you want" con mínimo $97 para aumentar conversión

### Creator economy communities

- Skool communities de creadores de contenido
- Beehiiv newsletter ecosystem
- Kit (ConvertKit) community
