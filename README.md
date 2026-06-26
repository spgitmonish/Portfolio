# monishsunkuprabhakar.com

Source for **[monishsunkuprabhakar.com](https://monishsunkuprabhakar.com)** — the personal portfolio of Monish Sunku Prabhakar. Deployed on Cloudflare Workers with Static Assets.

## Layout

```
.
├── src/
│   └── index.js          # Worker entry — routes /api/chat to Workers AI, falls through to static assets
├── public/               # Everything served as static (HTML, CSS, JS, images)
│   ├── index.html        # Homepage
│   ├── styles.css
│   ├── chat-widget.js    # Floating AI chat widget
│   ├── favicon.svg
│   ├── og-image.png      # Social share card
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── recurring-buy.html
│   ├── recurring-buy/
│   │   └── roi.html      # /recurring-buy/roi deep dive
│   ├── credit-card.html
│   ├── referrals.html
│   ├── experimentation-platform.html
│   ├── growth-org.html
│   └── uploads/
│       └── headshot.jpg
├── knowledge-base/       # Markdown source-of-truth for case study facts
│   └── *.md
├── wrangler.toml         # Cloudflare deployment config
└── .gitignore
```

## Tech stack

- **Static site:** plain HTML + CSS + a single shared `styles.css`. No framework, no build step.
- **Worker (`src/index.js`):** routes `/api/chat` to Workers AI (`@cf/meta/llama-3.1-8b-instruct`), all other paths fall through to static assets via `env.ASSETS.fetch(request)`.
- **Chat widget (`public/chat-widget.js`):** self-contained floating chat UI that posts to `/api/chat`.
- **Hosting:** Cloudflare Workers with Static Assets.
- **Analytics:** Cloudflare Web Analytics + HubSpot tracking pixel embedded in each page.

## Deploy

This repo is connected to Cloudflare → Workers & Pages via Git. Pushing to the `main` branch triggers an automatic build + deploy.

```bash
git add .
git commit -m "your change"
git push
```

CF runs `wrangler deploy` under the hood, which:
1. Bundles `src/index.js` as the Worker script
2. Uploads everything in `public/` as static assets bound to `env.ASSETS`
3. Activates the new version on `monishsunkuprabhakar.com`

### Required Cloudflare bindings (set once in dashboard)

The Worker needs two bindings configured in the Cloudflare dashboard (Workers & Pages → your Worker → Settings → Bindings):

| Variable | Type | Notes |
|----------|------|-------|
| `AI` | Workers AI | Powers `/api/chat` |
| `ASSETS` | Static Assets | Auto-created when Cloudflare sees the `[assets]` block in `wrangler.toml` |

## Local development

```bash
npx wrangler dev
```

Serves the site at `http://localhost:8787` with hot reload. The `/api/chat` route uses live Workers AI (counts against free-tier Neuron quota).

## Knowledge base

The `knowledge-base/` directory holds the canonical facts behind every case study: numbers, timelines, frameworks, voice/positioning notes. Update markdown files here first, then propagate to:

- `public/*.html` for any changes visible on the site
- `src/index.js` SYSTEM_PROMPT for changes that affect the AI chat

Run `cat knowledge-base/*.md > knowledge-base/ALL.md` after edits to regenerate the all-in-one file used for AI tool context.

## Contact

- Email: monishsp@gmail.com
- LinkedIn: [linkedin.com/in/monishsp](https://linkedin.com/in/monishsp)
