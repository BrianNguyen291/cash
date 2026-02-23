# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

Next.js 14 App Router marketing site for a credit-card-to-cash exchange and mortgage loan service (刷卡換現金). Written in TypeScript with Tailwind CSS and shadcn/ui components. Language is Traditional Chinese (zh-TW).

### Pages

- `/` — Main landing page (cash exchange service)
- `/mortgage` — House loan service page
- `/services` — Service details
- `/faq` — FAQ page

### Layout

`app/layout.tsx` wraps all pages with: `Header` → `{children}` → `GlobalFooter` → `FloatingButtons` → `FraudPreventionModal`. There are no nested layouts.

### Key directories

- `components/ui/` — shadcn/ui primitives (do not edit manually; managed via `npx shadcn@latest add`)
- `components/mortgage/` — Mortgage page-specific components
- `components/` — Shared components (header, footer, forms, FAQ, etc.)
- `lib/email.ts` — Nodemailer config (Yahoo SMTP)
- `lib/utils.ts` — `cn()` helper for Tailwind class merging
- `hooks/` — `use-mobile.tsx`, `use-toast.ts`

### API

Single endpoint: `POST /api/submit-form` (`app/api/submit-form/route.ts`). Handles both cash exchange and mortgage form submissions, validates fields, sends email via Nodemailer.

### External services

- **Google Ads/GTM**: Hardcoded ID `AW-649643647` in layout + `components/google-tag.tsx` for conversion tracking
- **LINE Official Account**: `https://lin.ee/LwBO514` (ID: @309rgssv)
- **Email**: `ilove265615@yahoo.com.tw` via Yahoo SMTP

### Environment variables

- `EMAIL_PASSWORD` — Required for form submission (Yahoo app password)
- `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_LINE_CONVERSION_LABEL`, `NEXT_PUBLIC_PHONE_CONVERSION_LABEL`, `NEXT_PUBLIC_FORM_CONVERSION_LABEL` — Optional Google Ads tracking

## Conventions

- Import alias: `@/` maps to project root (`@/components`, `@/lib`, `@/hooks`)
- Icons: `lucide-react`
- Forms: `react-hook-form` + `zod` for validation
- Most components are React Server Components; only interactive ones use `"use client"`
- Build skips ESLint and TypeScript errors (`next.config.mjs`)
- Images are unoptimized (external URLs from Pexels)
- PWA: service worker registered in layout, manifest at `/manifest.json`
