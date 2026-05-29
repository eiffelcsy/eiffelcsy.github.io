# eiffelcsy.github.io — Nuxt

Personal website for Eiffel Chong. Built with **Nuxt 4**, **Tailwind CSS**, and **Nuxt Content** for markdown-driven blog posts.

## Tech stack

- **Nuxt 4** — app directory convention (`app/`)
- **@nuxtjs/tailwindcss** — CSS utilities, CSS variables bridged as Tailwind tokens
- **@nuxt/content v3** — markdown CMS for blog posts (SQLite-backed)
- **@nuxtjs/google-fonts** — JetBrains Mono, Newsreader, EB Garamond

## Development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Blog

Blog posts live in `content/blog/` as Markdown files with frontmatter:

```yaml
---
title: My post title
date: "2026-05-29"
category: essay
readTime: 8
subtitle: Optional deck text shown below the title.
---
```

The file name becomes the URL slug: `content/blog/my-post.md` → `/blog/my-post`.

## Building

```bash
npm run build     # production build
npm run generate  # static site generation
npm run preview   # preview the production build
```

## Design

The site replicates the warm-paper aesthetic from the original HTML prototype:
- **Mono-serif** (default): JetBrains Mono labels + Newsreader body
- **Terminal**: full JetBrains Mono
- **Academic**: full EB Garamond
- **Dark/light** themes and customizable accent colour via the ✦ tweaks panel
