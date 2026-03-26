# Análisis UX/UI + QA — automatizaciones.dev

> Generado por Claude Code · Fecha: 2026-03-26
> Herramientas: code-reviewer agent, Playwright MCP, TypeScript compiler, ESLint, Vitest

---

## Resumen ejecutivo

La landing page tiene una **base sólida**: buena jerarquía tipográfica, tema oscuro consistente, copy directo y un CTA visible. Los problemas principales son la **ausencia total de imágenes/contenido real**, algunos issues de accesibilidad en el formulario, y un bundle JS más grande de lo necesario por dependencias no usadas. Con el contenido real (fotos, videos Loom, workflow n8n), el sitio puede estar al nivel de un freelancer profesional de alto perfil.

**Score actual estimado:**
- UX: 6.5/10 (buena estructura, falta contenido real y proof)
- Accesibilidad: 5/10 (mejorado post-fixes, falta labels semánticos)
- Performance: 7/10 (bundle razonable, tree-shaking efectivo)
- Código: 8/10 (post-fixes del code review)

---

## 1. Análisis UX

### 1.1 Flujo de conversión (User Journey)

```
Llega → Hero (problema/solución) → Servicios (¿qué ofrecés?) →
Proyectos (¿funciona en serio?) → Cómo trabajo (¿sos confiable?) →
Contacto (acción)
```

**Evaluación del flujo:** ✅ Correcto. El orden sigue la lógica de decisión de compra (problema → solución → evidencia → proceso → contacto). No hay pasos redundantes.

### 1.2 Hallazgos por sección

#### Hero Section
| Aspecto | Estado | Detalle |
|---|---|---|
| Headline | ✅ | "Convierto procesos repetitivos en sistemas que trabajan solos" — claro, directo, beneficio implícito |
| Sub-headline | ✅ | Diferencia bien al freelancer de plantillas genéricas |
| CTA primario | ✅ | Botón con `pulse-cta` animation, visible y prominente |
| CTA secundario | — | No existe — considerar agregar "Ver proyectos" como ancla |
| Visual | ❌ | Solo texto. La mitad derecha (Before/After) es buena pero se pierde en mobile |
| Social proof inmediato | ❌ | No hay: sin contador de clientes, sin logo de empresa reconocida |
| Urgencia/disponibilidad | ⚠️ | "Disponible para proyectos" en texto pequeño — podría ser más prominente |

#### Services Section
| Aspecto | Estado | Detalle |
|---|---|---|
| Estructura | ✅ | 3 servicios claros con precios visibles (diferenciador positivo) |
| Iconografía | ⚠️ | Íconos de Lucide son genéricos — considerar íconos más específicos |
| CTA por tarjeta | ❌ | No hay botón "Quiero esto" en cada servicio |
| Precio | ✅ | Mostrar precios desde el inicio es buena señal de transparencia |

#### Projects Section
| Aspecto | Estado | Detalle |
|---|---|---|
| Estructura | ✅ | 3 proyectos con tech stack, descripción y GitHub |
| Contenido | ❌ | **CRÍTICO**: 3 placeholders de video visibles → destruye credibilidad |
| GitHub links | ⚠️ | Proyecto 3 apunta al perfil, no al repo. Proyecto 2 repo podría no existir |
| Sin casos de éxito | ❌ | No hay métricas de resultado (ej: "redujo 4hs/día a 5min") |

#### How It Works Section
| Aspecto | Estado | Detalle |
|---|---|---|
| Proceso de 3 pasos | ✅ | Claro y concreto |
| Imagen workflow n8n | ❌ | **Placeholder visible** — reemplazar con screenshot real |
| Tech pills | ✅ | Buen elemento de confianza técnica |

#### Contact Section (post-mejoras)
| Aspecto | Estado | Detalle |
|---|---|---|
| Campos | ✅ | Nombre, empresa, email, teléfono, servicio, presupuesto, mensaje |
| Webhook n8n | ✅ | Conectado, con error handling real (ya no silent success) |
| Accesibilidad | ✅ | aria-label, aria-required, aria-invalid, aria-describedby en todos los campos |
| Alternativa calendario | ✅ | Cal.com como segunda opción de contacto |
| Submit feedback | ✅ | Loading state, success state, error state |

### 1.3 Gaps de UX críticos

**1. Sin sección "Sobre mí"**
Para servicios de consultoría/freelance, la **confianza personal** es clave. El visitante no sabe quién está detrás del sitio. Una sección breve con foto, background y por qué hacés esto puede aumentar la conversión significativamente.

**2. Sin testimonios o social proof**
No hay ninguna señal de que alguien ya trabajó con vos. Incluso un testimonio de 1 cliente tiene gran impacto. Si estás empezando, podés mostrar un quote de alguien que conocés profesionalmente.

**3. Los proyectos no muestran resultados**
"AI Chatbot para Salones de Belleza" no dice el resultado. Cambiar a: "AI Chatbot que redujo el tiempo de respuesta de 24hs a instantáneo". Las métricas concretas convierten mucho mejor.

**4. Falta de ancla `#inicio` en hero**
El hero no tiene `id`, por lo que el logo de la navbar (`href="#"`) no tiene ancla específica. Menor pero relevante para navegación.

---

## 2. Análisis UI

### 2.1 Sistema visual

| Componente | Estado | Detalle |
|---|---|---|
| Color primario | ✅ | `hsl(244 95% 60%)` — violet-blue, buena legibilidad sobre fondo oscuro |
| Fondo | ✅ | `hsl(240 20% 3%)` — near-black, consistente |
| Cards | ✅ | `hsl(240 14% 9%)` — suficiente contraste con el fondo |
| Tipografía | ✅ | Inter, weights 400/600/700, tamaños coherentes |
| Spacing | ✅ | Sistema Tailwind consistente, no hay inconsistencias visuales |
| Border radius | ✅ | `0.75rem` en cards, coherente con `rounded-xl` en botones |
| Animaciones | ✅ | `animate-section` y `stagger-item` suaves, no intrusivos |

### 2.2 Issues UI detectados

**Colores hardcodeados fuera del sistema de diseño** (detectado por code-reviewer):
```
ContactSection: bg-[hsl(240_20%_5%)]  → debería ser bg-background o variable custom
HeroSection:    border-[hsl(0_40%_14%)]  → debería ser --danger-muted o similar
```
No afectan la apariencia actual pero dificultan cambios de color globales.

**Contraste del texto muted**:
`hsl(240 20% 60%)` sobre `hsl(240 20% 3%)` = ratio ~4.8:1 ✅ (WCAG AA requiere 4.5:1)
Cumple AA pero no AAA. Aceptable para texto secundario.

**Select nativo en dark mode (Safari)**:
El `<select>` nativo puede renderizar con fondo claro en Safari, rompiendo el dark theme. Considerar `@radix-ui/react-select` cuando haya tiempo.

### 2.3 Responsive

| Breakpoint | Estado | Observaciones |
|---|---|---|
| Mobile (<768px) | ✅ | Menú hamburguesa, layout en columna, CTA full-width |
| Tablet (768-1024px) | ✅ | Grid de 3 columnas en servicios y proyectos |
| Desktop (>1024px) | ✅ | Hero en dos columnas, max-width 1280px |

---

## 3. QA — Resultados

### 3.1 Build & Compile

| Check | Resultado |
|---|---|
| `npm run build` | ✅ **PASA** — 0 errores |
| TypeScript `tsc --noEmit` | ✅ **0 errores** |
| `npm run lint` | ✅ **0 errores** (shadcn/ui ignorado, tailwind.config.ts corregido) |
| `npm run test` | ✅ **1 test pasa** (solo placeholder test) |

### 3.2 Bundle size

| Asset | Tamaño raw | Gzip |
|---|---|---|
| `index.js` | 328.80 KB | 104.45 KB |
| `index.css` | 61.98 KB | 10.98 KB |

**Evaluación**: El JS de 104KB gzip es aceptable para un MVP. Sin embargo, el código real de la app (sin shadcn/ui) probablemente pesa ~15KB. Oportunidad de reducción del ~85% si se eliminan las dependencias no usadas en el futuro.

### 3.3 Consola del navegador (runtime)

| Tipo | Cantidad | Detalle |
|---|---|---|
| Errors | 0 | ✅ |
| Warnings | 2 → 0 | React Router future flags (corregidos con `v7_startTransition`, `v7_relativeSplatPath`) |

### 3.4 Accesibilidad (post-fixes)

| Check | Estado |
|---|---|
| `<main>` landmark | ✅ Agregado en Index.tsx |
| Heading hierarchy (H1→H2→H3) | ✅ Sin saltos |
| Form inputs con `aria-label` | ✅ Todos los campos tienen aria-label |
| Form inputs con `aria-invalid` | ✅ Se activa en validación |
| Error messages con `aria-describedby` | ✅ Vinculados por id |
| Navbar toggle con `aria-expanded` | ✅ Corregido |
| Mobile menu con `role="dialog"` | ✅ Corregido |
| Imágenes con `alt` | ✅ Los íconos de Lucide tienen aria-hidden implícito |
| `prefers-reduced-motion` | ✅ Agregado en index.css |

### 3.5 Issues pendientes (no bloqueantes)

| Issue | Prioridad | Archivo |
|---|---|---|
| Mobile menu sin focus trap | MEDIA | Navbar.tsx |
| Colores HSL hardcodeados | BAJA | HeroSection, ContactSection |
| Select nativo con dark mode en Safari | BAJA | ContactSection |
| `@tanstack/react-query` instalado sin uso real | BAJA | package.json |
| 0% test coverage en código de negocio | MEDIA | src/test/ |
| No `<StrictMode>` en producción... ya sí! | ✅ CORREGIDO | main.tsx |

---

## 4. Lista de cambios aplicados

### Bugs corregidos
- ✅ `ContactSection`: silent success cuando no hay VITE_N8N_WEBHOOK_URL → ahora lanza error y muestra mensaje
- ✅ `NotFound`: `console.error` → `console.warn`

### Accesibilidad
- ✅ Todos los campos del form: `aria-label`, `aria-required`, `aria-invalid`, `aria-describedby`
- ✅ `Navbar`: `aria-expanded`, `aria-controls`, `aria-label` dinámico en toggle
- ✅ Mobile menu: `role="dialog"`, `aria-label`, `id="mobile-menu"`
- ✅ `Index.tsx`: `<main>` wrapping content sections
- ✅ `index.css`: `scroll-behavior: smooth` wrapped en `prefers-reduced-motion`

### Code quality
- ✅ `main.tsx`: `<StrictMode>` + null-safe root element check
- ✅ React keys: índices → valores estables en todas las listas
- ✅ `tailwind.config.ts`: `require()` → ESM `import`
- ✅ `eslint.config.js`: ignora `src/components/ui/` (shadcn/ui library)
- ✅ `App.tsx`: React Router v7 future flags

### Formulario (nuevos campos)
- ✅ Campo `empresa` (opcional)
- ✅ Campo `phone` (tel, opcional, con validación)
- ✅ Campo `budget` (select, opcional)
- ✅ Payload n8n incluye: `submitted_at` ISO timestamp + `source: "landing_contacto"`
- ✅ Layout 2-columnas en desktop (`sm:grid-cols-2`)

---

## 5. Próximos pasos recomendados (por prioridad)

### Inmediato (antes de mostrar a clientes)
1. 🎥 Reemplazar los 3 placeholders de Loom → ver `docs/GUIA-CONTENIDO-Y-MEDIA.md`
2. 📸 Agregar screenshot de workflow n8n en HowItWorksSection
3. 🔗 Configurar `VITE_N8N_WEBHOOK_URL` en producción
4. 🔗 Corregir link de GitHub del Proyecto 3

### Próxima semana
5. 👤 Agregar sección "Sobre mí" con foto (aumenta confianza y conversión)
6. 💬 Agregar 1-2 testimonios (aunque sea de personas de confianza del entorno)
7. 📊 Agregar métricas de resultado en las tarjetas de proyectos
8. 🎯 Agregar CTA secundario en ServicesSection ("Consultame por este servicio →")

### Cuando tengas tráfico
9. Instalar Plausible o Fathom (analytics privacy-friendly)
10. Agregar heatmap (Hotjar free tier) para ver dónde dropea la gente
11. A/B test del headline del Hero
