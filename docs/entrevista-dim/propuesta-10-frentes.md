# DIM Centros de Salud — Propuesta técnica y comercial

**10 frentes de automatización · Análisis, plazos, entregables y cotización**

Preparado por: Martín Fisher · Especialista en automatización e IA (n8n + Claude)
Fecha: Julio 2026 · Alcance: propuesta freelance por proyecto

---

## Cómo leer este documento

Cada frente tiene: **diagnóstico** (qué pasa hoy), **solución** (qué construyo y con qué stack), **entregables**, **plazo** (en días hábiles), **esfuerzo** (horas estimadas) y **precio**. Al final hay una tabla resumen, una propuesta de fases y las condiciones comerciales.

**Bases de la cotización**

- Precios en **USD**. Es el estándar para trabajo de automatización freelance en Argentina y evita el desfasaje por inflación. Se pueden facturar en ARS al tipo de cambio del día de cada pago.
- Todos los valores derivan de una **tarifa de referencia de USD 40/hora**. Si acordamos otra tarifa, todo el presupuesto escala proporcionalmente con ese solo número.
- Los precios son de **implementación (setup, pago único)**. Donde el frente implica operación continua (costos de IA, generación de contenido, monitoreo), agrego un **abono mensual** opcional de mantenimiento y operación.
- **No incluye**: licencias/costos de terceros (APIs de IA, WhatsApp Business API, envío de emails, Meta/Google Ads, hosting de n8n). Se detallan como costos operativos aparte, a nombre de DIM.
- Cada frente asume **acceso a los sistemas involucrados** (turnero/HIS, CRM, base de pacientes, app, cuentas de Ads/Analytics) vía API o exportación. Si un sistema no tiene API, se cotiza aparte la integración alternativa tras el discovery.

---

## Frente 1 — CRM y conversión de turnos

**Diagnóstico.** Los interesados entran por múltiples canales (WhatsApp, mailing, Google Ads, formularios, redes) pero no hay un embudo único: los contactos se pierden entre canales, no se atribuye de dónde vino cada turno, y hay demora entre "persona interesada" y "turno asignado". Sin trazabilidad no se puede saber qué campaña convierte ni dónde se cae la gente.

**Solución.** Capa de captación y ruteo unificada con n8n como orquestador sobre un CRM (HubSpot free/Starter o Pipedrive, según lo que ya usen). Cada lead —venga de donde venga— se normaliza en un contacto único con su fuente/UTM, se le asigna estado (nuevo → contactado → turno ofrecido → turno confirmado → atendido), y dispara la acción siguiente: respuesta automática por el canal de origen, alerta al equipo comercial, y recordatorio si queda sin gestionar en X horas. Reglas de scoring básicas para priorizar. Atribución de conversión por canal para saber qué invierte bien DIM.

**Entregables.** CRM configurado con pipeline de turnos · workflows n8n de captación multicanal (WhatsApp, email, formularios, Ads leads) · sistema de estados y alertas por SLA · tablero de conversión por canal/campaña · documentación y capacitación al equipo.

**Plazo.** 15–20 días hábiles. · **Esfuerzo.** ~70–80 h.
**Precio.** **USD 3.000 – 3.500** (setup) + **USD 250/mes** (operación y ajustes) opcional.

---

## Frente 2 — Presencia de DIM en buscadores e IA (SEO + GEO)

**Diagnóstico.** La información institucional está desordenada y dispersa (datos de sedes, horarios, especialidades, servicios), lo que dificulta que Google y los motores de IA (ChatGPT, Perplexity, Gemini) la interpreten y la citen correctamente. Hoy una consulta tipo "dónde hacerme una ecografía en Ramos Mejía" difícilmente devuelve a DIM de forma estructurada.

**Solución.** Ordenamiento y estructuración de la identidad digital: datos estructurados **Schema.org** (MedicalOrganization, MedicalClinic, servicios, sedes con horarios), consistencia de NAP (nombre-dirección-teléfono) en todas las fichas, optimización de Google Business Profile por sede, y una **base de conocimiento canónica** (fuente única de verdad institucional) que además sirve para alimentar chatbots y responder a motores de IA. Auditoría de cómo responden hoy los LLMs sobre DIM y plan de corrección (GEO — Generative Engine Optimization).

**Entregables.** Auditoría SEO/GEO inicial · marcado Schema.org implementado · fichas de Google Business optimizadas por sede · documento maestro de información institucional canónica · informe de posicionamiento en motores de IA + recomendaciones.

**Plazo.** 10–15 días hábiles. · **Esfuerzo.** ~35–45 h.
**Precio.** **USD 1.300 – 1.800** (setup) + **USD 200/mes** (monitoreo de posicionamiento en IA) opcional.

---

## Frente 3 — Contenidos y campañas para redes con IA

**Diagnóstico.** No hay un circuito claro para producir imágenes, videos y textos con IA manteniendo tono institucional coherente y con revisión humana obligatoria (crítico en salud). Hoy la producción es artesanal y lenta.

**Solución.** Pipeline de contenido asistido por IA con humano en el circuito. Un flujo n8n toma un brief (tema, campaña, sede), genera con IA borradores de copy en el **tono de marca de DIM** (guía de estilo cargada), propuestas de imagen y guiones de video corto, los deja en un tablero de aprobación (Notion/Trello) para revisión y edición humana, y una vez aprobados los agenda/publica. Nada sale sin visto bueno humano — el sistema acelera, no reemplaza al comunicador.

**Entregables.** Guía de tono y estilo institucional codificada para IA · workflow de generación de copy + imágenes + guiones · tablero de revisión y aprobación · calendario editorial automatizado · biblioteca de prompts reutilizables · capacitación al equipo de marketing.

**Plazo.** 15–18 días hábiles. · **Esfuerzo.** ~55–65 h.
**Precio.** **USD 1.700 – 2.200** (setup) + **USD 600/mes** (operación del circuito y créditos de IA de generación) opcional.

---

## Frente 4 — Newsletters institucionales (médicos e InfoDIM)

**Diagnóstico.** La recopilación de contenido, la generación, la segmentación y el envío de los newsletters son procesos manuales. Consume horas y es propenso a errores de segmentación.

**Solución.** Automatización del ciclo completo. n8n recopila fuentes (novedades, agenda médica, notas de la Fundación), la IA arma un borrador estructurado con el tono de DIM, pasa por aprobación humana, y se envía segmentado por audiencia (pacientes, profesionales, staff) desde la plataforma de email (Mailchimp/Brevo/Sendgrid). Métricas de apertura y clics vuelven a un tablero.

**Entregables.** Plantillas de newsletter (médico + InfoDIM) · workflow de recopilación y generación asistida · segmentación de audiencias · integración con plataforma de envío · tablero de métricas · documentación.

**Plazo.** 10–12 días hábiles. · **Esfuerzo.** ~40–48 h.
**Precio.** **USD 1.200 – 1.600** (setup) + **USD 300/mes** (operación mensual de los envíos) opcional.

---

## Frente 5 — Solicitudes de señalética

**Diagnóstico.** Los pedidos de señalética entran como tickets sin clasificar y sin un flujo definido para propuestas, validación interna y cotización con proveedores. Se pierden o se demoran.

**Solución.** Sistema de tickets estructurado. Formulario de intake (sede, tipo de señal, urgencia, foto del lugar), clasificación automática con IA, ruteo al responsable, generación de una ficha de propuesta, y flujo de estados hasta cotización con proveedores y aprobación. Recordatorios automáticos por SLA. Es el frente más acotado de los diez.

**Entregables.** Formulario de solicitud · workflow de clasificación y ruteo · plantilla de propuesta/cotización · circuito de aprobación y seguimiento de proveedores · tablero de estado de pedidos.

**Plazo.** 7–10 días hábiles. · **Esfuerzo.** ~25–32 h.
**Precio.** **USD 800 – 1.100** (setup). Mantenimiento incluido en abono general si aplica.

---

## Frente 6 — Google Ads + Analytics + IA

**Diagnóstico.** Los datos de Ads y Analytics están desconectados, sin reportes automáticos, sin alertas y sin detección de desvíos. Las decisiones de pauta se toman tarde y a ojo.

**Solución.** Pipeline de datos que unifica Google Ads + GA4 (y opcionalmente Meta Ads) en un tablero único. Reportes automáticos periódicos (diario/semanal) enviados por mail o WhatsApp, **alertas de desvío** (caída de conversiones, suba de CPA, agotamiento de presupuesto) y un análisis con IA que interpreta los números y sugiere acciones en lenguaje claro. Detección de anomalías básica.

**Entregables.** Conexión Ads + GA4 (+ Meta opcional) · tablero unificado (Looker Studio) · reportes automáticos programados · sistema de alertas por umbral · resumen ejecutivo semanal generado por IA · documentación.

**Plazo.** 10–14 días hábiles. · **Esfuerzo.** ~40–50 h.
**Precio.** **USD 1.400 – 1.900** (setup) + **USD 250/mes** (reportes y ajustes de alertas) opcional.

---

## Frente 7 — Campañas sobre la base de pacientes

**Diagnóstico.** Las comunicaciones a la base de pacientes salen masivas, sin segmentar por tipo de consulta, intereses o necesidad real de seguimiento. Eso genera baja relevancia y riesgo de saturación/opt-out.

**Solución.** Motor de segmentación sobre la base de pacientes. Reglas y scoring que arman audiencias dinámicas (ej.: "pacientes de cardiología sin control en 12 meses", "hicieron un estudio pero no retiraron resultado", "cumpleaños del mes"). Campañas disparadas por evento o programadas, por el canal adecuado (WhatsApp, email, notificación app), siempre con opt-out y con **máximo cuidado de datos sensibles (Ley 25.326)**. Requiere trabajo cuidadoso de permisos y anonimización.

> **Nota de compliance.** Este frente maneja datos de salud (datos sensibles). Se implementa con acceso mínimo necesario, consentimiento verificado y trazabilidad. Parte del esfuerzo es definir con DIM qué está permitido comunicar y a quién.

**Entregables.** Modelo de segmentos y scoring · workflows de campañas por evento y programadas · gestión de consentimiento y opt-out · integración con canales de envío · tablero de performance por segmento · documento de cumplimiento de datos.

**Plazo.** 15–18 días hábiles. · **Esfuerzo.** ~55–65 h.
**Precio.** **USD 1.700 – 2.300** (setup) + **USD 300/mes** (operación de campañas) opcional.

---

## Frente 8 — Onboarding de nuevos pacientes

**Diagnóstico.** No hay un recorrido automatizado que reciba al paciente nuevo y le explique canales de atención, cómo sacar turnos, qué documentación necesita y cómo usar la app DIM SALUD. Cada paciente arranca desorientado y satura los canales con preguntas básicas.

**Solución.** Secuencia de onboarding automática disparada al alta del paciente. Serie de mensajes (WhatsApp + email) escalonados: bienvenida, cómo sacar turno, cómo usar la app (con tutorial), documentación y coberturas, canales de contacto. Adaptada según cómo ingresó el paciente. Reduce la carga del call center en consultas repetitivas.

**Entregables.** Diseño del recorrido de onboarding · secuencia de mensajes multicanal · integración con el alta de paciente (turnero/app) · contenidos y tutoriales · tablero de completitud del onboarding.

**Plazo.** 8–12 días hábiles. · **Esfuerzo.** ~30–40 h.
**Precio.** **USD 900 – 1.400** (setup).

---

## Frente 9 — Onboarding de particulares (pacientes privados)

**Diagnóstico.** No existe un recorrido específico para el paciente particular (sin obra social): presupuestos, medios de pago y seguimiento posterior. Es un segmento de alto valor que hoy no tiene un circuito propio y se pierde por falta de respuesta.

**Solución.** Flujo comercial para particulares. Intake de la consulta, generación automática de presupuesto según práctica, envío con medios de pago (link de pago integrado — Mercado Pago), y secuencia de seguimiento si no responde ("¿pudiste verlo?", recordatorio, oferta de agendar). Cierra el ciclo de venta de la práctica privada.

**Entregables.** Recorrido de particular diseñado · generador de presupuestos · integración de link de pago (Mercado Pago) · secuencia de seguimiento automática · CRM de particulares · tablero de conversión de presupuestos.

**Plazo.** 10–14 días hábiles. · **Esfuerzo.** ~38–48 h.
**Precio.** **USD 1.100 – 1.600** (setup) + **USD 200/mes** (seguimiento y ajustes) opcional.

---

## Frente 10 — Notificaciones dentro de la App

**Diagnóstico.** Los recordatorios, campañas y mensajes push de la app DIM SALUD salen sin segmentación ni personalización. Eso baja la efectividad y arriesga que el paciente desactive las notificaciones.

**Solución.** Capa de orquestación de notificaciones push sobre la app, disparadas por evento (turno próximo, resultado disponible, receta lista) y segmentadas por perfil. Personalización del contenido y control de frecuencia para no saturar. Requiere acceso a la API de notificaciones de la app (a coordinar con el proveedor de la app, DIRM S.A.).

> **Dependencia.** Este frente depende del acceso técnico a la app DIM SALUD. Si el proveedor de la app expone API/webhooks, es directo; si no, hay que coordinar con ellos, lo que puede sumar tiempo. Se confirma en discovery.

**Entregables.** Mapa de eventos que disparan notificaciones · reglas de segmentación y personalización · control de frecuencia · integración con el motor de push de la app · tablero de efectividad (apertura/opt-out).

**Plazo.** 10–14 días hábiles (sujeto a acceso a la app). · **Esfuerzo.** ~38–48 h.
**Precio.** **USD 1.100 – 1.600** (setup) + **USD 200/mes** (operación) opcional.

---

## Tabla resumen

| # | Frente | Complejidad | Plazo (días háb.) | Setup (USD) | Abono mensual (USD) |
|---|--------|:---:|:---:|:---:|:---:|
| 1 | CRM y conversión de turnos | Alta | 15–20 | 3.000–3.500 | 250 |
| 2 | Presencia en buscadores e IA (SEO/GEO) | Media | 10–15 | 1.300–1.800 | 200 |
| 3 | Contenidos y campañas para redes | Media-alta | 15–18 | 1.700–2.200 | 600 |
| 4 | Newsletters institucionales | Media | 10–12 | 1.200–1.600 | 300 |
| 5 | Solicitudes de señalética | Baja | 7–10 | 800–1.100 | — |
| 6 | Google Ads + Analytics + IA | Media | 10–14 | 1.400–1.900 | 250 |
| 7 | Campañas sobre base de pacientes | Media-alta | 15–18 | 1.700–2.300 | 300 |
| 8 | Onboarding nuevos pacientes | Media | 8–12 | 900–1.400 | — |
| 9 | Onboarding de particulares | Media | 10–14 | 1.100–1.600 | 200 |
| 10 | Notificaciones en la App | Media | 10–14 | 1.100–1.600 | 200 |
| | **TOTALES** | | | **14.200–19.000** | **~2.300/mes** |

> Los plazos son por frente en paralelo relativo; el total calendario depende de cuántos se ejecuten a la vez (ver fases). Los montos son rangos: el piso aplica a un alcance estándar, el techo a mayor complejidad detectada en discovery.

---

## Propuesta de ejecución por fases

Ejecutar los 10 a la vez no es recomendable ni para DIM ni para la calidad del trabajo. Propongo 4 olas, priorizando impacto sobre esfuerzo y dependencias:

**Fase 0 — Discovery (semana 1, incluido sin cargo si se contrata el paquete).**
Relevamiento de sistemas reales, accesos y prioridades. Cierra el alcance y confirma precios dentro de los rangos.

**Fase 1 — Quick wins e ingresos (semanas 2–5).** Frentes **1 (CRM/turnos)**, **9 (particulares)** y **5 (señalética)**. Atacan directamente conversión, ingresos y un proceso acotado de victoria rápida.

**Fase 2 — Datos y captación (semanas 5–9).** Frentes **6 (Ads/Analytics)**, **2 (SEO/GEO)** y **8 (onboarding pacientes)**. Ordenan la captación y la medición.

**Fase 3 — Contenido y ciclo de vida (semanas 9–13).** Frentes **3 (contenidos)**, **4 (newsletters)** y **7 (campañas base)**. La máquina de comunicación.

**Fase 4 — App (según acceso técnico).** Frente **10 (notificaciones)**, en cuanto se confirme el acceso a la app.

---

## Condiciones comerciales

- **Descuento por paquete.** Contratando los 10 frentes como programa integral: **15% off** sobre el total de setup. Contratando una fase completa: **10% off** sobre esa fase.
- **Forma de pago.** 50% al inicio de cada frente/fase, 50% contra entrega y aceptación. Abonos mensuales por mes adelantado.
- **Modelo alternativo — retainer.** En lugar de proyecto por proyecto, un abono mensual de dedicación (ej.: **USD 2.500–3.500/mes** por una banda de horas fija) para ir ejecutando la hoja de ruta de forma continua. Suele convenir cuando hay volumen sostenido como este.
- **Garantía.** 30 días de soporte y ajustes sin cargo sobre cada entregable a partir de su aceptación.
- **Costos de terceros (a cuenta de DIM).** APIs de IA (~USD 50–200/mes según volumen), WhatsApp Business API, plataforma de email, hosting de n8n (~USD 20–50/mes o self-hosted), links de pago. Se estiman con precisión en el discovery.
- **Propiedad.** Todos los workflows, prompts y documentación quedan en infraestructura de DIM. Sin lock-in.
- **Confidencialidad y datos.** Trabajo bajo NDA. Manejo de datos de salud según Ley 25.326 de Protección de Datos Personales, con acceso mínimo necesario y trazabilidad.

---

*Nota: los precios son estimaciones profesionales de referencia basadas en el mercado freelance de automatización en Argentina y en una tarifa de USD 40/h. Los valores finales se confirman tras el discovery, cuando se conoce el acceso real a cada sistema. Este documento es una base de negociación, no una factura.*
