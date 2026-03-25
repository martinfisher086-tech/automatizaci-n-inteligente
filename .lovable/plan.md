

## AI Automation Specialist Landing Page

A dark-themed, mobile-first landing page in Spanish for an AI automation specialist, built with React + Tailwind CSS.

### Architecture
One component per section, all assembled in the Index page:

1. **Navbar** — Fixed top with blur backdrop, code-styled logo `{ automatizaciones.dev }`, responsive hamburger menu, smooth scroll links, accent CTA button. Hide-on-scroll-down behavior on mobile.

2. **Hero Section** — Split layout (text 55% / visual 45% on desktop, stacked on mobile). Includes headline, subheadline, CTA button with pulse animation, and a Before/After card comparison with ❌/✓ icons. Right card items animate in with staggered fade-in-up on scroll.

3. **Services Section** — 3 cards (Zap, Bot, Map icons from lucide-react) showing automation services with pricing tags. Hover effect with subtle scale and accent border glow.

4. **Projects Section** — 3 project cards with 16:9 placeholder divs, tech stack pill tags, titles, descriptions, and GitHub links.

5. **How It Works Section** — 3-step timeline (Search, Settings, CheckCircle icons), horizontal on desktop / vertical on mobile. Workflow placeholder image and tech stack pill badges below.

6. **Contact/CTA Section** — Functional form with validation (name, email, service select, textarea). Submit posts to `VITE_N8N_WEBHOOK_URL` with loading/success states. Secondary Cal.com CTA button.

7. **Footer** — Minimal single row with copyright, nav links, and GitHub/LinkedIn icon links.

### Design System
- Dark theme: `#0a0a0f` background, `#111118` surfaces, `#6c63ff` accent
- Inter font via Google Fonts
- All animations via CSS transitions + Intersection Observer (no libraries)
- All text in Spanish (Latin America) using the exact copy provided
- Styled placeholder divs for all media (no images)

### Components
- `Navbar.tsx`
- `HeroSection.tsx`
- `ServicesSection.tsx`
- `ProjectsSection.tsx`
- `HowItWorksSection.tsx`
- `ContactSection.tsx`
- `Footer.tsx`
- `useScrollAnimation.ts` — shared Intersection Observer hook
- Updated `index.css` with custom design tokens

