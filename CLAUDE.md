# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Flow** is a personal productivity web application (habit tracking, task management, Pomodoro timer, weekly planner, statistics, rewards). It is built with pure vanilla HTML/CSS/JavaScript — no framework, no build step, no package manager.

The two main files are:
- `index.html.txt` — Marketing landing page with authentication modals
- `app.html.txt` — Main dashboard SPA with all productivity modules

Files have a `.txt` extension but are full HTML documents; rename to `.html` to open in a browser.

## Running the App

There is no build process. Serve the files directly:

```bash
# Simple HTTP server (Python)
python3 -m http.server 8080
# Then open http://localhost:8080/index.html.txt
```

No test suite or linter is configured.

## Architecture

### Two-page SPA
All code is self-contained within each file (inline `<style>` and `<script>` tags — no external CSS/JS files). Each page is fully standalone.

### External Dependencies (CDN only)
- **Supabase JS SDK v2** (`cdn.jsdelivr.net`) — authentication and data sync
- **Google Fonts** (DM Sans)

### Theming
Dark/light mode is controlled via `data-theme` attribute on the `<html>` element. All colors are CSS custom properties (`--color-*`, `--bg-*`, etc.) defined at `:root` and `[data-theme="dark"]`.

### Internationalization
Strings live in a `translations` JS object keyed by language (`fr`, `en`, `es`, `pt`). French is the default. The active language is persisted in `localStorage`. All UI strings use Unicode escapes (e.g., `\u00e9` instead of `é`) to avoid encoding issues — maintain this convention when adding new strings.

### Authentication (index.html.txt)
Uses two `<script>` blocks:
1. Global scope — i18n helpers, theme toggle, modal open/close
2. `type="module"` — Supabase client init, sign-in/sign-up/password reset logic

Supabase errors are mapped to user-friendly i18n keys before display.

### State Management
Minimal: only language preference and auth session are stored in `localStorage`. There is no client-side state library.

### Layout (app.html.txt)
Fixed sidebar (220px), main content area with CSS Grid. Responsive breakpoints at 640px and 400px. The sidebar collapses on mobile.

## Key Conventions

- All styles are inline in `<style>` blocks — do not introduce external stylesheets.
- Keep all JS inline within the HTML file; no module bundler is used.
- Use Unicode escapes for any non-ASCII characters in JS string literals.
- Supabase credentials are referenced directly in the source — treat them as environment-specific and do not hardcode production keys in commits.
- Stripe integration is planned but not yet implemented (marked "coming soon" in the UI).
