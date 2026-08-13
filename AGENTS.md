# Project Guide

## Overview

This is Fatma Yaren Birben’s personal portfolio, built with TanStack Start and deployed on Netlify. The visual language intentionally mirrors the supplied PowerPoint: a tiled warm-paper background, PowerPoint theme orange `#E97132`, PowerPoint theme green `#196B24`, and the `yb` heart logo.

## Architecture

- `src/routes/__root.tsx` defines global metadata, navigation, layout, and footer.
- `src/routes/index.tsx` contains the portfolio landing page.
- `src/routes/projects.tsx` renders structured case studies.
- `src/routes/gallery.tsx` renders the responsive image gallery.
- `src/routes/about.tsx` presents the biography and interests.
- `src/routes/contact.tsx` provides the AJAX Netlify Form experience.
- `src/components/OptimizedImage.tsx` centralizes Netlify Image CDN URL and `srcSet` generation.
- `src/lib/portfolio.ts` is the source of truth for case studies and gallery metadata.
- `src/styles.css` contains the visual system and responsive rules.
- `public/assets` contains user-supplied and PowerPoint-extracted source assets.
- `public/__forms.html` is the static form skeleton Netlify parses at deploy time.

## Conventions

- Keep portfolio data in `src/lib/portfolio.ts` rather than duplicating it in route components.
- Use `OptimizedImage` for gallery and photographic imagery.
- Preserve the exact PowerPoint palette variables in `src/styles.css`.
- Keep routes focused on composition and reusable UI in `src/components`.
- Use semantic HTML, descriptive alt text, keyboard-accessible controls, and visible focus behavior.

## Non-obvious Decisions

- The PowerPoint’s embedded 128×128 image is the repeated site background to match the source artwork exactly.
- The original logo image is used rather than redrawn, preserving its proportions.
- `/resume` redirects to `/about` because no standalone CV file was supplied.
- Netlify Forms submits to `/__forms.html` because posting to `/` can be intercepted by the TanStack Start catch-all route.
