# Logos Trinity Technologies — Corporate Website

A premium, enterprise-grade multi-page Next.js 14 site for **Logos Trinity Technologies LLP** — recruitment, consulting, outsourcing, and software development.

## Stack

- **Next.js 14** (App Router, RSC where possible)
- **TypeScript** (strict)
- **Tailwind CSS** with a custom navy + flame design system
- **Framer Motion** for component-level transitions, scroll reveals, magnetic CTAs
- **GSAP** included as a dependency for future timeline-based animations
- **Inter** + **JetBrains Mono** via `next/font` (no external requests at runtime)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — hero, about, services, jobs preview, software showcase, why-us, process, testimonials, contact teaser |
| `/about` | Company story, mission/vision, timeline, leadership |
| `/services` | All nine practice areas with detail blocks |
| `/careers` | Full job board with search, department/location/type/work-mode filters |
| `/contact` | Contact form, office info, stylized map |

## Theme system

Dark is the default (`<html class="dark">`). The toggle in the navbar switches to a light variant using Tailwind's `darkMode: "class"`. Preference is stored in `localStorage` under the key `lt-theme`.

## Customization

- **Logo** — replace `public/logo.svg` to override the inline placeholder mark
- **Company info** — single source of truth at `lib/company.ts` (phone, email, address)
- **Services** — `lib/services.ts`
- **Jobs** — `lib/jobs.ts`
- **Testimonials & stats** — `lib/testimonials.ts`
- **Colors** — `tailwind.config.ts` (`navy.*`, `flame.*`, `mist.*`)
- **CSS tokens** — `app/globals.css` (CSS custom properties for light/dark)

## Accessibility

- Visible focus states (orange ring)
- `prefers-reduced-motion` respected globally
- Custom cursor disabled on touch / coarse-pointer devices
- Semantic landmarks (`<main>`, `<footer>`, `<nav>`)
- Form labels, `aria-label` on icon-only controls
