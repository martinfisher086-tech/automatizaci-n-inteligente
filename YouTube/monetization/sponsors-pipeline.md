# Pipeline de Sponsorships

**Activar cuando:** El canal supere 1.000 suscriptores.

**Responsable de ejecución:** Sponsorship Outreach Agent (Gmail MCP).

---

## Estados del pipeline

```
PROSPECTO → CONTACTADO → RESPUESTA → NEGOCIACIÓN → CERRADO → PUBLICADO
```

---

## Tabla de prospectos activos

| # | Empresa | Producto | Estado | Fecha contacto | Respuesta | Deal $ | Notas |
|---|---|---|---|---|---|---|---|
| — | — | — | PROSPECTO | — | — | — | Canal sin lanzar |

---

## Criterios para agregar un prospecto

El Research Agent (o el creador manualmente) puede agregar prospectos que cumplan:

1. **Relevancia:** El producto tiene uso directo para dueños de PYMES LATAM
2. **Programa de partners activo:** La empresa trabaja con YouTubers medianos (no solo mega-influencers)
3. **Budget:** Empresa con sede o clientes en LATAM con budget de marketing digital
4. **Fit de audiencia:** El 30%+ de la audiencia del canal es cliente potencial del prospecto

---

## Proceso automatizado (Sprint 5)

**Trigger:** Cron semanal (viernes 10:00 AM) cuando subs > 1.000.

```
Paso 1: Research Agent → identifica 20 empresas con web_search
         Criterios: SaaS/herramientas para negocios, tienen afiliados o partnerships, 
         presencia en LATAM, entre 50-500 empleados (lo suficientemente grande para budget)

Paso 2: Filtro de duplicados → verificar que no estén ya en este archivo

Paso 3: Para cada nuevo prospecto:
         → web_search: "[empresa] partnerships email" OR "[empresa] YouTube sponsorship"
         → Extraer email de contacto
         → Si no se encuentra email → marcar como "email pendiente" y saltar

Paso 4: Script Agent (Claude) → generar pitch personalizado usando sponsorship-pitch-template.md
         → Adaptar "Razón específica 1-2" con info del producto de la empresa

Paso 5: Gmail MCP → enviar pitch

Paso 6: Registrar en esta tabla con fecha de contacto

Paso 7: 7 días después → si no hay respuesta → enviar follow-up automático

Paso 8: Si hay respuesta positiva → Gmail al creador: "RESPUESTA de [empresa] — negociar manualmente"
```

---

## Tabla de precios por etapa

| Suscriptores | Mención (30-60 seg) | Segmento dedicado (2-3 min) |
|---|---|---|
| 1.000 – 5.000 | $100 – 200 | $300 – 500 |
| 5.000 – 20.000 | $300 – 500 | $800 – 1.500 |
| 20.000 – 50.000 | $800 – 1.500 | $2.000 – 4.000 |
| 50.000+ | $2.000+ | $5.000+ |

**Nota:** Precios en USD. Ajustar según negociación. No bajar más de 20% del precio base — devalúa la marca.
