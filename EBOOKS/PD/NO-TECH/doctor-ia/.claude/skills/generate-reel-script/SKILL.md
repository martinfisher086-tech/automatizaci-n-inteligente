# SKILL: Generate Bilingual Reel Script

## Purpose

Generate a production-ready, bilingual (ES + EN) short-form video script for Instagram Reels, TikTok, or YouTube Shorts. Each script is 60 or 90 seconds, includes CapCut timing cues, ElevenLabs voice profiles, and mandatory health disclaimers. Output is two Markdown files (one bilingual combined, and individual language files).

## When to Invoke

- When a Reel topic has been approved (from `outlines.json`)
- When US-002 is in progress (top 5 priority scripts)
- When content calendar requires new scripts for publishing

**Do NOT invoke if**: the topic outline has not been validated against ICP pain points. Always start from `src/content/reels/outlines.json`.

---

## Input Parameters

```typescript
interface ReelScriptInput {
  topic_id: string;          // e.g., "reel-001"
  topic_es: string;          // Spanish topic title
  topic_en: string;          // English topic title
  hook_es: string;           // Spanish opening hook (from outline)
  hook_en: string;           // English opening hook (from outline)
  value_promise_es: string;  // What the viewer will learn (ES)
  value_promise_en: string;  // What the viewer will learn (EN)
  duration_seconds: 60 | 90; // Script length
  cta_type: 'ebook' | 'chatbot' | 'follow'; // What to drive viewers toward
  pain_point: string;        // Primary pain point category
}
```

---

## Step-by-Step Procedure

### Step 1: Read Context
Read `src/content/reels/outlines.json` to confirm the topic is approved. Read `CLAUDE.md` for current sprint status and brand voice guidelines.

### Step 2: Design Script Structure
Map the duration to word count and timing blocks:
- 60 seconds: ~150 words total spoken content; blocks: 0:00-0:05 hook, 0:05-0:15 problem, 0:15-0:45 value, 0:45-0:55 close, 0:55-1:00 CTA
- 90 seconds: ~225 words total; blocks: 0:00-0:07 hook, 0:07-0:22 problem, 0:22-1:05 value, 1:05-1:20 close, 1:20-1:30 CTA

### Step 3: Generate Spanish Script
Use claude-sonnet-4-6 with this system prompt section:
```
Write a {duration_seconds}-second Spanish (Latin American) emotional wellness Reel script.
Topic: {topic_es}
Hook: {hook_es}
Value: {value_promise_es}
Pain point: {pain_point}
Tone: Empathetic, warm, conversational — like a knowledgeable friend, NOT a clinician
Include: CapCut timing cues [0:00-0:05 HOOK], ElevenLabs voice notes [WARM, CALM, FEMALE VOICE]
Mandatory: add disclaimer before CTA
Language: Latin American Spanish (Mexico/Colombia/Argentina vocabulary)
```

### Step 4: Generate English Script
Use claude-sonnet-4-6 with this prompt addition:
```
Now adapt the script for an English-speaking USA audience.
Do NOT just translate — culturally adapt.
Maintain the same emotional beats and structure.
Topic: {topic_en}
Hook: {hook_en}
```

### Step 5: Combine and Save
Assemble both into the bilingual combined format. Add metadata header. Run quality checklist. Save files.

---

## Claude Prompt (use exactly)

```
You are a bilingual emotional wellness content creator writing a short-form video script.

SCRIPT BRIEF:
- Platform: Instagram Reels / TikTok / YouTube Shorts
- Duration: {duration_seconds} seconds
- Language: {language}
- Topic: {topic}
- Opening hook: {hook}
- Value promise: {value_promise}
- Pain point: {pain_point}
- CTA type: {cta_type}

TONE REQUIREMENTS:
- Empathetic, warm, like talking to a trusted friend who happens to know about psychology
- NOT clinical, NOT therapeutic, NOT preachy
- Science-informed but accessible
- Realistic and grounded (no toxic positivity)

STRUCTURE (follow exactly):
[{0:00}-{block_1_end} HOOK — VISUAL: {suggest a specific visual}]
[ElevenLabs: WARM, CALM, FEMALE VOICE — medium pace]
"{opening line}"

[{block_2_start}-{block_2_end} PROBLEM — VISUAL: {suggest visual}]
"{problem validation — 2-3 sentences}"

[{block_3_start}-{block_3_end} VALUE — VISUAL: {suggest visual for technique}]
"{practical value delivery — specific, actionable}"

[{block_4_start}-{block_4_end} CLOSE — VISUAL: {suggest visual}]
"{reinforce the small win}"

[{block_5_start}-END CTA — VISUAL: text overlay]
⚠️ {short disclaimer}
"{CTA based on cta_type}"

MANDATORY:
- Disclaimer must appear before or with CTA
- No medical claims whatsoever
- Word count must match {duration_seconds} seconds at speaking pace (~2.5 words/second)
```

---

## Output Format

### File 1: `src/content/reels/scripts/reel-{NNN}-{slug}-bilingual.md`

```markdown
# Reel Script: {topic_es} / {topic_en}
ID: reel-{NNN}
Duration: {duration}s
CTA: {cta_type}
Pain Point: {pain_point}
Generated: {timestamp}
Status: DRAFT — Awaiting human review (US-002)

---

## ESPAÑOL

[0:00-0:05 HOOK — VISUAL: {visual description}]
[ElevenLabs: WARM, CALM, FEMALE VOICE — medium pace — Latin American Spanish]

"{Spanish hook line}"

[0:05-0:15 PROBLEMA — VISUAL: {visual description}]
"{Spanish problem validation}"

[0:15-0:45 VALOR — VISUAL: {visual description}]
"{Spanish technique/value delivery}"

[0:45-0:55 CIERRE — VISUAL: {visual description}]
"{Spanish close}"

[0:55-1:00 CTA — VISUAL: text overlay en pantalla]
⚠️ Este contenido es educativo. No es consejo médico.
"{Spanish CTA}"

---

## ENGLISH

[0:00-0:05 HOOK — VISUAL: {visual description}]
[ElevenLabs: WARM, CALM, FEMALE VOICE — medium pace — American English]

"{English hook line}"

[0:05-0:15 PROBLEM — VISUAL: {visual description}]
"{English problem validation}"

[0:15-0:45 VALUE — VISUAL: {visual description}]
"{English technique/value delivery}"

[0:45-0:55 CLOSE — VISUAL: {visual description}]
"{English close}"

[0:55-1:00 CTA — VISUAL: text overlay on screen]
⚠️ This content is educational only. Not medical advice.
"{English CTA}"

---

CapCut Template: {recommendation}
ElevenLabs Voice ES: Valentina or Sofia — Stability 0.75, Similarity 0.80
ElevenLabs Voice EN: Rachel or Bella — Stability 0.75, Similarity 0.80
Midjourney Thumbnail: {short prompt}
```

---

## Example Output (60-second script)

```markdown
# Reel Script: Por qué no puedes "simplemente relajarte" / Why You Can't "Just Relax"
ID: reel-001
Duration: 60s
CTA: ebook
Pain Point: anxiety
Generated: 2026-04-01T00:00:00Z
Status: DRAFT

---

## ESPAÑOL

[0:00-0:05 HOOK — VISUAL: close-up of hands fidgeting, soft warm light]
[ElevenLabs: WARM, CALM, FEMALE VOICE — medium pace — Latin American Spanish]

"Si alguien te ha dicho 'solo relájate' cuando estás ansiosa... y eso no te ayudó para nada, esto es para ti."

[0:05-0:15 PROBLEMA — VISUAL: woman looking at phone anxiously, bokeh background]
"La ansiedad no es que estés exagerando. Es que tu sistema nervioso está atascado en modo alerta. Y 'relajarte' no apaga esa alarma."

[0:15-0:45 VALOR — VISUAL: woman placing one hand on chest, one on belly, soft light]
"Hay algo que sí funciona: se llama respiración fisiológica. Inhala lento por la nariz contando 4. Retén 1 segundo. Exhala por la boca en dos partes: la mitad, pausa, el resto. Eso le dice a tu sistema nervioso que el peligro pasó. Es biología, no magia."

[0:45-0:55 CIERRE — VISUAL: woman with calm expression, slight smile]
"¿Guardaste esto? Practícalo ahora mismo, sin esperar a sentirte ansiosa."

[0:55-1:00 CTA — VISUAL: text overlay: 'Tu Mente, Tu Salud — link en bio']
⚠️ Esto es educativo, no consejo médico.
"Tengo 6 capítulos más como este en mi ebook 'Tu Mente, Tu Salud' — $17, link en bio."

---

## ENGLISH

[0:00-0:05 HOOK — VISUAL: close-up of hands fidgeting, soft warm light]
[ElevenLabs: WARM, CALM, FEMALE VOICE — medium pace — American English]

"If someone has ever told you to 'just relax' when you're anxious... and that did absolutely nothing for you, this is for you."

[0:05-0:15 PROBLEM — VISUAL: woman looking at phone anxiously, bokeh background]
"Anxiety isn't you overreacting. It's your nervous system stuck in alert mode. And 'just relaxing' doesn't turn off that alarm."

[0:15-0:45 VALUE — VISUAL: woman placing one hand on chest, one on belly, soft light]
"Here's what actually works: it's called physiological sighing. Inhale slowly through your nose for 4 counts. Hold for 1 second. Exhale through your mouth in two parts: halfway, pause, then the rest. That tells your nervous system the danger has passed. It's biology, not magic."

[0:45-0:55 CLOSE — VISUAL: woman with calm expression, slight smile]
"Save this. Practice it right now, before you actually need it."

[0:55-1:00 CTA — VISUAL: text overlay: 'Your Mind, Your Health — link in bio']
⚠️ This is educational content, not medical advice.
"I have 6 more chapters like this in my ebook 'Your Mind, Your Health' — $17, link in bio."

---

CapCut Template: "Calm Talk" — clean text, fade transitions, muted color grade
ElevenLabs Voice ES: Valentina — Stability 0.75, Similarity 0.80, Rate 0.90
ElevenLabs Voice EN: Rachel — Stability 0.75, Similarity 0.80, Rate 0.90
Midjourney Thumbnail: serene Latina woman, calm expression, hand on chest, soft morning light, wellness aesthetic, --ar 9:16 --v 6.1
```

---

## Cost Estimate

| Component | Model | Tokens | Cost |
|-----------|-------|--------|------|
| Spanish script (1) | claude-sonnet-4-6 | ~1,200 output | ~$0.018 |
| English script (1) | claude-sonnet-4-6 | ~1,200 output | ~$0.018 |
| Input (both prompts) | claude-sonnet-4-6 | ~500 input | ~$0.0015 |
| **Total per script pair** | | ~2,900 tokens | **~$0.038** |

For 5 scripts (US-002): ~$0.19 sequential, or ~$0.10 via Batch API.

**Recommendation**: Use Batch API when generating ≥5 scripts. See `.claude/skills/batch-content-creator/SKILL.md`.
