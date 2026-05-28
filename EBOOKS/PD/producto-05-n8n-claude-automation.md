# Producto #5 — "n8n + Claude: Automatizá Tu Negocio sin Escribir Código"

> **Posicionamiento:** El ebook más técnico y más premium ($167). Apunta al buyer con mayor dolor (dueños de negocio y freelancers que saben que la automatización les ahorraría horas) y mayor capacidad de pago. El que más se beneficia de tu personal brand en automatización.

---

## Concepto del producto

### El problema que resuelve

Las PYMEs y freelancers pierden 15-20 horas semanales en tareas repetitivas:
- Responder emails de consultas siempre iguales
- Pasar datos de formularios a hojas de cálculo
- Crear informes que siempre tienen la misma estructura
- Publicar contenido en múltiples plataformas manualmente
- Hacer seguimiento de clientes que no respondieron

n8n puede automatizar todo esto. Claude puede hacerlo inteligente (no solo "mover datos", sino "entender el email y tomar una decisión"). Pero la curva de aprendizaje combinada es brutal.

**Este ebook colapsa esa curva de 6 meses a 30 días.**

### La propuesta única de valor

"20 flujos de automatización listos para importar en n8n, con Claude como cerebro de cada uno. Copiás el workflow, configurás tus credenciales, y en 1 hora tu negocio tiene automatizaciones que antes costaban $500/mes en SaaS."

---

## ICP

**Avatar:** Rodrigo, 38 años, dueño de agencia o freelancer senior

| Dimensión | Detalle |
|---|---|
| **Perfil** | Dueño de agencia de marketing/diseño/consultoría, freelancer senior, gerente de operaciones en PYME |
| **Equipo** | 2-10 personas. El cuello de botella es él mismo. |
| **Dolor #1** | "Paso 3 horas al día respondiendo emails que siempre dicen lo mismo" |
| **Dolor #2** | "Pago por Zapier + Make + Mailchimp + [SaaS] y suman $400/mes — ¿hay alternativa?" |
| **Dolor #3** | "Probé n8n pero no entiendo cómo conectar Claude para que haga cosas inteligentes" |
| **Disposición a pagar** | Alta — si le ahorra 10h/semana, $167 es nada |
| **Objeción** | "¿Necesito saber programar para esto?" (la respuesta es no, pero tiene que estar MUY clara) |
| **Dónde vive** | LinkedIn, YouTube tech, comunidad de n8n, podcast de negocios |

---

## El producto: 20 Workflows listos para importar

### Grupo 1 — Email Intelligence (5 workflows)

**WF-01: AI Email Triage**
```
Gmail → n8n → Claude → Label + Draft Reply
Claude analiza el email, categoriza (urgente/cliente/spam/info) y 
redacta una respuesta borrador lista para revisar y enviar.
Ahorro: 45 minutos/día en emails.
```

**WF-02: Lead Qualification Automática**
```
Formulario web → n8n → Claude → Scoring → CRM (Pipedrive/HubSpot)
Claude lee el formulario del lead, evalúa el fit (1-10), 
asigna prioridad y redacta el primer email de contacto personalizado.
Ahorro: 1 hora/día de calificación manual.
```

**WF-03: Email Newsletter Summary**
```
Gmail/RSS → n8n cada lunes → Claude → Slack/Notion
Claude resume los emails de newsletters de la semana en un digest de 5 bullets.
Nunca más sentirte abrumado por la información.
```

**WF-04: Customer Complaint Auto-Response**
```
Email con palabras clave (queja, problema, no funciona) → Claude →
Respuesta empática personalizada → Draft para revisión → Alerta al equipo
```

**WF-05: Contract/Invoice Processing**
```
Email con adjunto PDF → n8n → Claude (extrae datos del PDF) → 
Airtable/Google Sheets → Notificación con resumen
```

### Grupo 2 — Content Automation (5 workflows)

**WF-06: Blog Post → Multi-Platform Publisher**
```
Notion nuevo post publicado → n8n → Claude →
  LinkedIn post (professional) + 
  Twitter thread (informal) + 
  Instagram caption (visual) + 
  Newsletter section →
Buffer scheduled publish
```

**WF-07: Competitor Monitor + Digest**
```
RSS feeds de competidores → n8n (diario) → Claude →
Analiza cambios importantes → Digest en Slack cada lunes
```

**WF-08: YouTube Video → Blog Post**
```
Nuevo video YouTube (transcript via API) → n8n → Claude →
Post de blog SEO-optimizado → Draft en WordPress/Ghost
```

**WF-09: Client Report Generator**
```
Trigger mensual → n8n → Google Analytics API + Ads API →
Claude analiza datos → Genera informe ejecutivo en PDF →
Envía por email al cliente
```

**WF-10: Social Media Monitoring + Respuesta**
```
Menciones de marca en Twitter/Instagram → n8n → Claude →
Respuesta apropiada según el sentimiento (positivo/neutro/negativo) →
Draft para aprobación
```

### Grupo 3 — Operations & CRM (5 workflows)

**WF-11: Onboarding de Nuevo Cliente Automático**
```
Deal ganado en CRM → n8n → 
  Email de bienvenida personalizado (Claude) +
  Crear proyecto en Notion/Asana +
  Agendar kick-off meeting (Calendar API) +
  Enviar cuestionario de onboarding
```

**WF-12: Invoice Follow-up Inteligente**
```
Factura vencida → n8n → Claude genera follow-up amigable en día 3, 
formal en día 7, escalado en día 14 → Envío automatizado
```

**WF-13: Meeting Notes → Action Items**
```
Transcript de reunión (Otter.ai/Fireflies) → n8n → Claude →
Extrae action items con responsable + deadline →
Crea tareas en Asana/Notion + Envía resumen por email
```

**WF-14: Employee Performance Tracker**
```
Cada viernes → n8n pregunta al equipo: "¿Qué completaste esta semana?" (Slack) →
Claude sintetiza respuestas → Genera reporte para manager
```

**WF-15: Price/Availability Monitor**
```
Trigger cada 6hs → Scraping de precios de competidores → Claude analiza →
Si hay cambio significativo → Alerta en Slack con recomendación de acción
```

### Grupo 4 — AI-Powered Analytics (5 workflows)

**WF-16: Sales Data Weekly Analysis**
```
Lunes 9am → n8n → Google Sheets/Stripe API → Claude analiza semana →
"La semana pasada: +23% en ventas. Producto X fue el top. 
Recomendación: aumentar ads en campaña Y."
→ Enviar por email al dueño
```

**WF-17: Customer Churn Predictor**
```
Airtable/Stripe → n8n mensual → Claude analiza patrones de uso/pago →
Lista de clientes en riesgo de churn con score 1-10 →
Draft de email de retención personalizado para cada uno
```

**WF-18: Support Ticket Intelligence**
```
Tickets de soporte (Zendesk/Freshdesk) → n8n → Claude categoriza, 
prioriza, sugiere respuesta desde knowledge base → Asigna al agente correcto
```

**WF-19: Financial Anomaly Detector**
```
Exportar gastos de semana → n8n → Claude compara vs. semana anterior →
Si hay gasto inusual >20% → Alerta con explicación y contexto
```

**WF-20: AI Business Dashboard Narrator**
```
Cada domingo 8pm → n8n recopila métricas de todas las fuentes →
Claude redacta un "resumen ejecutivo" en prosa de la semana →
Envío por WhatsApp al dueño para leer el lunes antes de empezar
```

---

## Estructura del ebook (110-130 páginas)

### Parte 0 — Fundamentos (15 páginas)
- Cap 1: Por qué n8n + Claude es el stack de automatización más poderoso de 2025-2026
- Cap 2: Setup inicial (n8n en la nube vs. self-hosted, cuenta Claude API, credenciales)
- Cap 3: La arquitectura de un workflow inteligente — cómo conectar n8n y Claude

### Parte 1 — Los 20 Workflows (70 páginas)
- 3-4 páginas por workflow con:
  - Qué hace y cuánto ahorra
  - Diagrama del flujo
  - Configuración paso a paso con capturas
  - El prompt de Claude que se usa (completo, listo para copiar)
  - Cómo personalizar para tu caso específico
  - Errores comunes y cómo resolverlos

### Parte 2 — Construir tus Propios Workflows (20 páginas)
- Cap 4: El framework para diseñar cualquier automatización en 30 minutos
  - Mapear el proceso manual → Identificar triggers → Definir el "cerebro Claude" → Conectar acciones
- Cap 5: Prompt engineering avanzado para automatizaciones de producción
  - System prompts para agentes que deben ser confiables (no creativos)
  - Manejo de errores: qué hacer cuando Claude devuelve algo inesperado
  - Guardrails y validaciones antes de ejecutar acciones irreversibles

### Parte 3 — Monetizar las Automatizaciones (15 páginas)
- Cap 6: Vender estas automatizaciones a tus clientes
  - Cómo presentarlos como servicio de $500-$2.000/mes
  - El pricing de "setup + retainer mensual"
  - Qué incluir en el contrato de automatización

### Apéndices
- Los 20 workflows como JSON importable (link de descarga)
- Glosario de n8n
- Debugging guide: los 10 errores más frecuentes y sus soluciones
- Templates de prompts para los 20 casos de uso

---

## Producción con Claude

Este ebook tiene la mayor cantidad de contenido técnico — y es donde Claude brilla más como productor:

```python
# Prompt para documentar cada workflow
"""
Documenta el workflow WF-01: AI Email Triage para el ebook "n8n + Claude".

AUDIENCIA: Dueños de negocio sin conocimiento de programación.

ESTRUCTURA REQUERIDA:
## WF-01: AI Email Triage
### ¿Qué hace? (2 párrafos, lenguaje simple)
### ¿Cuánto tiempo ahorra? (con cálculo específico)
### Cómo funciona (diagrama en texto ASCII)
### Configuración paso a paso (numerada, con capturas mencionadas)
### El prompt de Claude (bloque de código completo)
### Personalización (3 variantes del workflow)
### Errores comunes y soluciones (tabla)

IMPORTANTE:
- El prompt de Claude debe estar completo y funcionar tal cual
- Los pasos de configuración deben ser reproducibles por alguien sin conocimiento técnico
- Incluir el tiempo de setup estimado al inicio
"""
```

**El producto se auto-valida:** Claude documenta los workflows mientras los construís en n8n. El workflow que construís para tu negocio → se convierte en el capítulo del ebook → se incluye como JSON descargable.

---

## Precio y packaging

| Variante | Precio | Contenido |
|---|---|---|
| **Ebook solo** | $127 | PDF + los 20 JSON de workflows |
| **Ebook + Soporte** | $167 | PDF + JSONs + 30 días de soporte por email |
| **Ebook + Workshop** | $297 | Todo + acceso a workshop grabado de 3 horas donde construís 5 workflows en vivo |

**El JSON de workflows es el diferenciador.** Sin ellos, es solo teoría. Con ellos, el comprador puede tener su primer workflow funcionando en 1 hora.

---

## Canal de distribución

### Canal #1: Tu comunidad y YouTube

- Cada video donde mostrás un workflow de n8n + Claude → link al ebook al final
- El canal principal de automatización es literalmente el infomercial viviente del ebook
- Descripción estándar de cada video: "Descargá los 20 workflows listos para usar → [link]"

### Canal #2: Comunidad oficial de n8n

- n8n tiene un Discord activo con 50k+ miembros
- Compartir workflows como contribución a la comunidad → mención del ebook
- n8n también tiene un directorio de templates — publicar algunos workflows gratis como lead magnet

### Canal #3: LinkedIn para el B2B

- El ICP de este producto (dueños de agencia, gerentes de operaciones) vive en LinkedIn
- Posts de LinkedIn: "Automate estas 5 tareas y recuperá 10hs/semana" → CTA al ebook
- LinkedIn Newsletters tienen alcance orgánico superior a cualquier otra plataforma ahora mismo

### Canal #4: AppSumo (opcional, para escala)

- AppSumo hace lifetime deals para herramientas y recursos digitales
- Un deal de "$67 lifetime por todos los updates del ebook" puede generar $20k-50k en 2 semanas
- Requiere: 100+ reviews previas en Gumroad y tracción demostrable

---

## Proyección financiera

| Mes | Ventas | Ingresos |
|---|---|---|
| 1 | 15 | $2.505 |
| 3 | 40 | $6.680 |
| 6 | 80 | $13.360 |
| 12 | 120/mes | $20.040/mes |

**Este es el producto con mayor LTV potencial.** Los compradores naturalmente se convierten en clientes de consultoría (el ebook → descubren que quieren ayuda → pagas $1.500/mes de retainer).
