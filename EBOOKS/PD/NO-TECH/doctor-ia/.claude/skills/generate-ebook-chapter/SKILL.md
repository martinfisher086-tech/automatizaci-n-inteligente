# SKILL: Generate Ebook Chapter (Batch API)

## Purpose

Generate all 7 chapters of the Doctor IA ebook "Tu Mente, Tu Salud / Your Mind, Your Health" in both Spanish and English using a single Anthropic Batch API call. Each chapter must be ≥1,200 words per language, empathetically written, and include mandatory disclaimers. The Batch API delivers ~50% cost savings versus sequential calls.

## When to Invoke

- When US-004 is assigned and in progress
- When a specific chapter needs to be regenerated (individual batch request)
- When adding new chapters in future sprints

**Prerequisites**: `CLAUDE.md` must show US-004 in IN PROGRESS status. All chapter outlines must be defined in CLAUDE.md before invoking.

---

## Input Parameters

```typescript
interface ChapterBatchInput {
  chapter_number: number;      // 1–7
  title_es: string;            // Spanish chapter title
  title_en: string;            // English chapter title
  outline_points: string[];    // 3–5 key concepts to cover
  word_count_target: number;   // Minimum: 1200
  tone_notes?: string;         // Optional: special tone instructions for this chapter
}

// Full batch input (all 7 chapters)
type EbookBatchInput = ChapterBatchInput[];
```

---

## Step-by-Step Procedure

### Step 1: Verify Prerequisites
Check that `CLAUDE.md` contains chapter definitions. Confirm ebook outline points match the 7-chapter structure. Read any existing chapter files to avoid regenerating already-approved content.

### Step 2: Build the Batch Request
Create 14 requests (7 chapters × 2 languages). Use the naming convention for `custom_id`:
```
ch{N}-es    (Spanish chapter N)
ch{N}-en    (English chapter N)
```

### Step 3: Submit Batch to Anthropic API
Use the Anthropic Batch API endpoint. Save the `batch_id` for polling.

### Step 4: Poll for Completion
Check status every 60 seconds. Max wait: 24 hours. Typical completion: 10–30 minutes for 14 requests.

### Step 5: Process Results
For each completed request, save the content to the correct file. Validate word count. Inject disclaimers if missing.

### Step 6: Quality Check
Run the quality checklist on each chapter before marking as complete.

---

## Exact Batch API Request Structure

```python
# Python example — save as scripts/generate-ebook.py
import anthropic
import json
import time
from pathlib import Path

client = anthropic.Anthropic()

SYSTEM_PROMPT = """You are the author of "Doctor IA", writing an emotional wellness ebook.

IDENTITY:
- Warm, empathetic, like a knowledgeable friend
- Science-informed but NOT clinical
- Practical and actionable
- NOT a therapist, doctor, or medical professional

MANDATORY RULES:
1. NEVER make medical claims (treat, cure, diagnose, prevent)
2. NEVER promise to eliminate any symptom
3. ALWAYS frame content as educational: "learn," "understand," "discover," "tools to help"
4. ALWAYS include disclaimer at top AND bottom of each chapter
5. Word count MUST be ≥1,200 words in the requested language

DISCLAIMER TEMPLATES:
Spanish: "⚠️ Aviso: Este contenido es educativo e informativo. No constituye consejo médico ni reemplaza la atención de un profesional de salud mental. Si estás en crisis, contacta al 800 290 0024 (México, SAPTEL, 24h) o servicios de emergencia locales."
English: "⚠️ Disclaimer: This content is educational and informational only. It does not constitute medical advice and is not a substitute for professional mental health care. If you are in crisis, call or text 988 (USA Suicide & Crisis Lifeline, 24/7)."

CHAPTER STRUCTURE:
1. Opening disclaimer
2. Intro paragraph (150-200 words): hook with relatable story/scenario
3. Section 1 - Core concept (400-500 words): explain the concept with metaphors
4. Section 2 - Practical tool (400-500 words): step-by-step technique
5. Section 3 - Real life integration (300-400 words): how to apply this week
6. Key takeaway box (3 bullet points + 1 reflection question)
7. Closing disclaimer
"""

CHAPTERS = [
    {
        "number": 1,
        "title_es": "Entendiendo Tu Paisaje Emocional",
        "title_en": "Understanding Your Emotional Landscape",
        "outline": ["emotions as information not enemies", "limbic system basics in plain language", "emotional vocabulary expansion", "why ignoring emotions makes them louder"]
    },
    {
        "number": 2,
        "title_es": "La Ciencia del Estrés",
        "title_en": "The Science of Stress",
        "outline": ["cortisol and the stress response cycle", "acute vs chronic stress distinction", "why modern stress is different from ancestral stress", "the stress-recovery cycle and why recovery matters"]
    },
    {
        "number": 3,
        "title_es": "La Ansiedad: El Sistema de Alarma de Tu Cuerpo",
        "title_en": "Anxiety: Your Body's Alarm System",
        "outline": ["amygdala hijack explained simply", "hypervigilance and why it develops", "anxiety vs fear distinction", "physical symptoms explained (racing heart, shallow breathing) — normalize not pathologize"]
    },
    {
        "number": 4,
        "title_es": "Hoja de Ruta para Recuperarse del Burnout",
        "title_en": "Burnout Recovery Roadmap",
        "outline": ["3 dimensions of burnout (exhaustion, cynicism, inefficacy) explained accessibly", "why 'just rest' is incomplete advice", "recovery phases: stabilize, restore, rebuild", "what to stop doing immediately"]
    },
    {
        "number": 5,
        "title_es": "El Poder de los Micro-Hábitos Diarios",
        "title_en": "The Power of Daily Micro-Habits",
        "outline": ["habit stacking explained", "why big wellness plans fail", "3 emotional regulation micro-habits under 5 minutes each", "tracking without obsessing"]
    },
    {
        "number": 6,
        "title_es": "Relaciones y Regulación Emocional",
        "title_en": "Relationships and Emotional Regulation",
        "outline": ["nervous system co-regulation (we regulate through other people)", "attachment patterns explained simply", "communication during emotional flooding", "setting emotional boundaries without guilt"]
    },
    {
        "number": 7,
        "title_es": "Construyendo Tu Plan Personal de Bienestar",
        "title_en": "Building Your Personal Wellness Plan",
        "outline": ["self-assessment: where am I now?", "SMART emotional wellness goals", "30-day starter plan template", "when to seek professional support (crisis resources in both languages)", "celebrate small wins"]
    },
]

def build_requests():
    requests = []
    for ch in CHAPTERS:
        for lang in ["es", "en"]:
            language_full = "Spanish (Latin American variety — use Mexico/Colombia/Argentina vocabulary)" if lang == "es" else "American English (conversational, warm)"
            title = ch["title_es"] if lang == "es" else ch["title_en"]
            disclaimer_note = "Spanish" if lang == "es" else "English"

            requests.append({
                "custom_id": f"ch{ch['number']}-{lang}",
                "params": {
                    "model": "claude-sonnet-4-6",
                    "max_tokens": 4000,
                    "system": SYSTEM_PROMPT,
                    "messages": [
                        {
                            "role": "user",
                            "content": f"""Write Chapter {ch['number']} of the Doctor IA ebook in {language_full}.

Chapter Title: {title}
Key concepts to cover:
{chr(10).join(f'- {point}' for point in ch['outline'])}

Requirements:
- Minimum 1,200 words
- Use the {disclaimer_note} disclaimer template at top and bottom
- Follow the 7-part chapter structure from your instructions
- Tone: empathetic, warm, NOT clinical
- Include one concrete, step-by-step practical technique in Section 2
- End with a 3-bullet key takeaway box + 1 journal reflection question
- Chapter {ch['number']} of 7: {'This is the opening chapter — establish rapport and set expectations.' if ch['number'] == 1 else 'This is the final chapter — provide crisis resources and celebrate reader journey.' if ch['number'] == 7 else 'This is a middle chapter — build on previous concepts.'}"""
                        }
                    ]
                }
            })
    return requests

# Submit batch
requests = build_requests()
batch = client.messages.batches.create(requests=requests)
batch_id = batch.id
print(f"Batch submitted: {batch_id}")
print(f"Total requests: {len(requests)} (7 chapters × 2 languages)")

# Poll for completion
while True:
    status = client.messages.batches.retrieve(batch_id)
    print(f"Status: {status.processing_status} | Counts: {status.request_counts}")

    if status.processing_status == "ended":
        break
    time.sleep(60)

# Process results
output_dir = Path("src/content/ebook")
for result in client.messages.batches.results(batch_id):
    custom_id = result.custom_id  # e.g., "ch1-es"
    ch_num, lang = custom_id.split("-")
    ch_num = ch_num.replace("ch", "")

    lang_dir = output_dir / lang
    lang_dir.mkdir(parents=True, exist_ok=True)
    out_file = lang_dir / f"ch{ch_num}-{lang}.md"

    if result.result.type == "succeeded":
        content = result.result.message.content[0].text
        # Validate word count
        word_count = len(content.split())
        if word_count < 1200:
            print(f"WARNING: {custom_id} is only {word_count} words (target: 1200+)")
        out_file.write_text(content, encoding="utf-8")
        print(f"Saved: {out_file} ({word_count} words)")
    else:
        print(f"FAILED: {custom_id} — {result.result.error}")

print("Ebook generation complete!")
```

---

## Disclaimer Injection Rules

Every chapter MUST have both:

**Top disclaimer** (before intro paragraph):
```markdown
---
⚠️ **Aviso / Disclaimer**
[ES]: Este capítulo es educativo e informativo. No constituye consejo médico ni reemplaza la atención de un profesional de salud mental. Si estás en crisis: 800 290 0024 (México, SAPTEL, 24h).
[EN]: This chapter is educational and informational only. It does not constitute medical advice. If you are in crisis: call or text 988 (USA, 24/7).
---
```

**Bottom disclaimer** (after key takeaway box):
```markdown
---
*Doctor IA is an educational product. The information in this ebook is not a substitute for professional mental health care. If you are experiencing a mental health crisis, please contact a licensed mental health professional or emergency services in your country.*

*Doctor IA es un producto educativo. La información en este ebook no reemplaza la atención de un profesional de salud mental. Si estás experimentando una crisis de salud mental, por favor contacta a un profesional licenciado o a los servicios de emergencia de tu país.*
---
```

---

## Output File Naming

```
src/content/ebook/
├── es/
│   ├── ch1-es.md
│   ├── ch2-es.md
│   ├── ch3-es.md
│   ├── ch4-es.md
│   ├── ch5-es.md
│   ├── ch6-es.md
│   └── ch7-es.md
└── en/
    ├── ch1-en.md
    ├── ch2-en.md
    ├── ch3-en.md
    ├── ch4-en.md
    ├── ch5-en.md
    ├── ch6-en.md
    └── ch7-en.md
```

---

## Quality Checklist (run after batch completes)

For each of the 14 files:
- [ ] Word count ≥ 1,200
- [ ] Disclaimer present at top
- [ ] Disclaimer present at bottom
- [ ] No medical claims (treat, cure, diagnose, prevent)
- [ ] Sections 1, 2, 3 all present
- [ ] Key takeaway box with 3 bullets
- [ ] Journal reflection question included
- [ ] Chapter 7 includes crisis resources (SAPTEL + 988)
- [ ] Language is correct (not mixed)
- [ ] Tone is empathetic, not clinical

---

## Cost Estimate

| Item | Calculation | Cost |
|------|-------------|------|
| 14 requests via Batch API | 7 chapters × 2 languages | — |
| Input tokens (estimated) | 14 × ~500 tokens = 7,000 | $3.00/M × 0.007M = $0.021 |
| Output tokens (estimated) | 14 × ~1,600 tokens = 22,400 | $15.00/M × 0.0224M = $0.336 |
| Batch API discount (50%) | Applied to both | **Total: $0.179** |
| **Without Batch (sequential)** | Same tokens | **$0.357** |
| **Savings** | Using Batch | **$0.178 (50%)** |

**Total estimated cost for all 7 chapters in both languages: ~$0.18 via Batch API**
