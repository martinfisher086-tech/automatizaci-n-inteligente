# SKILL: Generate Landing Page Copy

## Purpose

Generate a complete, production-ready landing page copy package for Doctor IA in both Spanish and English. Output is a structured JSON file consumed directly by the Next.js landing page components. Copy follows the AIDA framework, includes all required sections, avoids medical claims, and is ready for human review (US-009).

## When to Invoke

- When US-008 is assigned (Zero-Point story, Day 1 of Sprint 1)
- When copy variants need A/B testing (generate 3 headlines per section)
- When copy needs refresh after user research or feedback

**Prerequisite**: ICP definition in `CLAUDE.md` must be current. Product details (price, ebook title, chapter list) must be confirmed.

---

## Input Parameters

```typescript
interface LandingCopyInput {
  product_name_es: string;        // "Tu Mente, Tu Salud"
  product_name_en: string;        // "Your Mind, Your Health"
  price: number;                  // 17
  main_benefit_es: string;        // Primary transformation promise (ES)
  main_benefit_en: string;        // Primary transformation promise (EN)
  pain_points: string[];          // ["anxiety", "burnout", "stress", "sleep", "overwhelm"]
  chapter_titles_es: string[];    // All 7 chapter titles in Spanish
  chapter_titles_en: string[];    // All 7 chapter titles in English
  author_credentials?: string;    // Optional: author credibility statement
}
```

---

## Step-by-Step Procedure

### Step 1: Read Context
Read `CLAUDE.md` for ICP definition, brand voice, and disclaimers. Read chapter list from CLAUDE.md or existing chapter files.

### Step 2: Generate Hero Copy (Sonnet — high conversion impact)
Use claude-sonnet-4-6 for the hero section. Generate 3 variants per language. Apply AIDA attention hook.

**Prompt for hero copy:**
```
Write 3 headline variants for a $17 emotional wellness ebook landing page.
Audience: Spanish-speaking LATAM women, 28-45, experiencing anxiety, stress, or burnout.
Product: "{product_name_es}" — a 7-chapter practical guide to emotional wellness.
Price: $17 USD

Requirements:
- Each headline focuses on ONE specific pain point
- Lead with transformation, not the product
- Maximum 12 words per headline
- No medical claims
- AIDA: Attention (pain recognition) in the headline
- Generate ES and EN versions

AIDA application:
- A (Attention): Name their pain or situation specifically
- I (Interest): Hint at the mechanism/reason
- D (Desire): Imply the transformation
- A (Action): Reserve for subheadline and CTA

Output 3 ES + 3 EN headlines, labeled Variant A/B/C.
```

### Step 3: Generate Supporting Copy (Haiku — efficient for structured content)
Use claude-haiku-4-5-20251001 for: subheadline, bullet benefits, FAQs, CTA variants.

**Prompt for supporting copy:**
```
Generate landing page copy for a $17 emotional wellness ebook.
Product: "{product_name}" | Audience: {icp_description}

Generate ALL of the following in {language}:

1. SUBHEADLINE (1 sentence, expands the hero headline, <20 words)
2. 7 BENEFIT BULLETS (each: outcome-focused, specific, no medical claims, <15 words each)
3. 3 TESTIMONIAL TEMPLATES (anonymized fictional buyers: name initial + city + context, warm quote, no medical claims)
4. 5 FAQ Q&A (cover: is this therapy?, what if I'm not ready?, how long to read?, what if it doesn't work?, do I need prior knowledge?)
5. 3 CTA BUTTON TEXTS (action-oriented, creates urgency without false scarcity)
6. DISCLAIMER TEXT (visible, honest, references crisis resources)

Output as structured JSON matching the schema below.
```

### Step 4: Assemble and Validate
Combine all copy into the final JSON structure. Run validation checks. Save to output file.

### Step 5: Flag for Human Review
Add `"review_status": "PENDING_HUMAN_REVIEW"` to output. Create review summary for US-009 human gate.

---

## AIDA Framework Application

| Stage | Section | Copy Goal |
|-------|---------|-----------|
| **A — Attention** | Hero headline | Name the pain. Stop the scroll. "You know that 2am anxiety spiral?" |
| **I — Interest** | Subheadline | Explain WHY the pain exists. Science-informed, not clinical. |
| **D — Desire** | Benefits + Social Proof | Show transformation. Before/after implied. Testimonials validate. |
| **A — Action** | CTA + FAQ | Remove objections. Make the $17 decision feel safe and obvious. |

**CTA framing**: Make $17 feel like the cheapest therapy they'll never afford. "Less than one therapy session. More practical." — but never say this directly, imply it.

---

## Output JSON Schema

Save to `src/content/landing-copy.json`:

```json
{
  "meta": {
    "generated_at": "2026-04-01T00:00:00Z",
    "review_status": "PENDING_HUMAN_REVIEW",
    "model_used": "claude-sonnet-4-6 (hero) + claude-haiku-4-5-20251001 (supporting)",
    "version": "1.0.0"
  },
  "product": {
    "name_es": "Tu Mente, Tu Salud",
    "name_en": "Your Mind, Your Health",
    "price_usd": 17,
    "chapters_es": [
      "1. Entendiendo Tu Paisaje Emocional",
      "2. La Ciencia del Estrés",
      "3. La Ansiedad: El Sistema de Alarma de Tu Cuerpo",
      "4. Hoja de Ruta para Recuperarse del Burnout",
      "5. El Poder de los Micro-Hábitos Diarios",
      "6. Relaciones y Regulación Emocional",
      "7. Construyendo Tu Plan Personal de Bienestar"
    ],
    "chapters_en": [
      "1. Understanding Your Emotional Landscape",
      "2. The Science of Stress",
      "3. Anxiety: Your Body's Alarm System",
      "4. Burnout Recovery Roadmap",
      "5. The Power of Daily Micro-Habits",
      "6. Relationships and Emotional Regulation",
      "7. Building Your Personal Wellness Plan"
    ]
  },
  "hero": {
    "headlines_es": [
      "Cuando la ansiedad no te deja vivir tu propia vida",
      "Agotada de cargar con todo y no saber por qué",
      "Tu mente no está rota. Solo nadie te enseñó cómo funciona."
    ],
    "headlines_en": [
      "When anxiety is running your life instead of you",
      "Exhausted from carrying everything with no explanation why",
      "Your mind isn't broken. Nobody just taught you how it works."
    ],
    "subheadline_es": "7 capítulos de herramientas prácticas y respaldadas por la ciencia para entender y manejar tu vida emocional — sin necesitar una licenciatura en psicología.",
    "subheadline_en": "7 chapters of practical, science-informed tools to understand and manage your emotional life — no psychology degree required."
  },
  "benefits": {
    "es": [
      "Entiende por qué tu cuerpo reacciona así (sin culparte)",
      "Aprende la técnica de respiración que apaga la respuesta de ansiedad en 60 segundos",
      "Descubre por qué el descanso solo no cura el burnout — y qué sí funciona",
      "Construye 3 micro-hábitos emocionales que toman menos de 5 minutos al día",
      "Aprende a comunicar tus necesidades sin sentirte 'demasiado sensible'",
      "Crea tu plan personal de bienestar en el Capítulo 7",
      "Accede a recursos de crisis en caso de que alguna vez los necesites tú o alguien cercano"
    ],
    "en": [
      "Understand why your body reacts this way (without blaming yourself)",
      "Learn the breathing technique that shuts down anxiety response in 60 seconds",
      "Discover why rest alone doesn't cure burnout — and what actually does",
      "Build 3 emotional micro-habits that take under 5 minutes a day",
      "Learn to communicate your needs without feeling 'too sensitive'",
      "Create your personal wellness plan in Chapter 7",
      "Access crisis resources in case you or someone you love ever needs them"
    ]
  },
  "testimonials": {
    "es": [
      {
        "quote": "Nunca pensé que un ebook de $17 me haría entender algo que años de ignorar mis emociones no pudo. El capítulo 3 lo leí tres veces.",
        "name": "M.G.",
        "context": "Profesora, Ciudad de México"
      },
      {
        "quote": "Lo empecé una noche que no podía dormir. Para la mañana ya tenía dos técnicas que realmente pude usar.",
        "name": "C.R.",
        "context": "Diseñadora, Bogotá"
      },
      {
        "quote": "Por fin algo que me explica el estrés sin hacerme sentir que estoy loca. Lo recomendé a mi hermana al día siguiente.",
        "name": "A.L.",
        "context": "Mamá y emprendedora, Buenos Aires"
      }
    ],
    "en": [
      {
        "quote": "I've read a lot of wellness content but this was the first time I actually understood WHY I feel anxious. Chapter 3 changed something for me.",
        "name": "S.M.",
        "context": "Nurse, California"
      },
      {
        "quote": "Started it during a night I couldn't sleep. By morning I had two techniques I could actually use. Worth every dollar.",
        "name": "J.T.",
        "context": "Teacher, Texas"
      },
      {
        "quote": "Finally something that explains stress without making me feel broken. I recommended it to my sister the next day.",
        "name": "K.B.",
        "context": "Mom and entrepreneur, New York"
      }
    ]
  },
  "faq": {
    "es": [
      {
        "question": "¿Esto es terapia o reemplaza a un psicólogo?",
        "answer": "No. Este ebook es completamente educativo e informativo. No es terapia, no reemplaza a ningún profesional de salud mental, y no diagnostica ni trata ninguna condición. Es una guía práctica para entender mejor cómo funciona tu mente. Si estás en crisis o sientes que necesitas apoyo profesional, te animamos a buscarlo."
      },
      {
        "question": "¿Qué pasa si no estoy segura de que esto es para mí?",
        "answer": "Si alguna vez has sentido ansiedad, estrés, agotamiento o que tus emociones te controlan más de lo que quisieras — este ebook habla directamente de eso. No necesitas un diagnóstico ni experiencia previa. Solo curiosidad sobre cómo funciona tu mente."
      },
      {
        "question": "¿Cuánto tiempo tarda en leerse?",
        "answer": "Cada capítulo toma entre 15 y 25 minutos. El ebook completo puede leerse en un fin de semana. Pero no tienes que leerlo de corrido — cada capítulo funciona de manera independiente."
      },
      {
        "question": "¿Qué pasa si no me ayuda?",
        "answer": "Entendemos. Ofrecemos garantía de satisfacción de 7 días — si no encontraste valor, escríbenos y te devolvemos tu dinero, sin preguntas."
      },
      {
        "question": "¿Necesito conocimiento previo sobre psicología?",
        "answer": "Cero. Todo está explicado en lenguaje cotidiano. Usamos metáforas, historias y ejemplos reales. No hay jerga técnica — prometido."
      }
    ],
    "en": [
      {
        "question": "Is this therapy or does it replace a therapist?",
        "answer": "No. This ebook is completely educational and informational. It is not therapy, does not replace any mental health professional, and does not diagnose or treat any condition. It's a practical guide to understanding how your mind works. If you're in crisis or feel you need professional support, we strongly encourage you to seek it."
      },
      {
        "question": "What if I'm not sure this is for me?",
        "answer": "If you've ever felt anxiety, stress, exhaustion, or like your emotions control you more than you'd like — this ebook speaks directly to that experience. No diagnosis or prior experience needed. Just curiosity about how your mind works."
      },
      {
        "question": "How long does it take to read?",
        "answer": "Each chapter takes 15–25 minutes. The full ebook can be read over a weekend. But you don't have to read it front to back — each chapter works independently."
      },
      {
        "question": "What if it doesn't help me?",
        "answer": "We get it. We offer a 7-day satisfaction guarantee — if you didn't find value, write to us and we'll refund your money, no questions asked."
      },
      {
        "question": "Do I need prior psychology knowledge?",
        "answer": "Zero. Everything is explained in everyday language. We use metaphors, stories, and real examples. No technical jargon — promised."
      }
    ]
  },
  "cta": {
    "es": [
      "Quiero Mi Copia — $17",
      "Acceder Ahora por $17",
      "Sí, Quiero Entender Mi Mente"
    ],
    "en": [
      "Get My Copy — $17",
      "Access Now for $17",
      "Yes, I Want to Understand My Mind"
    ]
  },
  "disclaimer": {
    "short_es": "Este es un producto educativo. No es consejo médico ni terapia. Si estás en crisis: 800 290 0024 (México, SAPTEL).",
    "short_en": "This is an educational product. Not medical advice or therapy. Crisis support: call or text 988 (USA).",
    "full_es": "Doctor IA es un producto educativo e informativo. No proporciona consejo médico, psicoterapia, diagnóstico clínico ni tratamiento de ningún tipo. Nada en este ebook o sitio web constituye una relación médico-paciente. Si estás experimentando una crisis de salud mental, pensamientos suicidas o angustia severa, contacta a un profesional de salud mental licenciado o a los servicios de emergencia de tu país. México: 800 290 0024 (SAPTEL, 24h gratuito). Argentina: (011) 5275-1135. Colombia: 106 (Línea 106).",
    "full_en": "Doctor IA is an educational and informational product. It does not provide medical advice, psychotherapy, clinical diagnosis, or treatment of any kind. Nothing in this ebook or website constitutes a doctor-patient relationship. If you are experiencing a mental health crisis, suicidal thoughts, or severe psychological distress, please contact a licensed mental health professional or emergency services in your country. USA: Call or text 988 (Suicide & Crisis Lifeline, 24/7, free). Canada: 1-833-456-4566 (Crisis Services Canada)."
  }
}
```

---

## Cost Estimate

| Component | Model | Tokens | Cost |
|-----------|-------|--------|------|
| Hero copy (3 variants × 2 languages) | claude-sonnet-4-6 | ~400 in / ~800 out | ~$0.013 |
| Supporting copy (all sections × 2 languages) | claude-haiku-4-5-20251001 | ~600 in / ~2,400 out | ~$0.010 |
| **Total** | | ~4,200 tokens | **~$0.023** |

**Total estimated cost for complete landing page copy package: ~$0.023**

This is well within the Zero-Point story budget. No human approval needed before generation (approval is at US-009 human gate).
