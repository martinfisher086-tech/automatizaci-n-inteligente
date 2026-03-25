# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build
npm run lint       # ESLint
npm run test       # Run tests once (vitest)
npm run test:watch # Run tests in watch mode
```

## Architecture

Single-page landing site built with **React 18 + TypeScript + Vite**, using **shadcn/ui** (Radix UI primitives) and **Tailwind CSS**.

**Page structure** (`src/pages/Index.tsx`): A single scrollable page composed of section components stacked in order:
`Navbar → HeroSection → ServicesSection → ProjectsSection → HowItWorksSection → ContactSection → Footer`

**Routing** (`src/App.tsx`): React Router v6 with only two routes — `/` (Index) and `*` (NotFound). New routes must be added above the catch-all `*` route.

**Scroll animations**: The `useScrollAnimation` hook (`src/hooks/useScrollAnimation.ts`) uses `IntersectionObserver` to toggle visibility. Apply `animate-section` CSS class to a wrapper div and add `visible` when `isVisible` is true. Staggered children use `stagger-item` / `stagger-item.visible`.

**Styling**: Dark-only theme (no light mode). CSS variables for the color system are defined in `src/index.css`. Primary color: `hsl(244 95% 60%)` (violet-blue). Font: Inter from Google Fonts. All colors should use the CSS custom properties (`--primary`, `--background`, etc.) rather than hardcoded values.

**Contact form** (`src/components/ContactSection.tsx`): POSTs JSON to `VITE_N8N_WEBHOOK_URL` env variable on submit. No external form library — uses native `FormData` with manual validation.

**Path alias**: `@/` maps to `./src/`.

**UI components**: `src/components/ui/` contains the full shadcn/ui component library — use these before creating new primitives.

## Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_N8N_WEBHOOK_URL` | n8n webhook endpoint for contact form submissions |
