# Producto #1 — "Build Your AI Agency with Claude: The Complete Blueprint"

> **Prioridad:** PRIMERO  
> **Razón:** Es el producto con mayor precio psicológico justificado, el que mejor conecta con tu personal brand (automatizaciones.dev), y el que más beneficia de tu YouTube principal.

---

## Concepto del producto

### El problema que resuelve

Miles de freelancers, consultores y profesionales de IT quieren "entrar en IA" pero no saben cómo monetizarlo. Los recursos disponibles son o muy teóricos (papers académicos) o muy genéricos (cursos de ChatGPT de $29). Nadie les dice exactamente cómo:
- Hablar con un cliente de servicios profesionales y explicarle qué puede hacer la IA por él
- Construir la solución técnica con Claude API en días, no meses
- Cobrar $1.500–$5.000/mes de forma recurrente y defensible

### La propuesta única de valor

"El único blueprint que combina el pitch de ventas, la arquitectura técnica Y la operación de una agencia de IA usando Claude como motor central. Con plantillas, scripts de ventas y flujos de trabajo listos para usar desde el día 1."

---

## ICP (Ideal Customer Profile)

**Nombre del avatar:** Sebastián, 32 años

| Dimensión | Detalle |
|---|---|
| **Ocupación** | Desarrollador freelance, consultor de IT, agencia digital pequeña (1-5 personas) |
| **Ingreso actual** | $2.000–$4.000/mes. Quiere llegar a $8.000–$15.000/mes |
| **Conocimiento técnico** | Puede entender APIs, tiene algo de Python o no-code. NO es data scientist. |
| **Dolor #1** | "Sé que la IA es una oportunidad enorme pero no sé por dónde empezar para cobrarla" |
| **Dolor #2** | "Consigo proyectos one-shot pero no logro ingresos recurrentes predecibles" |
| **Objeción principal** | "¿Y si el cliente se puede armar esto solo con ChatGPT?" |
| **Dónde vive online** | LinkedIn, YouTube, subreddits de freelancing e IA, newsletters de tech |
| **Trigger de compra** | Ve un video donde alguien cuenta que cobra $3k/mes por automatizaciones con IA |

---

## Estructura del ebook (90-110 páginas)

### Parte 0 — El Mercado de las Agencias de IA (15 páginas)
- **Cap 1:** Por qué las agencias de IA son el negocio más rentable de 2025-2026
  - El gap entre lo que las empresas quieren y lo que saben hacer
  - Cuánto cobra realmente una agencia de IA (con datos reales)
  - Por qué Claude es superior a GPT-4 para aplicaciones de negocio
- **Cap 2:** Los 5 servicios más fáciles de vender HOY
  - Customer support AI (chatbots personalizados con Claude)
  - Content generation systems (blog, social, emails)
  - Data analysis pipelines (informes automáticos)
  - Internal knowledge bases (Q&A sobre documentos internos)
  - Lead qualification automation

### Parte 1 — El Posicionamiento y la Venta (20 páginas)
- **Cap 3:** Elegir tu nicho: la trampa de ser "agencia de IA genérica"
  - Cómo seleccionar la industria donde tenés ventaja injusta
  - Ejemplos: IA para inmobiliarias, IA para clínicas, IA para e-commerce
  - El script para diagnosticar al cliente en 30 minutos
- **Cap 4:** Pricing y packaging de servicios
  - Los 3 modelos de precio (hourly, project, retainer) y cuándo usar cada uno
  - Ejemplo real: paquete Starter $1.500/mes, Pro $3.000/mes, Enterprise $6.000/mes
  - Cómo justificar el precio (ROI calculator template incluido)
- **Cap 5:** El proceso de ventas de 5 pasos (con scripts completos)
  - Discovery call → Propuesta → Demo → Cierre → Onboarding
  - Respuestas a las 7 objeciones más frecuentes

### Parte 2 — La Construcción Técnica (30 páginas)
- **Cap 6:** Arquitectura Claude API para aplicaciones de negocio
  - System prompts que funcionan en producción (vs. prompts de hobbyist)
  - Gestión de contexto: cómo darle a Claude memoria sin pagar tokens infinitos
  - Tool use (function calling): conectar Claude a bases de datos, CRMs, APIs externas
- **Cap 7:** El stack tecnológico por nivel de presupuesto
  - Nivel básico ($0/mes): Claude API + n8n + Google Sheets
  - Nivel medio ($200/mes): Claude API + n8n + Airtable + Zapier
  - Nivel avanzado ($500/mes): Claude API + n8n + Supabase + Railway
- **Cap 8:** Construir un chatbot de soporte al cliente con Claude (tutorial paso a paso)
  - Paso 1: Ingestar la documentación del cliente (PDF, URLs)
  - Paso 2: Implementar RAG simple sin vector database (truco de tokens)
  - Paso 3: System prompt de producción con personalidad de marca
  - Paso 4: Conectar a WhatsApp, Slack o widget de web
  - Paso 5: Dashboard de métricas para el cliente
- **Cap 9:** Construir un sistema de generación de contenido
  - Brief del cliente → Claude → Review → Publicación automatizada
  - Cómo personalizar la voz de marca en el system prompt
  - Flujo para LinkedIn + Blog + Newsletter desde una sola fuente

### Parte 3 — La Operación y la Escala (25 páginas)
- **Cap 10:** Entregables, reportes y retención de clientes
  - Qué medir y cómo reportarlo (dashboard de Looker Studio automatizado)
  - Cómo hacer que el cliente dependa del sistema (y de vos)
  - La conversación de renovación y upsell mensual
- **Cap 11:** Contratos, propiedad intelectual y protección legal
  - Qué cláusulas incluir en el contrato de servicio
  - Quién es dueño del sistema construido (crucial)
  - Cómo manejar las SLAs sin morir en el proceso
- **Cap 12:** De 1 cliente a 10: contratar sin romper la calidad
  - Cuándo contratar tu primer colaborador y a quién
  - Cómo documentar los sistemas para que otros los operen
  - El modelo de "agencia leveraged": vos vendes, otro ejecuta

### Apéndices (10 páginas)
- Prompt Library: 30 prompts de producción para los casos de uso más comunes
- ROI Calculator Template (Excel/Google Sheets)
- Plantilla de propuesta comercial (Word/Google Docs)
- Script completo de discovery call
- Checklist de onboarding de nuevo cliente

---

## Cómo Claude interviene en la producción

### Fase 1: Research y validación (Agente Research)
```python
# Prompt para el agente de research
"""
Analiza el mercado de agencias de servicios de IA en 2025-2026.

Busca:
1. Tarifas promedio que cobran agencias de IA por tipo de servicio
2. Nichos de industria con mayor adopción de IA (no tech)
3. Objeciones más frecuentes en ventas B2B de servicios de IA
4. Casos de éxito documentados de agencias de IA pequeñas

Output: JSON con datos, fuentes, y análisis de implicaciones para el ebook.
"""
```

### Fase 2: Escritura por capítulos (Agente Writer)
```python
# Cada capítulo se genera con contexto del libro completo
# Claude recibe: outline del capítulo + resumen de capítulos anteriores
# + snippets de research relevante + ejemplos específicos a incluir
```

### Fase 3: Validación de prompts técnicos (Agente Validator)
```python
"""
Los siguientes prompts de Claude son parte del Capítulo 8 del ebook.
Testa cada uno ejecutándolo y verifica que produce el output esperado.
Reporta: funciona ✅ / no funciona ❌ / parcialmente ⚠️ + corrección sugerida.

[lista de prompts del capítulo]
"""
```

### Fase 4: Marketing copy (Agente Marketing)
```python
"""
Genera el copy completo de venta para este ebook:
- Título + subtítulo (5 variantes para A/B test)
- Descripción Gumroad (250 palabras, orientada a beneficios)
- Email de lanzamiento (asunto + cuerpo, 400 palabras)
- Tweet thread de 8 tweets para lanzamiento
- 3 ideas de video de YouTube que promuevan el ebook
"""
```

---

## Precio y posicionamiento

| Variante | Precio | Qué incluye |
|---|---|---|
| **Ebook solo** | $97 | PDF 110 páginas |
| **Ebook + Templates** | $147 | PDF + ROI calculator + Propuesta comercial + 30 prompts de producción |
| **Ebook + Templates + 1h consulta** | $297 | Todo lo anterior + 1 sesión de strategy call |

**Precio de lanzamiento (primeros 7 días):** 30% de descuento

### Justificación del precio

- El comprador busca conseguir 1 cliente de $1.500/mes con este ebook
- ROI del ebook: 10x en el primer mes si consigue 1 cliente
- Competencia más cara: cursos de agencias de IA cobran $1.000–$5.000
- Competencia más barata: posts de blog gratuitos sin profundidad técnica
- **Nuestro sweet spot:** Profundidad de un curso, precio de un ebook

---

## Canal de distribución y marketing

### Canal primario: YouTube (tu canal principal de automatización)

**Videos que preceden el lanzamiento (publicar antes):**
1. "Cobré $3.000 por una automatización con Claude API — Así lo construí" → Caso real + CTA al ebook
2. "El error que cometen todos al armar una agencia de IA (y cómo evitarlo)" → Genera urgencia
3. Tutorial: "Chatbot de soporte con Claude en 45 minutos" → Demo del capítulo 8

**Descripción del video:** Incluye link al ebook como recurso #1

### Canal secundario: LinkedIn

- 5 posts semanales sobre agencias de IA durante 3 semanas antes del lanzamiento
- Cada post termina con "Tip sacado de mi ebook — link en comentarios"
- Formato favorito de LinkedIn: "Los 5 errores al cobrar por IA" → lista + cierre con CTA

### Canal terciario: Comunidades (sin spam)

- Reddit r/freelance, r/ClaudeAI, r/artificial — aportar valor en threads existentes
- Discord de n8n, Make, Anthropic — contribuir antes de promocionar
- Slack de comunidades de tech LATAM

### Canal de amplificación: Email list

- Ofrecer capítulo 1 + capítulo 8 GRATIS a cambio del email
- Secuencia de 5 emails antes del lanzamiento:
  - Email 1 (día 1): "El mercado de IA que nadie está viendo" (educación)
  - Email 2 (día 3): "Cuánto cobran realmente las agencias de IA" (dato)
  - Email 3 (día 5): "Los 5 servicios más fáciles de vender" (extracto del ebook)
  - Email 4 (día 7): "Ya disponible: Build Your AI Agency" (lanzamiento)
  - Email 5 (día 9): "Último día precio de lanzamiento" (urgencia)

---

## Proyecciones financieras

### Escenario conservador (mes 1)

| Métrica | Valor |
|---|---|
| Visitas a la página de venta | 800 |
| Tasa de conversión | 3% |
| Ventas mes 1 | 24 |
| Precio promedio | $130 (mix $97/$147) |
| Ingresos mes 1 | $3.120 |

### Escenario realista (mes 3, con tracción YouTube)

| Métrica | Valor |
|---|---|
| Visitas a la página de venta | 2.500 |
| Tasa de conversión | 4% |
| Ventas mes 3 | 100 |
| Precio promedio | $130 |
| Ingresos mes 3 | $13.000 |

### Break-even

El ebook requiere:
- ~8 horas de setup del pipeline ($0 — tu tiempo)
- ~$4 en API para generarlo
- ~12 horas de revisión y edición
- **Total: ~20 horas de trabajo → ROI desde la venta #1**

---

## KPIs de éxito (primeros 90 días)

| KPI | Target |
|---|---|
| Ventas totales mes 1 | 20+ |
| Ventas totales mes 3 | 100+ |
| Rating promedio de reseñas | 4.5+/5 |
| Tasa de reembolso | <3% |
| Email subscribers generados | 500+ |
| Reviews escritas voluntariamente | 10+ |
| Ventas de upsell ($297 version) | 5+ |
