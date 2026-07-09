# Guía de preparación — Entrevista DIM Centros de Salud

> Uso personal. El documento para entregar impreso es `analisis-dim.html` (imprimir desde el navegador, A4).

---

## 1. Lo que tenés que saber de DIM (en 2 minutos)

- **Historia:** fundada en **1964** en Ramos Mejía por el **Dr. José María Paz**. Más de 60 años. Razón social **DIRM S.A.** Nació como consultorio de diagnóstico por imágenes y hoy es el centro de salud de referencia de la zona oeste.
- **Escala:** **16 centros** entre Ramos Mejía (sede central: Belgrano 136), Morón, Liniers, Caballito y Once. **+500 profesionales**, todas las especialidades, de baja a alta complejidad: consultas, imágenes, laboratorio (con extracción a domicilio), odontología, cirugías, demanda espontánea.
- **Novedad reciente:** servicio de **Oncología junto al Instituto Alexander Fleming** (nombrarlo suma: demuestra que seguís sus novedades).
- **Financiadores:** cartilla amplia — PAMI (libre elección de especialistas), IOMA, IOSFA, ASI, AMFFA, convenios. Esto implica **mucho back-office** de autorizaciones y facturación por financiador.
- **Ecosistema digital existente:** app **DIM SALUD** (turnos, resultados, recetas digitales, certificados, vinculación de familiares), portal `portal.dim.com.ar` con chat 24 hs, **WhatsApp oficial 11-6648-5555** con asistente virtual, central de turnos 5554-8888, resultados de laboratorio 100% online.
- **Cultura/marca:** lema en redes: *“Te cuidamos hoy, con la tecnología del mañana”*. IG ~50k, FB +70k, LinkedIn ~19,5k. Tienen Fundación DIM y son sede UBA de residencia en Diagnóstico por Imágenes.
- **Otros roles internos que conocen bien el dolor:** contratan operadores de call center y administrativos de forma recurrente (rotación = oportunidad de onboarding automatizado, tu experiencia).

## 2. Los 7 dolores detectados (memorizá los 3 primeros)

1. **WhatsApp que deriva y nadie responde** — el asistente virtual pasa a operador y la cola muere ahí (reclamos públicos reiterados). *Tu propuesta estrella: agente IA con acceso real al turnero.*
2. **Turnos online sin disponibilidad real** — ecografía/ginecología sin turnos en el canal digital aunque hay capacidad en 4+ centros; bugs de la app (pantalla blanca al elegir turno).
3. **Cancelaciones sin aviso + ausentismo** — turnos cancelados sin notificar; del otro lado, no-show sin gestión activa (benchmark sector: 20–30%).
4. **Resultados demorados que el paciente descubre preguntando** — resultados online (fortaleza) pero sin aviso proactivo ni control interno de demoras.
5. **Recetas digitales sin respuesta ni estado** — el pedido entra y desaparece; cada consulta de estado es una llamada más.
6. **Información inconsistente entre canales** — call center, sedes y chat responden distinto (coberturas, preparaciones, horarios).
7. **Reputación sin circuito de recupero** — las quejas escalan a plataformas públicas porque nadie las intercepta a tiempo.

**El patrón (tu frase clave):** “No les faltan sistemas — tienen app, portal, turnero, WhatsApp. Lo que falta es que los eventos viajen entre sistemas y que los ciclos cierren. Eso es exactamente una capa de orquestación, y es lo que yo hago con n8n e IA.”

## 3. Tu pitch de apertura (60 segundos)

> “Antes de venir me tomé el trabajo de estudiar DIM: su historia desde el consultorio del Dr. Paz en el 64, sus 16 centros, la app DIM SALUD, el WhatsApp oficial, y también lo que dicen los pacientes en reseñas y plataformas de reclamos. Les traigo impreso un análisis con lo que encontré: siete puntos de fricción en el recorrido del paciente y seis propuestas concretas para resolverlos con automatización e IA, priorizadas por impacto y esfuerzo, con una hoja de ruta de 90 días. Mi especialidad es exactamente esa capa: conectar los sistemas que ya tienen —turnero, laboratorio, WhatsApp— para que trabajen solos, con n8n y agentes de IA construidos con Claude.”

Entregá el documento en ese momento, no al final.

## 4. Preguntas inteligentes para hacerles (elegí 5-6)

**De diagnóstico (demuestran expertise):**
1. “¿Qué sistema usan como turnero/HIS central, y tiene API o hay que integrarse por base de datos o RPA?” *(la respuesta define todo el proyecto)*
2. “El asistente actual de WhatsApp, ¿es una herramienta contratada o desarrollo propio? ¿Qué puede hacer hoy además de derivar?”
3. “¿Cuántas conversaciones/llamadas por día maneja el call center y cuál es el motivo número uno de contacto?”
4. “¿Miden ausentismo hoy? ¿Qué número tienen?”
5. “Cuando un informe de laboratorio o imágenes se firma, ¿qué pasa después? ¿Alguien lo comunica o queda esperando que el paciente entre al portal?”
6. “¿Cómo circula hoy una autorización de obra social? ¿Cuánta gente hay dedicada a eso?”

**De contexto del rol:**
7. “¿Este rol reporta a sistemas, a operaciones o a dirección? ¿Ya hay equipo de IT interno con quien trabajar?”
8. “¿Qué intentaron antes en automatización y qué pasó?” *(clave: revela cicatrices y expectativas)*
9. “¿Cómo definirían el éxito de esta posición a los 6 meses?”

## 5. Objeciones probables y tus respuestas

| Objeción | Tu respuesta |
|---|---|
| “Ya tenemos un bot en WhatsApp” | “Perfecto, la base está. La diferencia es que un agente con acceso al turnero *resuelve* la gestión en vez de derivarla. Hoy la derivación es justamente el punto donde más reclamos públicos tienen.” |
| “Los datos de salud son sensibles” | “Totalmente — son datos sensibles según la Ley 25.326. Por eso trabajo con acceso mínimo necesario, trazabilidad de cada workflow y humano en el circuito para todo lo clínico. La IA nunca decide nada médico.” |
| “¿Y si la IA responde mal a un paciente?” | “Se lanza en piloto controlado con derivación supervisada, respuestas acotadas a una base de conocimiento auditada, y métricas desde el día uno. Se amplía el alcance solo con evidencia.” |
| “No tenemos presupuesto para un gran proyecto” | “Por eso el plan empieza con dos quick wins de bajo costo: confirmación de turnos y base de conocimiento. n8n es open source; el costo principal es mi tiempo, y en 30-45 días hay resultados medibles.” |
| “¿Esto reemplaza gente del call center?” | “Reemplaza tareas repetitivas, no personas. Los operadores pasan de contestar ‘¿a qué hora atienden?’ a resolver los casos que de verdad necesitan criterio humano — que hoy son los que quedan sin responder.” |
| “Nuestros sistemas son viejos / no tienen API” | “n8n se adapta: API si hay, y si no, integración por base de datos, archivos o incluso automatización de interfaz. El discovery de las semanas 1-2 es justamente para mapear eso antes de prometer nada.” |

## 6. Qué llevar

- [ ] **CV impreso** (2 copias).
- [ ] **Análisis impreso** (2 copias — una para tu entrevistador, otra por si aparece alguien más). Imprimir `analisis-dim.html` desde el navegador en A4.
- [ ] **Demo en el teléfono/notebook** (si podés): un workflow n8n de recordatorio de turnos con confirmación por WhatsApp, o tu chatbot existente. Mostrar > contar. Si tenés 2 días, un mock con datos ficticios de “DIM” impacta muchísimo.
- [ ] Anotadas tus **3 métricas**: ausentismo 20-30% típico sin confirmación activa; 30-50% de reducción con recordatorios inteligentes; 60-80% de gestiones de turnos resolubles sin humano.

## 7. Errores a evitar

- **No critiques a DIM.** El documento habla de “fricciones” y “señales públicas”, nunca de “lo hacen mal”. En la entrevista igual: “vi oportunidades” en vez de “vi problemas”.
- **No menciones que su web estuvo caída/suspendida** salvo que ellos lo saquen — puede caer como golpe bajo al equipo de IT que quizás te entreviste. Si sale, ofrecé “monitoreo proactivo con alertas” como solución, sin dramatizar.
- **No prometas plazos sin discovery.** Todo tu plan condiciona los tiempos a las semanas 1-2 de relevamiento. Sostenelo.
- **No te vayas a lo técnico si no te llevan ahí.** Hablá de pacientes, ausentismo, llamadas y reclamos; n8n y Claude son el “cómo”, no el “qué”.
- **Cerrá pidiendo el siguiente paso:** “¿Les parece que arranquemos con el discovery de dos semanas para validar este análisis con datos reales?”

## 8. Fuentes de la investigación

- Sitio y portal: dim.com.ar, portal.dim.com.ar, páginas de laboratorio, preguntas frecuentes, coberturas, RRHH.
- App DIM SALUD: App Store / Google Play (desarrollador DIRM S.A., reseñas con bugs de turnos).
- Reclamos: tuquejasuma.com (dim-centros-de-salud y dim-centros-de-diagnostico) — WhatsApp sin respuesta, resultados demorados, recetas sin respuesta, mala información del call center.
- Prensa: Diagnóstico Journal (“DIM 50 años”), IOMA (policonsultorios Morón/Ramos Mejía), El1 Digital (PAMI libre elección), Viví el Oeste (Fundación DIM), ASI Salud, AMFFA.
- Redes: Instagram @dimcentrosdesalud (~50k), Facebook (+70k), LinkedIn (~19,5k).
