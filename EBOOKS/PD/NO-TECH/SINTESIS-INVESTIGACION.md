# Síntesis de Investigación — 5 Productos Digitales No-Tech
## Fuentes: 4 agentes especializados + navegación real de Amazon (Playwright MCP)

---

## Herramientas utilizadas y por qué

| Herramienta | Tipo | Justificación |
|---|---|---|
| `trend-analyst` (subagente) | Identificación de tendencias | Rastrea señales de mercado 2025-2026 con datos de crecimiento, CAGR y timing de entrada |
| `market-researcher` (subagente) | Tamaño de mercado | Cuantifica TAM real, disposición a pagar, y perfil psicográfico del comprador |
| `competitive-analyst` (subagente) | Gaps de competencia | Identifica dónde la oferta de calidad es escasa comparada con la demanda |
| `search-specialist` (subagente) | Benchmarks reales | Encuentra ejemplos concretos de productos, precios y revenues en Gumroad/Etsy/Amazon |
| `mcp__playwright` (MCP Browser) | Validación en tiempo real | Navegación real de Amazon para confirmar resultados de búsqueda, reviews y precios actuales |

### Por qué esta combinación específica

Los 4 agentes atacan el problema desde ángulos distintos y complementarios:
- **trend-analyst** valida que la demanda es real y creciente (no moda pasajera)
- **market-researcher** cuantifica quién paga y cuánto (para fijar precio correcto)
- **competitive-analyst** confirma dónde está el gap en productos premium existentes
- **search-specialist** da ejemplos concretos de lo que vende (no teoría, casos reales)
- **Playwright** cierra el loop con datos del marketplace en vivo (review count, fechas de publicación)

---

## Hallazgos críticos por nicho (datos reales de agentes)

### Hallazgo 1 — Perimenopause para mujeres activas
- **Mercado digital**: $2.86B para 2029, CAGR 17.4% (más explosivo de los 7 nichos)
- **Amazon real (Playwright)**: 171 resultados, libro top = 63 reviews (Feb 2024) → MUY accesible
- **Gap confirmado**: 85% de las mujeres menopáusicas se sienten excluidas del fitness; 20% de coaches NO recibieron formación sobre menopausia
- **Validación de precio**: Harvard cobra $249 por su curso de menopausia. Udemy: $50-$200.
- **Señal de timing**: Libro de Dr. Mary Claire Haver sale abril 2026 → spike de búsquedas garantizado

### Hallazgo 2 — Gray Divorce (divorcio después de los 50)
- **Datos duros**: 36% de todos los divorcios en USA son de 50+; se duplicó desde los '90
- **Dolor financiero**: El nivel de vida de las mujeres cae 45% post-divorcio (hombres: 21%)
- **Amazon real (Playwright)**: Libro top tiene 26-69 reviews → mercado poco saturado
- **Gap confirmado**: Ningún recurso integra finanzas + emocional + identidad + dating para 50+
- **31%** de mujeres divorciadas no reclaman parte del 401k del ex-marido → oportunidad educativa

### Hallazgo 3 — Cottage Food / Sourdough Business
- **Amazon real (Playwright)**: Solo 76 resultados, top libro tiene 30 reviews (Feb 2026) → MENOS COMPETITIVO de todos
- **Regulatorio**: Texas subió el cap a $150K (sept 2025); Florida a $250K → expansión masiva
- **Gap confirmado**: Free content abundante pero ningún guía premium integra: leyes + pricing + branding + canales de venta
- **Modelo de escala**: Guías por estado (TX, FL, CA, NY) = producto repetible sin rehacer todo

### Hallazgo 4 — Pickleball para 45+
- **Mercado**: 36.5M jugadores, $1.77B en 2025, CAGR 15.3%
- **Amazon real (Playwright)**: 532 resultados pero el top rankeado (nov 2025) tiene solo 64 reviews
- **Demografía clave**: El 70% del crecimiento viene del segmento 50+ con mayor ingreso disponible
- **Gap confirmado**: Todo el contenido es genérico/principiante; nadie crea guías específicas para competir después de los 45 (adaptaciones físicas + estrategia + mentalidad)
- **Lecciones privadas**: $50-$140/hr → el ebook a $47-$67 es el "entry point" natural

### Hallazgo 5 — Salary Negotiation para No-Tech Workers
- **Gap más severo de los 6 nichos**: 0 (cero) guías premium para enfermeras, maestros, operarios
- **Datos**: Solo 18% de enfermeras negocian sueldo; 46% planean hacer cursos para subirlo
- **Amazon**: Todo el contenido asume Tech/White-collar. Nada específico para grid/union structures
- **ROI del comprador**: +$5k-$15k/año = 25-75x retorno sobre el precio del ebook
- **Señal de oportunidad**: Reddit r/Teachers, r/nursing llenos de preguntas sobre negociación sin respuestas de calidad

---

## Ranking final (datos post-investigación)

| Rank | Producto | Amazon Reviews Top | Precio viable | TAM estimado | Score |
|---|---|---|---|---|---|
| 1 | Perimenopause para mujeres activas | 63 reviews | $97-$147 | $116M-$354M | ⭐⭐⭐⭐⭐ |
| 2 | Cottage Food Side Hustle | 30 reviews | $37-$67 | $47M-$100M | ⭐⭐⭐⭐⭐ |
| 3 | Gray Divorce Blueprint | 26-69 reviews | $67-$97 | $129M-$478M | ⭐⭐⭐⭐⭐ |
| 4 | Pickleball Performance 45+ | 64 reviews | $47-$77 | $96M+ | ⭐⭐⭐⭐ |
| 5 | Salary Neg. No-Tech Workers | 0 reviews en nicho específico | $37-$67 | $28M-$234M | ⭐⭐⭐⭐ |
