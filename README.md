# Jack-World

A personal website and resume-style portfolio for Jack.

## Current stack

This repo currently uses a dependency-free frontend:

- `index.html`
- `styles.css`
- `script.js`

That choice is deliberate because the local environment is on `Node 12`, which is too old for the modern Next.js stack I would normally recommend.

## Recommended production stack

Once you upgrade to `Node 20+`, the stronger long-term stack is:

- Next.js
- TypeScript
- Tailwind CSS or CSS Modules
- Vercel for deployment

## Local usage

Open `index.html` directly in a browser, or run a simple static server from this directory.

## Personalization

Edit the content in `script.js`:

- hero text
- experience
- projects
- skills
- contact links

Edit the visual system in `styles.css` if you want to change the theme.
