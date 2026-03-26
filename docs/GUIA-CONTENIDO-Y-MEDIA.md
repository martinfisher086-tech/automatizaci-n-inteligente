# Guía de Contenido, Media e Integración n8n

> Documento de referencia para completar la landing page con contenido real.
> Fecha: 2026-03-26

---

## Índice

1. [Placeholders pendientes](#1-placeholders-pendientes)
2. [Cómo reemplazar los videos de proyectos (Loom)](#2-cómo-reemplazar-los-videos-de-proyectos-loom)
3. [Cómo reemplazar la imagen de workflow (HowItWorks)](#3-cómo-reemplazar-la-imagen-de-workflow-howitworks)
4. [Recomendaciones de imágenes para HeroSection](#4-recomendaciones-de-imágenes-para-herosection)
5. [Integración n8n → Google Sheets / Airtable](#5-integración-n8n--google-sheets--airtable)
6. [Arquitectura de datos: Google Sheets → Airtable → Supabase](#6-arquitectura-de-datos-google-sheets--airtable--supabase)
7. [Checklist de contenido pendiente](#7-checklist-de-contenido-pendiente)

---

## 1. Placeholders pendientes

| Componente | Archivo | Qué hay que reemplazar |
|---|---|---|
| ProjectsSection — Proyecto 1 | `src/components/ProjectsSection.tsx` línea ~39 | `[VIDEO LOOM: Demo proyecto 1]` → embed de Loom |
| ProjectsSection — Proyecto 2 | `src/components/ProjectsSection.tsx` línea ~39 | `[VIDEO LOOM: Demo proyecto 2]` → embed de Loom |
| ProjectsSection — Proyecto 3 | `src/components/ProjectsSection.tsx` línea ~39 | `[VIDEO LOOM: Demo proyecto 3]` → embed de Loom |
| HowItWorksSection — Workflow | `src/components/HowItWorksSection.tsx` línea ~50 | `[IMAGEN/GIF: Captura n8n]` → imagen/GIF real |
| HeroSection — Visual | `src/components/HeroSection.tsx` | No tiene imagen aún — ver sección 4 |

---

## 2. Cómo reemplazar los videos de proyectos (Loom)

### Paso 1: Grabar el demo en Loom

1. Ir a [loom.com](https://loom.com) → **New Recording**
2. Elegir **Screen + Camera** para mostrar el workflow funcionando
3. Duración recomendada: **60–90 segundos** por proyecto
4. Mostrá:
   - El trigger (ej: mensaje de WhatsApp, formulario enviado)
   - El flujo corriendo en n8n
   - El resultado final (dato en Sheets, respuesta al cliente, etc.)

### Paso 2: Obtener el embed de Loom

1. Abrí el video en Loom
2. Clic en **Share** → **Embed**
3. Copiá el código iframe, que se verá así:
   ```html
   <iframe
     src="https://www.loom.com/embed/TU_VIDEO_ID"
     frameborder="0"
     webkitallowfullscreen mozallowfullscreen allowfullscreen
     style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
   />
   ```

### Paso 3: Editar ProjectsSection.tsx

Buscá en `src/components/ProjectsSection.tsx` el bloque del placeholder:

```tsx
{/* Placeholder 16:9 */}
<div className="relative w-full bg-[hsl(240_20%_10%)]" style={{ paddingBottom: "56.25%" }}>
  <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs text-muted-foreground">
    [{p.label}]
  </span>
</div>
```

Reemplazalo por:

```tsx
{/* Embed Loom */}
<div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
  <iframe
    src="https://www.loom.com/embed/TU_VIDEO_ID"
    frameBorder="0"
    allowFullScreen
    className="absolute inset-0 h-full w-full rounded-t-xl"
    title={p.title}
  />
</div>
```

> **Alternativa si no tenés Loom aún:** usá una imagen estática (screenshot del workflow).
> Colocá la imagen en `public/images/proyecto-1.png` y usá `<img src="/images/proyecto-1.png" className="w-full object-cover aspect-video rounded-t-xl" alt="..." />`

---

## 3. Cómo reemplazar la imagen de workflow (HowItWorks)

### Qué capturar

Tomá un screenshot o GIF del canvas de n8n mostrando un workflow real.
Recomendaciones:
- **Screenshot estático**: PNG de 1200×675px (ratio 16:9)
- **GIF animado**: grabá con [ScreenToGif](https://www.screentogif.com/) o [Kap](https://getkap.co/) el flujo ejecutándose
- **Video corto**: podés usar un `<video autoPlay loop muted>` para un MP4 corto

### Dónde poner el archivo

```
public/
  images/
    workflow-n8n.png   ← acá
```

### Cómo editar HowItWorksSection.tsx

Buscá el bloque del placeholder:

```tsx
<div className="relative w-full rounded-xl bg-[hsl(240_20%_10%)]" style={{ paddingBottom: "56.25%" }}>
  <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
    [IMAGEN/GIF: Captura de workflow real en n8n — reemplazar]
  </span>
</div>
```

Reemplazalo por:

```tsx
<img
  src="/images/workflow-n8n.png"
  alt="Workflow de automatización real en n8n"
  className="w-full rounded-xl object-cover"
  loading="lazy"
/>
```

O si es un GIF:

```tsx
<img
  src="/images/workflow-n8n.gif"
  alt="Workflow de automatización real en n8n"
  className="w-full rounded-xl"
  loading="lazy"
/>
```

---

## 4. Recomendaciones de imágenes para HeroSection

La HeroSection actualmente no tiene imagen — el lado derecho tiene las cards Antes/Después.
Opciones para enriquecerlo visualmente:

### Opción A: Foto tuya (recomendada para servicios de consultoría)
- Foto profesional con fondo oscuro/neutro
- Formato: cuadrado o 3:4 vertical
- Tamaño: mínimo 600×800px
- Colocala en `public/images/foto-perfil.jpg`
- Añadila en HeroSection junto al texto (lado izquierdo o como elemento de confianza)

### Opción B: Mockup de la herramienta en acción
- Screenshot de un dashboard de n8n o de un resultado de automatización
- Mostrá resultados concretos (ej: "200 leads procesados automáticamente")

### Opción C: Sin foto adicional (estado actual)
- Las cards Antes/Después ya comunican el valor de forma efectiva
- Si agregás foto, asegurate de que no compita visualmente con las cards

### Fuentes de imágenes gratuitas (si no tenés propias)
- [Unsplash](https://unsplash.com) → buscar "automation workflow", "productivity"
- [unDraw](https://undraw.co) → ilustraciones SVG que se adaptan al color primario `#5048f0`
- [Storyset](https://storyset.com) → animaciones y ilustraciones

---

## 5. Integración n8n → Google Sheets / Airtable

### Arquitectura del formulario de contacto

```
Landing (React)
    │
    │ POST /webhook/contacto
    │ { name, email, phone, empresa, service, budget, message, submitted_at, source }
    ▼
n8n Workflow
    │
    ├── Google Sheets (base de datos simple)
    │   └── Hoja: "Leads" con columnas: Fecha, Nombre, Email, Teléfono, Empresa, Servicio, Presupuesto, Mensaje, Estado
    │
    ├── Gmail / Email notification → te notifica de cada lead nuevo
    │
    └── (Opcional) Airtable → si necesitás pipeline de ventas con Kanban
```

### Paso a paso: Configurar n8n

#### 1. Crear el workflow en n8n

1. En n8n, crear nuevo workflow
2. Agregar nodo **Webhook**:
   - Method: `POST`
   - Path: `contacto` (ej: `https://tu-n8n.com/webhook/contacto`)
   - Authentication: None (la URL es secreta, suficiente para comenzar)
3. Copiar la URL del webhook y pegarla en tu `.env`:
   ```
   VITE_N8N_WEBHOOK_URL=https://tu-n8n.com/webhook/contacto
   ```

#### 2. Nodo Google Sheets (guardar lead)

1. Agregar nodo **Google Sheets** → operación **Append Row**
2. Conectarlo al Webhook
3. Configurar la hoja:

| Column in Sheets | Expression in n8n |
|---|---|
| Fecha | `{{ $json.submitted_at }}` |
| Nombre | `{{ $json.name }}` |
| Email | `{{ $json.email }}` |
| Teléfono | `{{ $json.phone }}` |
| Empresa | `{{ $json.empresa }}` |
| Servicio | `{{ $json.service }}` |
| Presupuesto | `{{ $json.budget }}` |
| Mensaje | `{{ $json.message }}` |
| Estado | `Nuevo` (valor fijo) |
| Fuente | `{{ $json.source }}` |

#### 3. Nodo Email notification (avisarte de cada lead)

1. Agregar nodo **Gmail** (o **SMTP** si no usás Gmail)
2. Conectarlo luego del Google Sheets
3. Asunto: `🔔 Nuevo lead: {{ $json.name }} — {{ $json.service }}`
4. Cuerpo:
   ```
   Nombre: {{ $json.name }}
   Email: {{ $json.email }}
   Teléfono: {{ $json.phone }}
   Empresa: {{ $json.empresa }}
   Servicio: {{ $json.service }}
   Presupuesto: {{ $json.budget }}
   Mensaje: {{ $json.message }}
   Fecha: {{ $json.submitted_at }}
   ```

#### 4. (Opcional) Nodo Airtable en lugar de Sheets

Si preferís un pipeline de ventas con Kanban:
1. Crear una base en Airtable con tabla "Leads"
2. En n8n, usar nodo **Airtable** → operación **Create Record**
3. Mapear los mismos campos que en Sheets
4. En Airtable podés crear vistas tipo Kanban con columnas: Nuevo → Contactado → En proceso → Cerrado

---

## 6. Arquitectura de datos: Google Sheets → Airtable → Supabase

### Cuándo usar cada opción

| Etapa | Herramienta | Criterio |
|---|---|---|
| **0–50 leads/mes** | Google Sheets | Gratis, cero setup, suficiente para arrancar |
| **50–500 leads/mes** | Airtable | Necesitás pipeline de ventas, Kanban, filtros, vistas |
| **+500 leads/mes o automatizaciones complejas** | Supabase | Base de datos real, consultas SQL, RLS, API REST automática |

### Migrar de Sheets a Supabase (cuando llegue el momento)

1. Exportar Sheets a CSV
2. En Supabase: crear tabla `leads` con el mismo schema
3. Importar CSV directamente desde el dashboard de Supabase
4. Actualizar el workflow de n8n: reemplazar el nodo Google Sheets por el nodo **Supabase** (o HTTP Request a la API REST de Supabase)
5. No hay cambios en el frontend — el webhook URL es el mismo

---

## 7. Checklist de contenido pendiente

### Videos / imágenes
- [ ] Grabar demo de Proyecto 1 (AI Chatbot Salón de Belleza) en Loom
- [ ] Grabar demo de Proyecto 2 (Análisis de Feedback con IA) en Loom
- [ ] Grabar demo de Proyecto 3 (Plataforma Gestión Salón) en Loom
- [ ] Screenshot/GIF de workflow n8n real para HowItWorksSection
- [ ] (Opcional) Foto de perfil para HeroSection

### n8n / Backend
- [ ] Crear workflow en n8n con nodo Webhook
- [ ] Configurar nodo Google Sheets (tabla Leads)
- [ ] Configurar notificación por email
- [ ] Copiar URL del webhook en archivo `.env` (variable `VITE_N8N_WEBHOOK_URL`)
- [ ] Probar el flujo completo enviando el formulario

### Contenido / Copy
- [ ] Confirmar URLs de GitHub de los 3 proyectos en `ProjectsSection.tsx`
- [ ] Revisar precios en ServicesSection (actualmente: $300, $500, $80 USD)
- [ ] (Opcional) Agregar sección de testimonios cuando tengas 2-3 clientes

### Deploy
- [ ] Configurar variable de entorno `VITE_N8N_WEBHOOK_URL` en el hosting (Netlify/Vercel)
- [ ] Verificar que no se expone el webhook URL en el bundle (Vite lo incrusta en el JS del cliente — es aceptable para un webhook público)
