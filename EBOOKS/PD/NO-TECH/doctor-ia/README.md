# Doctor IA — AI-Powered Emotional Wellness Coach

## Project Vision

Doctor IA is a bilingual (Spanish LATAM + English) AI-powered emotional wellness funnel built around a $17 ebook and an AI chatbot coach. The product reaches users through YouTube long-form content and short-form Reels, drives them to a landing page, converts them with a low-friction checkout, and upsells personalized emotional health plans powered by Claude.

**Funnel architecture:**
```
YouTube / Reels (bilingual content)
        ↓
Landing Page (Next.js 15, Vercel)
        ↓
$17 Ebook purchase (Stripe / Lemon Squeezy)
        ↓
AI Chatbot onboarding (Claude Haiku)
        ↓
Upsell: Personalized Emotional Health Plan (Claude Sonnet, $97+)
```

**Target market:**
- Primary: Spanish-speaking LATAM women, ages 28–45, experiencing anxiety, stress, or burnout
- Secondary: English-speaking USA women, same demographic profile

---

## Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Frontend | Next.js 15 App Router | SSR, edge functions, Vercel-native |
| Hosting | Vercel (free tier → Pro) | Zero DevOps, global CDN |
| AI — Chat/Simple | Claude Haiku (claude-haiku-4-5-20251001) | Fast, cheap, bilingual |
| AI — Creative/Strategic | Claude Sonnet (claude-sonnet-4-6) | Quality content generation |
| Payments | Stripe + Lemon Squeezy | Stripe for USA, LS for global/VAT |
| Automation | n8n (self-hosted or cloud) | Post-purchase delivery pipeline |
| Analytics | PostHog + GA4 | Product analytics + conversion tracking |
| Email | Resend | Transactional, high deliverability |
| Lead storage | Airtable (MVP) → Supabase (scale) | Progressively migrate as volume grows |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development |
| Content | Batch API + prompt caching | 50% cost reduction on bulk generation |

---

## Budget: $1,000 USD to Start

| Item | Monthly Cost | Notes |
|---|---|---|
| Vercel Pro (optional) | $20 | Free tier sufficient for MVP |
| Anthropic API | $50–150 | Scales with usage; heavy caching |
| n8n Cloud Starter | $20 | Or self-host free on Railway |
| Resend | $0–20 | Free up to 3,000 emails/month |
| Domain (doctoria.app) | $12/year | One-time |
| Lemon Squeezy | 5% + $0.50/sale | No monthly fee |
| Stripe | 2.9% + $0.30/sale | Standard rates |
| PostHog | $0 | Free up to 1M events/month |
| **Total initial** | **~$100–200/month** | Well within $1,000 budget |

Break-even: ~8 ebook sales/month at $17 (after fees).

---

## How to Run

### Prerequisites
- Node.js >= 20.x
- npm >= 10.x
- Accounts: Anthropic, Stripe, Vercel, Resend

### Setup

```bash
# 1. Clone and install
git clone <repo-url> doctor-ia
cd doctor-ia
npm install

# 2. Configure environment
cp .env.example .env.local
# Edit .env.local with your actual keys (see Environment Variables section)

# 3. Run development server
npm run dev
# Opens at http://localhost:3000

# 4. Build for production
npm run build
npm run start

# 5. Build ebook PDF (requires Pandoc + WeasyPrint installed)
npm run ebook:build
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod

# Set environment variables in Vercel dashboard or via CLI:
vercel env add ANTHROPIC_API_KEY
vercel env add STRIPE_SECRET_KEY
# ... add all variables from .env.example
```

---

## Folder Structure

```
doctor-ia/
├── README.md                    # This file
├── CLAUDE.md                    # Living project memory + agile backlog
├── .env.example                 # Environment variable template
├── package.json                 # Dependencies and scripts
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
│
├── .claude/
│   ├── agents/                  # Claude sub-agent definitions
│   │   ├── scrum-master.md
│   │   ├── content-strategist.md
│   │   ├── script-writer.md
│   │   ├── visuals-prompt-engineer.md
│   │   ├── landing-developer.md
│   │   ├── chatbot-engineer.md
│   │   ├── automation-orchestrator.md
│   │   └── cost-optimizer.md
│   └── skills/                  # Reusable skill procedures
│       ├── generate-reel-script/SKILL.md
│       ├── generate-ebook-chapter/SKILL.md
│       ├── generate-landing-copy/SKILL.md
│       ├── generate-chatbot-prompt/SKILL.md
│       ├── batch-content-creator/SKILL.md
│       └── publish-checklist/SKILL.md
│
├── src/
│   ├── app/                     # Next.js 15 App Router
│   │   ├── layout.tsx           # Root layout (fonts, analytics)
│   │   ├── page.tsx             # Landing page (/)
│   │   ├── globals.css          # Global styles
│   │   ├── api/
│   │   │   ├── chat/route.ts    # Chatbot API endpoint
│   │   │   ├── stripe/
│   │   │   │   ├── checkout/route.ts
│   │   │   │   └── webhook/route.ts
│   │   │   └── lemon/
│   │   │       └── webhook/route.ts
│   │   └── success/page.tsx     # Post-purchase success page
│   │
│   ├── components/
│   │   ├── ui/                  # shadcn/ui primitives
│   │   ├── landing/
│   │   │   ├── Hero.tsx
│   │   │   ├── PainPoints.tsx
│   │   │   ├── EbookPreview.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── CheckoutButton.tsx
│   │   │   └── Disclaimer.tsx
│   │   └── chatbot/
│   │       ├── ChatWidget.tsx
│   │       └── ChatMessage.tsx
│   │
│   ├── lib/
│   │   ├── anthropic.ts         # Anthropic client + helpers
│   │   ├── stripe.ts            # Stripe client
│   │   ├── lemon.ts             # Lemon Squeezy client
│   │   ├── resend.ts            # Email client
│   │   ├── posthog.ts           # Analytics helpers
│   │   └── i18n.ts              # Bilingual copy management
│   │
│   └── content/
│       ├── ebook/
│       │   ├── es/              # Spanish chapters (ch1-es.md … ch7-es.md)
│       │   └── en/              # English chapters (ch1-en.md … ch7-en.md)
│       └── reels/
│           └── scripts/         # Generated Reel scripts (JSON + MD)
│
├── dist/
│   └── ebook/                   # Compiled PDFs (git-ignored)
│
└── n8n/
    └── workflows/               # n8n workflow JSON exports
        └── purchase-delivery.json
```

---

## Environment Variables

See `.env.example` for the full list. Required for MVP:
- `ANTHROPIC_API_KEY` — AI features
- `STRIPE_SECRET_KEY` + `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Payments
- `RESEND_API_KEY` — Post-purchase email delivery
- `NEXT_PUBLIC_POSTHOG_KEY` — Analytics

---

## Important Disclaimers

### English

> **IMPORTANT NOTICE:** Doctor IA is an AI-powered educational and informational product. It does NOT provide medical advice, psychological therapy, psychiatric treatment, or clinical diagnosis of any kind. The content in this ebook, chatbot, and all associated materials is intended for general informational and educational purposes only. Nothing in this product constitutes a doctor-patient relationship. If you are experiencing a mental health crisis, suicidal thoughts, or severe psychological distress, please contact a licensed mental health professional or emergency services immediately. In the USA, call or text 988 (Suicide & Crisis Lifeline). In LATAM, contact your local emergency services.

### Español

> **AVISO IMPORTANTE:** Doctor IA es un producto educativo e informativo impulsado por inteligencia artificial. NO proporciona consejo médico, psicoterapia, tratamiento psiquiátrico, ni diagnóstico clínico de ningún tipo. El contenido de este ebook, chatbot y todos los materiales asociados es exclusivamente para fines informativos y educativos generales. Nada en este producto constituye una relación médico-paciente. Si estás experimentando una crisis de salud mental, pensamientos suicidas o angustia psicológica severa, por favor contacta inmediatamente a un profesional de salud mental licenciado o a los servicios de emergencia. En México: 800 290 0024 (SAPTEL, 24h). En Argentina: (011) 5275-1135 (Centro de Asistencia al Suicida). En otros países de LATAM, contacta los servicios de emergencia locales.

---

## Content Pillars

1. **Emotional Wellness** — Managing anxiety, stress, and burnout in daily life
2. **Practical Tools** — Breathing exercises, journaling prompts, grounding techniques
3. **Science-Backed** — Neuroscience and psychology research explained accessibly

---

## Monetization Roadmap

| Phase | Product | Price | Timeline |
|---|---|---|---|
| MVP | Ebook: "Tu Mente, Tu Salud / Your Mind, Your Health" | $17 | Sprint 1 |
| V1 | AI Chatbot (Claude Haiku) embedded on landing | Free (lead gen) | Sprint 1 |
| V2 | Personalized Emotional Health Plan (Claude Sonnet) | $97 | Sprint 3 |
| V3 | Monthly AI coaching subscription | $27/month | Sprint 5 |
| V4 | Group coaching + live webinars | $197 | Quarter 2 |

---

## License

Proprietary. All rights reserved. Not for redistribution.
