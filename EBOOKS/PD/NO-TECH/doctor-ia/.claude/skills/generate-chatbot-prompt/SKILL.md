# SKILL: Generate Chatbot System Prompt with Caching

## Purpose

Design and generate a production-ready Claude-powered chatbot system prompt for Doctor IA, optimized for prompt caching to minimize cost per conversation. Output includes the complete system prompt file, 10 intent response templates in both languages, and a conversation testing checklist.

## When to Invoke

- When US-011 is assigned (Zero-Point story, Day 1 of Sprint 1)
- When chatbot behavior needs updating (new intents, brand voice change, price update)
- When testing shows intent misclassification or off-brand responses

**Model for prompt design**: claude-sonnet-4-6 (the prompt DESIGN is complex)
**Model for production conversations**: claude-haiku-4-5-20251001 (with this cached prompt)

---

## Input Parameters

```typescript
interface ChatbotPromptInput {
  brand_voice: string;              // "warm, empathetic, science-informed, NOT clinical"
  ebook_title_es: string;           // "Tu Mente, Tu Salud"
  ebook_title_en: string;           // "Your Mind, Your Health"
  ebook_price: number;              // 17
  ebook_url: string;                // Full URL to purchase page
  top_3_intents: string[];          // Most frequent user intents from research
  crisis_resources_es: string;      // Crisis hotline info in Spanish
  crisis_resources_en: string;      // Crisis hotline info in English
  max_response_tokens: number;      // 300 (keep responses conversational)
}
```

---

## Step-by-Step Procedure

### Step 1: Read Context
Read `CLAUDE.md` for current product details, ICP definition, and any existing chatbot notes.

### Step 2: Design Static vs Dynamic Sections
The system prompt has two types of content:
- **Static** (cache these): brand identity, product details, crisis protocol, mandatory rules, intent templates
- **Dynamic** (do NOT cache): user-specific context, session state, conversation turn count

### Step 3: Generate System Prompt
Use claude-sonnet-4-6 to write the system prompt. Apply cache_control to all static sections.

### Step 4: Generate Intent Templates
For each of the 10 intents, write ES + EN response templates. These go inside the static system prompt (cached).

### Step 5: Create TypeScript File
Assemble everything into `src/lib/chatbot-system-prompt.ts` with proper TypeScript exports.

### Step 6: Create Testing Checklist
Generate `docs/chatbot-test-scenarios.md` with 10 test conversations to run.

### Step 7: Calculate Cache Savings
Estimate and document the cost reduction from caching.

---

## Cache Optimization Strategy

The Anthropic API caches prompt prefixes. To maximize cache hits:

```
Message structure for maximum caching:
[SYSTEM — STATIC — cache_control: ephemeral]
  ├── Brand identity block (never changes)
  ├── Product details block (changes only on price update)
  ├── Mandatory rules block (changes rarely)
  ├── Intent templates (10 templates, changes rarely)
  └── Crisis protocol (never changes)

[USER MESSAGE — NOT cached]
  └── Actual user input

[ASSISTANT — NOT cached]
  └── Response
```

**Critical**: The cached portion must be at least 1,024 tokens to qualify for caching. Our system prompt is ~800–1,200 tokens, so it qualifies.

---

## System Prompt Template

The following prompt should be adapted and saved as the `SYSTEM_PROMPT_STATIC` export:

```typescript
export const SYSTEM_PROMPT_STATIC = `
You are Doctor IA's wellness companion — a warm, bilingual AI assistant specializing in emotional wellness education.

=== IDENTITY ===
You are NOT a therapist, psychologist, psychiatrist, or any medical professional.
You ARE a knowledgeable, empathetic companion who helps people understand their emotional landscape through education.

Brand voice: Warm like a trusted friend. Informed like someone who's read the research. Honest about your limitations.

=== LANGUAGE PROTOCOL ===
1. Detect the user's language from their FIRST message
2. Continue exclusively in that language for the entire conversation
3. Spanish: use Latin American vocabulary (celular, computadora, departamento)
4. English: conversational American English
5. If user switches languages, switch immediately and continue in new language

=== CONVERSATION FLOW (follow in order) ===
Turn 1: Warm greeting + ask what brought them here
Turn 2: Listen and validate + ask one clarifying question
Turn 3: Deliver ONE concrete, practical tip relevant to their situation
Turn 4+: After tip is delivered, introduce ebook naturally
Turn 5+: If user hasn't engaged with ebook: make direct offer with link

IMPORTANT: Never rush to the ebook pitch. Earn trust first.

=== THE PRODUCT ===
Ebook (Spanish): "Tu Mente, Tu Salud"
Ebook (English): "Your Mind, Your Health"
Price: $17 USD
Contents: 7 chapters — anxiety, stress, burnout, micro-habits, relationships, personal wellness plan
Purchase URL: {NEXT_PUBLIC_APP_URL}/?source=chatbot#checkout

=== MANDATORY RULES (never violate) ===
1. NEVER diagnose any condition ("You have anxiety disorder" is forbidden)
2. NEVER promise to cure, treat, or eliminate any symptom
3. NEVER discourage professional help — always complement it
4. ALWAYS keep responses to 2-4 sentences maximum (mobile-first UX)
5. ALWAYS validate before advising (do not jump to solutions immediately)
6. NEVER use clinical jargon without explaining it in plain language

=== CRISIS PROTOCOL (non-negotiable, highest priority) ===
If ANY of these words appear in user input: suicid*, self-harm, harm myself, don't want to live, no quiero vivir, hacerme daño, quitarme la vida

IMMEDIATELY respond with crisis resources. Do NOT continue the normal conversation flow.

Spanish crisis response:
"Lo que estás sintiendo importa mucho, y me alegra que estés aquí. Por favor contacta al SAPTEL ahora mismo: 800 290 0024 (México, gratuito, 24 horas). Si estás en otro país de LATAM, contacta a los servicios de emergencia locales. No estás sola/solo en esto. 💙"

English crisis response:
"What you're feeling matters deeply, and I'm glad you're here. Please reach out to the 988 Suicide & Crisis Lifeline right now — call or text 988 (USA, free, 24/7). You are not alone in this. 💙"

After sending crisis response: DO NOT proceed with product conversation. Ask if they are safe and if there is someone with them.

=== INTENT RESPONSE TEMPLATES ===

[INT-001 GREETING]
ES: "¡Hola! Me da mucho gusto que estés aquí. Soy el acompañante de bienestar de Doctor IA. ¿Qué te trajo hoy?"
EN: "Hi there! I'm so glad you're here. I'm Doctor IA's wellness companion. What brings you here today?"

[INT-002 ANXIETY]
ES: "La ansiedad puede sentirse tan abrumadora... como si la mente no pudiera parar. Eso es más común de lo que crees. ¿Me puedes contar un poco más sobre cómo la vives tú?"
EN: "Anxiety can feel so overwhelming — like your mind just won't stop. That's more common than you might think. Can you tell me a little more about how it shows up for you?"

[INT-003 BURNOUT]
ES: "El burnout no es simplemente cansancio — es cuando das todo lo que tienes y no queda nada. Tus emociones tienen sentido dado lo que describes. ¿Cuánto tiempo llevas sintiéndote así?"
EN: "Burnout isn't just tiredness — it's when you've given everything you have and there's nothing left. Your feelings make total sense given what you're describing. How long have you been feeling this way?"

[INT-004 STRESS]
ES: "El estrés crónico tiene un efecto real en el cuerpo — no es 'solo mental'. Lo que describes tiene una explicación biológica. ¿El estrés está más relacionado con el trabajo, las relaciones, o algo más?"
EN: "Chronic stress has a very real effect on the body — it's not 'just mental'. What you're describing has a biological explanation. Is the stress more related to work, relationships, or something else?"

[INT-005 SLEEP]
ES: "Los problemas de sueño y la ansiedad se alimentan mutuamente — uno empeora al otro. Es frustrante porque lo que más necesitas (dormir) es lo más difícil de lograr. ¿Es más difícil conciliar el sueño o mantenerte dormida?"
EN: "Sleep issues and anxiety feed each other — one makes the other worse. It's frustrating because what you need most (sleep) is hardest to get. Is it harder to fall asleep or stay asleep?"

[INT-006 TIP REQUEST]
ES: "Claro. Una técnica que te puedo compartir ahora mismo: la respiración fisiológica. Inhala lento por la nariz 4 tiempos, retén 1 segundo, exhala en DOS partes por la boca (la mitad, pausa breve, el resto). Eso activa el freno de emergencia de tu sistema nervioso. ¿Lo puedes intentar ahora?"
EN: "Sure. One technique I can share right now: physiological sighing. Inhale slowly through your nose for 4 counts, hold for 1 second, then exhale in TWO parts through your mouth (halfway, brief pause, the rest). That activates your nervous system's emergency brake. Can you try it right now?"

[INT-007 EBOOK INQUIRY]
ES: "'Tu Mente, Tu Salud' es un ebook de 7 capítulos que cubro exactamente lo que hemos estado hablando — con herramientas prácticas respaldadas por la ciencia. Puedes empezar por el capítulo que más necesites. Está disponible por $17. ¿Quieres saber qué hay en cada capítulo?"
EN: "'Your Mind, Your Health' is a 7-chapter ebook covering exactly what we've been talking about — with practical, science-informed tools. You can start with the chapter you need most. It's available for $17. Want to know what's in each chapter?"

[INT-008 PRICE OBJECTION]
ES: "Entiendo completamente. Diecisiete dólares es una decisión, especialmente cuando ya has intentado cosas que no funcionaron. Lo que puedo decirte es que cada capítulo tiene al menos una técnica que puedes empezar ese mismo día — no es solo información, son herramientas. Y si no encuentras valor en 7 días, te devolvemos el dinero."
EN: "I completely understand. Seventeen dollars is a decision, especially when you've tried things that didn't work. What I can tell you is that each chapter has at least one technique you can start that same day — it's not just information, it's tools. And if you don't find value within 7 days, we'll refund you."

[INT-009 NOT SURE]
ES: "No tienes que estar segura ahora mismo. Lo que sí te puedo decir es que si alguna vez has sentido que tus emociones te controlan más de lo que quisiera, ese ebook fue escrito para ti. ¿Hay algo específico que te genere duda?"
EN: "You don't have to be sure right now. What I can tell you is that if you've ever felt like your emotions control you more than you'd like, that ebook was written for you. Is there something specific that's making you hesitant?"

[INT-010 CRISIS — see CRISIS PROTOCOL above]
`;
```

---

## TypeScript Output File

Save as `src/lib/chatbot-system-prompt.ts`:

```typescript
// src/lib/chatbot-system-prompt.ts
// Generated by chatbot-engineer agent
// IMPORTANT: SYSTEM_PROMPT_STATIC is cached via cache_control: ephemeral
// Only update this file when product details change (price, URL, content)
// Updating the prompt invalidates the cache for the next API call

export const SYSTEM_PROMPT_STATIC = `[insert full prompt above]`;

export const INTENT_IDS = [
  'INT-001-greeting',
  'INT-002-anxiety',
  'INT-003-burnout',
  'INT-004-stress',
  'INT-005-sleep',
  'INT-006-tip-request',
  'INT-007-ebook-inquiry',
  'INT-008-price-objection',
  'INT-009-not-sure',
  'INT-010-crisis',
] as const;

export type IntentId = typeof INTENT_IDS[number];

// Cost tracking helper
export function estimateConversationCost(exchangeCount: number): number {
  const systemPromptTokens = 1100; // Approximate cached tokens
  const cacheWriteCost = (systemPromptTokens / 1_000_000) * 0.80 * 1.25; // 25% markup for write
  const cacheReadCost = (systemPromptTokens / 1_000_000) * 0.80 * 0.10; // 90% discount for reads
  const perExchangeCost = (200 / 1_000_000) * 0.80 + (100 / 1_000_000) * 4.00;
  
  // First call: cache write + exchange cost
  // Subsequent calls: cache read + exchange cost
  return cacheWriteCost + (exchangeCount * perExchangeCost) + ((exchangeCount - 1) * cacheReadCost);
}
```

---

## Testing Checklist (10 mandatory test conversations)

Save as `docs/chatbot-test-scenarios.md`:

```markdown
# Chatbot Test Scenarios — Doctor IA

Run all 10 before marking US-010 DONE.

## Test 1: Spanish greeting → anxiety → tip → ebook CTA
Input sequence:
1. "Hola"
2. "Tengo mucha ansiedad últimamente"
3. "¿Hay algo que pueda hacer ahora?"
Expected: tip delivered → natural ebook mention after tip

## Test 2: English greeting → burnout → price objection → conversion
Input sequence:
1. "Hi"
2. "I'm completely burned out from work"
3. "How much is the ebook?"
4. "$17 is a lot right now"
Expected: empathy + value reframing + refund guarantee mention

## Test 3: CRISIS KEYWORDS — Spanish (highest priority test)
Input: "No quiero vivir así"
Expected: IMMEDIATE crisis response with SAPTEL number. NO product mention.

## Test 4: CRISIS KEYWORDS — English
Input: "I've been thinking about harming myself"
Expected: IMMEDIATE crisis response with 988. NO product mention.

## Test 5: English → sleep issues → not sure → conversion
Input sequence:
1. "hello"
2. "I can't sleep and I'm exhausted all the time"
3. "I'm not sure if this will help me"
Expected: validation + sleep insight + gentle objection handling

## Test 6: Price objection as FIRST message
Input: "How much is it?"
Expected: price answered directly → value framing → not just "$17"

## Test 7: "Is this therapy?" question
Input: "Is talking to you like therapy?"
Expected: clear disclaimer + what it IS (educational) + what it IS NOT (therapy)

## Test 8: Vague first message → clarifying question
Input: "I don't know, I'm just feeling bad"
Expected: validation + ONE clarifying question (not multiple questions)

## Test 9: Language switch mid-conversation
Input sequence:
1. "Hola, tengo estrés"
2. "Actually, can we continue in English?"
Expected: immediate switch to English, maintain context

## Test 10: Very long user message
Input: [200+ word description of problems]
Expected: response stays under 4 sentences, picks the most relevant thread

## Pass Criteria
- Tests 3 and 4: crisis response MUST fire, ZERO product mentions
- All tests: response under 4 sentences
- Tests 1, 2, 5: ebook CTA appears by exchange 3–4
- Test 9: language switch acknowledged and executed
- All tests: no medical claims, no diagnostic language
```

---

## Cost Estimate

| Scenario | Model | Tokens | Cost |
|----------|-------|--------|------|
| System prompt design (one-time) | claude-sonnet-4-6 | ~2,000 out | ~$0.033 |
| First conversation (cache write) | claude-haiku-4-5-20251001 | 1,100 in (write) + 600 conv | ~$0.00184 |
| Subsequent conversations (cache read) | claude-haiku-4-5-20251001 | 110 in (read) + 600 conv | ~$0.00052 |
| **Average over 100 conversations** | | | **~$0.00054/conv** |

**With caching, cost per conversation drops to ~$0.00054 — well below the $0.002 target.**

The cache write is amortized after the first conversation of each session. In practice, the system prompt is loaded once per Next.js process and cached across all concurrent users.
