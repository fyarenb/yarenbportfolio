# Fatma Yaren Birben Portfolio

A bold, editorial personal portfolio for Fatma Yaren Birben, a multilingual Search Quality and AI Evaluation Specialist. The design is built directly from the supplied PowerPoint: it uses the same textured background, exact orange and green theme colors, and the custom `yb` heart logo.

## Features

- Distinct home, projects, gallery, about, and contact pages
- Five structured case studies spanning LLM evaluation, search quality, localization, e-commerce, and international market research
- Responsive evidence gallery using Netlify Image CDN for on-demand resizing and format negotiation
- Netlify Forms contact flow with honeypot spam protection and an in-page success state
- Responsive, accessible navigation and reduced-motion support

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 entry pipeline with a custom CSS design system
- Netlify Image CDN
- Netlify Forms

## Run Locally

```bash
pnpm install
netlify dev --port 8889
```

Open `http://localhost:8889`.

Portfolio copy and structured case-study data live in `src/lib/portfolio.ts`. Supplied visual assets are stored in `public/assets`, while responsive transformations are requested from `/.netlify/images` at runtime.
