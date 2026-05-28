# Plantilla de Descripción de YouTube

**Instrucción:** Esta plantilla la completa el Metadata Agent (Claude) usando el guión del video. Cada sección tiene un propósito SEO y de conversión específico.

---

## DESCRIPCIÓN COMPLETA

```
[PÁRRAFO PRINCIPAL — primeras 2-3 líneas (las más importantes, aparecen sin expandir)]

En este video te muestro [promesa principal del video] para que puedas [beneficio concreto] 
sin necesidad de ser programador. Si tenés una PYME o sos freelancer en LATAM, este 
sistema puede ahorrarte [X horas] por semana desde hoy.

---

📌 LO QUE VAS A APRENDER:
→ [Punto 1 del video]
→ [Punto 2 del video]
→ [Punto 3 del video]
→ [Punto 4 del video]

---

⏱️ CAPÍTULOS:
00:00 — Intro y el problema
01:30 — [Sección 1]
03:00 — [Sección 2: primer ejemplo]
04:30 — [Sección 3: paso a paso]
06:00 — [Sección 4: segundo ejemplo]
07:30 — Conclusión y próximos pasos

---

🔗 RECURSOS MENCIONADOS EN EL VIDEO:
• [Afiliado 1 — nombre]: [URL con UTM]
• [Afiliado 2 si aplica]: [URL con UTM]
• Plantilla/workflow gratuita: [link Google Drive o Notion]

---

📞 ¿QUERÉS QUE YO LO IMPLEMENTE EN TU NEGOCIO?
Trabajo directamente con PYMES y freelancers en LATAM para automatizar sus procesos.
Primera llamada gratuita: https://automatizaciones.dev/#contacto

---

📱 SEGUIME EN REDES:
• LinkedIn: https://www.linkedin.com/in/juan-manuel-castillo-4a8585360/
• GitHub: https://github.com/martinfisher086-tech

---

#automatizacion #ia #n8n #make #zapier #pymes #emprendedores #productividad #chatgpt #intelligenciaartificial #argentina #latam #freelance #automatizar #negocio

---

*Los links de afiliados no tienen costo adicional para vos. Cuando comprás a través de ellos, 
me llevás una pequeña comisión que ayuda a mantener este canal gratuito. ¡Gracias!*
```

---

## Instrucciones para el Metadata Agent

Al generar la descripción real para cada video:

1. **Párrafo principal:** Incluir la keyword principal en la primera oración. Mencionar LATAM/Argentina explícitamente para SEO geográfico.

2. **Capítulos:** Los timestamps deben ser exactos. Calcular en base a la duración real del audio (proporcionada por el Voice Agent).

3. **Recursos mencionados:** Solo incluir afiliados que se mencionaron en el guión. No agregar afiliados que no aparecen en el video — es spam.

4. **URL de afiliados con UTM:**
   - Formato: `[url-base]?utm_source=youtube&utm_medium=description&utm_campaign=video-{{video_number}}`

5. **Hashtags:** Siempre al final. Mezcla de:
   - Hashtags broad (#ia, #automatizacion): 5 tags
   - Hashtags de nicho (#n8n, #make, #zapier): 5 tags
   - Hashtags geográficos (#argentina, #latam, #mexico): 3 tags
   - Hashtags de audiencia (#pymes, #emprendedores, #freelance): 3 tags
   - Total: 15-20 hashtags máximo

6. **Disclaimer de afiliados:** Siempre incluir al final. Es obligatorio por políticas de YouTube.
