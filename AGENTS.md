<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Kleanflix Agent Guidelines & Rules

## 1. Strict Scope & User Directives
- **Follow User Instructions Strictly**: Implement ONLY what the user explicitly requests. Do NOT invent, assume, or add extra unrequested sections, pages, features, or design elements.
- **Ask Before Acting If Confused**: If any instruction or requirement is unclear or ambiguous, STOP and ask the user clarifying open questions BEFORE making any changes to the codebase.
- **Exact Screenshot-to-Code Conversion**: Translate provided UI reference screenshots pixel-perfectly into React/Tailwind code matching exact layouts, alignments, typography, colors, and visual details.

## 2. Component Architecture & Next.js Best Practices
- **Check Existing Components First**: Always search and inspect `src/components/` before creating a new UI component. If a reusable component already exists (e.g. `Button`), reuse and extend it.
- **Keep `page.js` as a Server Component**: NEVER place `'use client'` on `page.js`. Keep page files as Server Components. Extract interactive UI or animation logic into modular client components inside `src/components/` and import them into `page.js`.
- **Server-Side API Data Fetching**: Perform all API data calls on the server side (in Server Components or Server Actions via `'use server'`), NOT through client proxy endpoints. Fetch data on the server and pass it down as props to Client Components.
- **State Management & Error Handling**: Implement proper React state management (`useState`, `useReducer`, context) and robust error handling (try/catch blocks, error boundaries, loading skeletons, and graceful fallbacks).

## 3. Design System, CSS & Responsive Rules
- **Use Existing `globals.css` Tokens**: Rely on pre-defined CSS variables and Tailwind theme utilities from `src/app/globals.css`:
  - Primary color: `#1E6BB8` (`bg-primary`, `text-primary`, `border-primary`)
  - Secondary color: `#F47A1F` (`bg-secondary`, `text-secondary`, `border-secondary`)
  - Font: Open Sans (`font-sans`)
- **No Inline Font Sizing**: Avoid inline CSS font sizing (e.g. `style={{ fontSize: '18px' }}`). Always use utility classes (`text-sm`, `text-base`, `text-lg`, `text-xl`, etc.) or global CSS typography tokens.
- **Mobile-First Responsive Breakpoints**: Define default classes for mobile view first (unprefixed utilities), then add desktop/tablet overrides using custom project responsive prefixes:
  - Mobile (default unprefixed): `< 1001px`
  - `md`: `1001px` (range: 1001px to 1500px)
  - `lg`: `1501px` (range: 1501px to 1800px)
  - `xl`: `1801px+`
- **Avoid `sm:` Prefix for Mobile Scaling**: Do NOT use `sm:` breakpoint overrides (e.g. `text-lg sm:text-xl md:text-2xl lg:text-3xl`) because standard `sm:` (640px) triggers inside the mobile viewport range (< 1001px). Instead, write responsive classes strictly as `text-lg md:text-2xl lg:text-3xl` so base unprefixed utilities apply for all mobile screens up to `1001px` (`md`).
- **Main Container Centering**: Main container max width is capped at **1800px** (`max-w-[1800px]` or `.main-container`). On larger screens (> 1800px), display blank side margins and keep all page content centered (`mx-auto`).

## 4. Performance & Heavy Animation Optimization
- **Next/Image Enforcement**: Always use `next/image` (`import Image from "next/image"`) instead of raw `<img>` tags for automatic image optimization, layout shift prevention, and fast loading.
- **Optimized Framer Motion**: Write clean, performance-first animation code with `framer-motion`. Use `transform` and `opacity` properties for GPU-accelerated 60fps animations. Prevent unnecessary re-renders in animation-heavy layouts.
- **Icon Utility**: Use `lucide-react` for clean, lightweight, accessible icons.



