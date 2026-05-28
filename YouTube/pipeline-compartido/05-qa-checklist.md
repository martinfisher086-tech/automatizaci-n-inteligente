# QA Checklist — Revisión Humana en 3 Checkpoints

## Checkpoint #1 — Selección de Topic (5 min)

El Research Agent entregó 5 topics rankeados. El humano elige 1 por canal.

**Criterios de selección:**
- [ ] ¿El score es ≥ 7/10?
- [ ] ¿El topic NO fue cubierto en los últimos 30 días?
- [ ] ¿Hay un afiliado natural que encaje sin forzarse?
- [ ] ¿El título tentativo genera curiosidad o urgencia?
- [ ] ¿La competencia es media o baja?

**Acción en n8n:** Seleccionar topic → webhook trigger al Script Agent.

---

## Checkpoint #2 — Revisión de Guión (10 min)

El Script Agent entregó `guion.md`. Leer completo y verificar:

### Estructura
- [ ] ¿El hook menciona un número, estadística o promesa concreta en los primeros 2 párrafos?
- [ ] ¿Hay exactamente 4 secciones + intro + CTA?
- [ ] ¿El guión tiene entre 1.200 y 1.800 palabras? (8–12 minutos a 150 ppm)
- [ ] ¿El CTA menciona la consultoría/servicio con un link?
- [ ] ¿Hay una pregunta al final para generar comentarios?

### Calidad de contenido
- [ ] ¿El lenguaje es simple y sin jerga innecesaria?
- [ ] ¿Hay al menos 2 ejemplos de negocios LATAM (reales o creíbles)?
- [ ] ¿La mención del afiliado es natural (no suena a aviso publicitario)?
- [ ] ¿La "palabra IA" aparece máximo 3 veces? (usar "IA" abreviado el resto)
- [ ] ¿El tono es consistente con el brand guide del canal?

### Banderas rojas (RECHAZAR si aparece alguna)
- [ ] ❌ Promesas ilegales o engañosas (ej: "ganá $10k en 30 días garantizado")
- [ ] ❌ Información técnica incorrecta (verificar datos antes de aprobar)
- [ ] ❌ Más de 3 menciones del mismo afiliado
- [ ] ❌ Guión de menos de 1.000 palabras (muy corto para video de valor)

**Acción:** Aprobar → trigger Storyboard Agent. Rechazar → pedir re-escritura con notas.

---

## Checkpoint #3 — Revisión del Brief Visual (5 min)

El Storyboard Agent entregó `storyboard-preview.md`. Revisar en diagonal:

### Coherencia visual
- [ ] ¿Los prompts de DALL-E son específicos y contextualizados en LATAM? (no imágenes genéricas de stock americano)
- [ ] ¿Las escenas con datos usan ANIMACION_TEXTO o imagen + overlay? (no fondo vacío)
- [ ] ¿El hook (escenas S001–S006) tiene los visuales más impactantes?
- [ ] ¿Las escenas de paso-a-paso usan SCREENCAST o VIDEO_STOCK apropiado?
- [ ] ¿Hay variedad entre tipos de escenas? (no 70 imágenes estáticas seguidas)

### Branding
- [ ] ¿Los colores del overlay son los del canal?
- [ ] ¿El estilo visual es consistente con los videos anteriores?
- [ ] ¿La escena final tiene el CTA visual correcto (logo + link)?

**Acción:** Aprobar → trigger Voice Agent + Visual Agent (paralelo). 
Editar prompts individuales si algo no convence → aprobar parcialmente.

---

## Auto QA (automático, sin intervención humana)

Antes de Repurposing, el sistema verifica automáticamente:

```json
{
  "checks": {
    "duracion_minutos": {"min": 8, "max": 13, "accion_si_falla": "notificar_humano"},
    "resolucion": {"requerida": "1920x1080", "accion_si_falla": "re-render"},
    "audio_lufs": {"target": -14, "tolerancia": 2, "accion_si_falla": "normalize"},
    "subtitulos_presentes": {"requerido": true, "accion_si_falla": "re-generar_subtitulos"},
    "archivo_size_mb": {"max": 8000, "accion_si_falla": "re-comprimir"},
    "fps": {"requerido": 30, "accion_si_falla": "re-render"},
    "audio_track_presente": {"requerido": true, "accion_si_falla": "detener_pipeline"}
  }
}
```

Si todos los checks pasan → Repurposing Agent corre automáticamente.
Si falla algún check crítico → Gmail al humano con detalle del error.

---

## Checklist Pre-Publicación (último paso antes de publish)

Antes de que el Publishing Agent haga el upload final:

- [ ] ¿El título tiene la keyword principal en las primeras 3 palabras?
- [ ] ¿La descripción tiene el link de afiliado con UTM correcto?
- [ ] ¿El thumbnail fue seleccionado (variante A por defecto)?
- [ ] ¿La fecha y hora de publicación es la óptima según el canal?
- [ ] ¿El video está seteado como "privado" antes de la hora de publicación?

---

## Tiempo total de revisión humana por video

| Checkpoint | Tiempo |
|---|---|
| #1 Topic selection | 5 min |
| #2 Script review | 10 min |
| #3 Visual brief | 5 min |
| Pre-publish (opcional) | 3 min |
| **Total** | **~23 min/video** |

Con 5 videos por semana: **~2 horas de trabajo humano total por semana** para operar 5 canales.
