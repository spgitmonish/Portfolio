# Monish Sunku Prabhakar — Knowledge Base

A structured, single-source-of-truth knowledge base of the work and frameworks behind the portfolio at **monishsunkuprabhakar.com**.

## Why this exists

- **For Monish:** one place to keep case study facts straight as the portfolio evolves
- **For recruiters / hiring managers:** a deeper-than-resume reference you can share directly
- **For AI tools:** can be pasted as context into ChatGPT, Claude, or any LLM for interview prep, cover-letter generation, or behavioral-question rehearsal
- **For the chat widget on the portfolio:** the system prompt that powers `/api/chat` draws from this content

## Structure

| File | What's in it |
|------|--------------|
| `00-about.md` | Current roles, background, positioning, education, recognition, contact |
| `01-growth-org.md` | Case Study 01 — Building Gemini's Growth Organization |
| `02-recurring-buy.md` | Case Study 02 — Recurring Buy at Gemini |
| `02a-recurring-buy-roi.md` | Recurring Buy ROI model deep dive |
| `03-credit-card-cross-sell.md` | Case Study 03 — Credit Card Cross-Sell |
| `04-referrals.md` | Case Study 04 — Referrals program (incl. $75 LTO) |
| `05-experimentation-platform.md` | Case Study 05 — In-house experimentation platform |
| `10-earlier-work.md` | Whisper AI, Ample, Seagate |
| `20-frameworks.md` | Reusable PM frameworks (5 operating principles, A/D/F, build-vs-buy rule, conservative-input modeling) |
| `30-voice-and-positioning.md` | Tone, pull quotes, things to avoid claiming |
| `ALL.md` | Concatenation of everything — paste this into an LLM for full context |

## How to use it

### Paste into Claude / ChatGPT for interview prep
```
"You are helping me prep for an interview for a Head of Product role at [Company].
Here is everything about my background — refer to it as needed:
[paste contents of ALL.md]

Now ask me a behavioral question typical for this role and grade my answer."
```

### Share with a recruiter as deeper-than-resume context
Send `02-recurring-buy.md` (or any specific case study) as a follow-up after a conversation where they wanted more depth.

### Power the chat widget on the portfolio site
The `_worker.js` system prompt in `deploy/` is a summarized version of these facts. When this knowledge base gets significantly updated, regenerate the system prompt from `ALL.md`.

## Keeping it current

When you ship a new case study or update numbers:
1. Update the relevant case-study file here
2. Update the corresponding HTML in `deploy/`
3. Regenerate `ALL.md` if needed (just `cat *.md > ALL.md` from this folder)
4. Update the system prompt in `deploy/_worker.js`
