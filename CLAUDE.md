# CLAUDE.md

## Project Overview

This is a presentation site built with React, TypeScript, and Reveal.js, using Bun as the runtime/package manager. The site is hosted on GitHub Pages at https://yermilov.github.io/pragmatic-vibe-clauding-ua

## Tech Stack

- **Runtime**: Bun
- **Framework**: React 18 + TypeScript
- **Bundler**: Vite
- **Presentation**: Reveal.js
- **Hosting**: GitHub Pages (auto-deployed via GitHub Actions)

## Commands

```bash
bun install      # Install dependencies
bun run dev      # Start dev server (http://localhost:5173)
bun run build    # Build for production
bun run preview  # Preview production build
bun run deploy   # Manual deploy to GitHub Pages
```

## Project Structure

```
src/
├── App.tsx                    # Main presentation with all slides
├── main.tsx                   # React entry point
├── index.css                  # Global styles
├── vite-env.d.ts              # Vite type declarations
├── components/
│   └── Slide.tsx              # Reusable slide component
└── styles/
    └── reveal-overrides.css   # Custom Reveal.js styling
```

## Adding Slides

Edit `src/App.tsx` and use the `Slide` component:

```tsx
<Slide notes="Speaker notes" transition="slide">
  <h2>Title</h2>
  <p>Content</p>
</Slide>
```

### Slide Props

- `children` - Slide content (required)
- `transition` - Animation: `none`, `fade`, `slide`, `convex`, `concave`, `zoom`
- `notes` - Speaker notes (press 'S' to view)
- `background` - Background color
- `backgroundImage` - Background image URL

## Reveal.js Keyboard Shortcuts

- Arrow keys: Navigate slides
- `S`: Speaker notes view
- `F`: Fullscreen
- `O`: Overview mode
- `Esc`: Exit overview/fullscreen

## Deployment

Automatic deployment occurs on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`). The site deploys to the `gh-pages` branch.

## Git Conventions

- Commit messages: `Add/Update/Fix/Remove [description]`
- Include co-author footer for AI-assisted commits
