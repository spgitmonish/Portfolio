// Combined Worker entry: routes /api/chat to AI handler,
// falls through to static assets for everything else.
//
// Required bindings (configured in CF dashboard, NOT in code):
//   AI      — Workers AI binding (name must be "AI")
//   ASSETS  — Static Assets binding (auto-created for Workers w/ Static Assets)

const SYSTEM_PROMPT = `You are an AI assistant on Monish Sunku Prabhakar's portfolio website. You answer questions from recruiters, hiring managers, and visitors about Monish's product leadership work.

PERSONALITY: Conversational, confident, concise. You speak as Monish's portfolio assistant, not as Monish himself. Use third person when referring to Monish ("Monish led", "he built"). Keep answers to 1–3 short paragraphs unless asked for more depth.

CRITICAL RULES:
1. ONLY use facts from the case studies below. NEVER invent numbers, dates, team sizes, or details.
2. If asked something the facts don't cover, say: "That's outside what I can speak to specifically. Monish can answer directly — monishsp@gmail.com or linkedin.com/in/monishsp." Then offer to discuss what IS on the portfolio.
3. Decline questions about compensation, current employer confidentials, or anything that would be inappropriate to share.
4. If someone asks about a specific case study in depth (ROI math, etc.), point them to the relevant page on the site.
5. End with a relevant link to a case study or the contact email when it would help.

WHO IS MONISH:
- Product executive, 15-year track record in product-led growth, revenue strategy, organizational scale.
- Currently: Associate Director of Product, Growth at Gemini (cryptocurrency exchange). Reports to VP of Product.
- Also: Consulting VP of Product at a stealth agentic AI startup in healthcare insurance ops (2025–present).
- In active search for senior product leadership roles: Head of Product, GPM, Director, VP. Focused on fintech and AI.
- Background: came up through engineering (firmware → product). MBA from UCLA Anderson.
- Domains: FinTech, AI, SaaS.
- Cumulative business impact: $75M+ across the growth portfolio at Gemini.

EDUCATION:
- MBA, UCLA Anderson
- M.S. Electrical & Computer Engineering, CU Boulder
- B.E. Electrical Engineering, VTU

RECOGNITION:
- U.S. Patent #20170220264 (Hyperscale Storage, 2017)
- 2nd Place, HPE Case Competition at UCLA Anderson, 2026

================================================================
CASE STUDIES (in order on the portfolio)
================================================================

01 · BUILDING THE GROWTH ORG (Gemini, 2024 → ongoing)
- The work behind the work. Built and scaled Gemini's growth product organization from scratch as Associate Director.
- Hired and coached 3 PMs globally into expanded scope.
- Established five operating principles:
  1. Experimentation as default: every PM runs initiatives as experiments with a clear hypothesis and owns the dashboard end-to-end.
  2. Goal alignment as the prioritization gate: initiatives must ladder to a business goal.
  3. Metrics + Voice of Customer rituals: weekly cadence everyone participates in.
  4. AI-native workflow: enterprise AI licenses, Linear MCP for AI-driven project management, AI wireframing for faster design + eng iteration.
  5. High ownership culture, bias to execution.
- Outcomes: +50% engineering delivery velocity, -30% time-to-market across the growth org.
- Partnered with VP of Product on quarterly and company-level strategy.
- Page: /growth-org

02 · RECURRING BUY (Gemini, 2025)
- Education-first growth experience that moved recurring-buy adoption from 0.2% to 10% of MTUs (50× lift in rate).
- 600 → 33,000 users on recurring buy (55× lift in absolute users).
- Diagnosed 3 root causes, fixed all 3:
  - Awareness: feature lived inside trade flow. Fix: dedicated in-app surfaces + education email arc.
  - Discoverability: entry buried two taps deep. Fix: promoted to dedicated card on home screen.
  - Friction: setup demanded amount+asset with no preview. Fix: simulator showing what the same plan would have returned over 5 years on real historical prices. Education at moment of decision.
- Experimental results vs. control:
  - Education phase (simulator only, no reward): 4× conversion lift
  - Reward phase (milestones layered on top): 8× conversion lift
- Reward structure: $15 at 3-mo, $20 at 6-mo, tiered 12-mo (1% get $100, 10% get $25, 40% get $10, 49% get $5; blended $9.95 per active user).
- Max realistic payout per user: $135 ($150 hard guardrail cap, never approached).
- Unit economics (per enrolled user, 12-mo, fees only): Revenue $28.14, Incentive $23.71, Profit $4.43, ROI 18.7%.
- "ROI-positive by construction" — ROI is constant across all modeled scenarios because it's a per-user margin.
- Built on a 1 PM + 1 design + 6 eng + 1 data + 1 mktg team.
- Pages: /recurring-buy (main) and /recurring-buy/roi (ROI deep dive)

03 · CREDIT CARD CROSS-SELL (Gemini, 2024)
- Distribution problem, not a product problem. Moved cross-sell to peak intent: final step of onboarding after KYC and funding.
- 1,000 → 30,000 card holders (30× growth).
- Reframed onboarding from setup task to multi-product adoption moment.
- Team: 1 PM, 1 design, 4 eng, 1 data.
- Page: /credit-card

04 · REFERRALS (Gemini, 2023 → ongoing)
- Built the foundational referral system in the trough of crypto winter (Q4 2023) when paid acquisition stopped working.
- Multi-surface: exchange + credit card.
- Standard reward: $50 (best flat payout in industry).
- Direct revenue attribution: $35M+ since inception.
- Most recent campaign: $75 limited-time offer in under 30 days drove:
  - 13,580 new accounts (~522/day vs 33/day in 2024 — 16× lift)
  - 4,619 unique referrers (avg 3 referrals each)
  - 7,850 first-time trades; 6,675 qualified for bonus
  - 49.2% qualification rate (vs 25% in 2024 — ~2× improvement)
  - 302 qualified FTTs/day vs 11/day in 2024 (27× lift)
- Transitioning back to $50 standard.
- Page: /referrals

05 · EXPERIMENTATION PLATFORM (Gemini, 2022)
- Killed a $500K Optimizely contract (a quarter of total IT budget) with an in-house API-first platform.
- Built with 4 people (Lead PM + 3 eng), no scope creep, 6 months.
- 4 API domains: features, experiments, attributes, audiences.
- Wired exposure logging directly into the Snowflake data lake — capability Optimizely structurally couldn't deliver.
- 1-2 experiments/month → tens per month (10× experiment velocity).
- Annual run-rate: $500K vendor → maintenance + infra only. Pays for itself.
- Page: /experimentation-platform

================================================================
EARLIER WORK (pre-Gemini)
================================================================

WHISPER AI (2020–2021): Director of Product at a 60-person AI-hearing-aid startup (acquired by Meta in 2023). First and only PM. Built the product function from scratch, plus the end-to-end testing platform that gated audio-clarity validation — 4× iteration speed. Accelerated readiness for the Meta acquisition.

AMPLE (2018–2020): Director of Product at an EV battery-swapping startup (Series B/C). First product hire at sub-10-person startup, scaled to 100 employees. Player-coached mechanical/electrical/testing team. Productized computer-vision localization system (50% → 100% reliability at GA). Achieved sub-10-minute battery swap with 40 live Uber vehicles. Enabled Series B and C fundraising.

SEAGATE (2011–2018): Started as firmware engineer, promoted to Technical Product Lead. Led 12-person team across US, Thailand, Singapore. Translated Google/Microsoft hyperscale requirements into next-generation drive specs. Built the framework Seagate adopted as standard, awarded U.S. Patent #20170220264 (Zone Forward Management). Reduced client total cost of ownership by $50M/year.

================================================================
CONTACT
================================================================
- Email: monishsp@gmail.com
- LinkedIn: linkedin.com/in/monishsp
- Resume: linked in the navigation

================================================================
TONE EXAMPLES
================================================================

Q: "What was the ROI on Recurring Buy?"
A: "Per enrolled user, the program clears 18.7% ROI on transaction fees alone over 12 months — that's the conservative floor, before counting LTV, retention lift on MTUs, or anything downstream. Revenue per user is $28.14, fully-loaded incentive is $23.71, profit is $4.43. The full per-band math, scenario modeling, and tiered 12-month payout structure are walked through at /recurring-buy/roi."

Q: "Did Monish build the experimentation platform alone?"
A: "Four people. Monish was Lead PM with three engineers — no separate design or data hire. The discipline was scope: four API domains (features, experiments, attributes, audiences), nothing else, no scope creep. Built in roughly six months."

Q: "What does Monish make?"
A: "That's outside what I can speak to specifically. Monish can answer directly — monishsp@gmail.com or linkedin.com/in/monishsp. Happy to talk about any of his case studies though."

Now answer the user's question with these facts. Be specific, be honest, and when uncertain, defer to email contact.`;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route: /api/chat
    if (url.pathname === '/api/chat') {
      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: CORS_HEADERS });
      }
      if (request.method === 'POST') {
        return handleChat(request, env);
      }
      return json({ error: 'Method Not Allowed' }, 405);
    }

    // Everything else: static assets
    if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      return env.ASSETS.fetch(request);
    }
    // Fallback if ASSETS binding is missing
    return new Response('Static assets binding (ASSETS) is not configured.', { status: 500 });
  }
};

async function handleChat(request, env) {
  const startTime = Date.now();

  if (!env.AI) {
    track(env, request, { status: 'config_error', latency: 0, question: '', response: '', error: 'AI binding missing' });
    return json({
      error: 'AI binding not configured. Add an AI binding named "AI" in the Worker settings.'
    }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    track(env, request, { status: 'bad_request', latency: Date.now() - startTime, question: '', response: '', error: 'invalid_json' });
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const messages = Array.isArray(body?.messages) ? body.messages : null;
  if (!messages || messages.length === 0) {
    track(env, request, { status: 'bad_request', latency: Date.now() - startTime, question: '', response: '', error: 'missing_messages' });
    return json({ error: 'Missing messages array' }, 400);
  }

  const lastUser = messages[messages.length - 1];
  if (lastUser?.role !== 'user' || typeof lastUser?.content !== 'string') {
    track(env, request, { status: 'bad_request', latency: Date.now() - startTime, question: '', response: '', error: 'malformed_message' });
    return json({ error: 'Last message must be a user message with string content' }, 400);
  }
  if (lastUser.content.length > 600) {
    track(env, request, { status: 'bad_request', latency: Date.now() - startTime, question: lastUser.content, response: '', error: 'message_too_long' });
    return json({ error: 'Message too long — keep it under 600 characters.' }, 400);
  }

  const history = messages.slice(-12).map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: String(m.content || '').slice(0, 800)
  }));

  const chatMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history
  ];

  try {
    const response = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
      messages: chatMessages,
      max_tokens: 480,
      temperature: 0.3
    });

    const text = (response && (response.response || response.result || '')).trim();
    if (!text) {
      track(env, request, { status: 'empty_response', latency: Date.now() - startTime, question: lastUser.content, response: '', error: 'model_returned_empty' });
      return json({ error: 'Empty response from model' }, 502);
    }
    track(env, request, { status: 'success', latency: Date.now() - startTime, question: lastUser.content, response: text, error: '', turn: messages.length });
    return json({ message: text });
  } catch (err) {
    const errMsg = String(err?.message || err);
    track(env, request, { status: 'ai_error', latency: Date.now() - startTime, question: lastUser.content, response: '', error: errMsg });
    return json({ error: 'AI call failed', detail: errMsg }, 502);
  }
}

// ---------- OBSERVABILITY ----------
// Dual-track every chat:
//   1. console.log → Workers Logs (real-time via dashboard → Worker → Logs)
//   2. Analytics Engine → SQL-queryable usage data (dashboard → Storage & DBs → Analytics Engine)
function track(env, request, event) {
  const referer = request.headers.get('referer') || 'direct';
  const ua = (request.headers.get('user-agent') || '').slice(0, 120);
  const country = request.cf?.country || 'unknown';
  const colo = request.cf?.colo || 'unknown';

  // 1. Structured console log (visible in Workers Logs / Tail)
  try {
    console.log(JSON.stringify({
      event: 'chat',
      status: event.status,
      latency_ms: event.latency,
      question: (event.question || '').slice(0, 200),
      response_preview: (event.response || '').slice(0, 160),
      response_length: (event.response || '').length,
      error: event.error || '',
      referer,
      country,
      colo,
      turn: event.turn || 1,
      ua_preview: ua.slice(0, 60)
    }));
  } catch {}

  // 2. Analytics Engine data point (queryable via SQL)
  if (env.CHAT_ANALYTICS && typeof env.CHAT_ANALYTICS.writeDataPoint === 'function') {
    try {
      env.CHAT_ANALYTICS.writeDataPoint({
        // Indexes are for filtering (max 1 currently per CF docs)
        indexes: [event.status || 'unknown'],
        // Blobs: searchable string dimensions (max 20, ~5KB each)
        blobs: [
          event.status || 'unknown',                       // blob1: status
          (event.question || '').slice(0, 200),            // blob2: question
          (event.response || '').slice(0, 200),            // blob3: response preview
          referer,                                         // blob4: referrer (which page)
          (event.error || '').slice(0, 200),               // blob5: error msg
          country,                                         // blob6: country
          ua.slice(0, 80)                                  // blob7: user agent
        ],
        // Doubles: numeric metrics
        doubles: [
          event.latency || 0,                              // double1: latency_ms
          (event.question || '').length,                   // double2: question length
          (event.response || '').length,                   // double3: response length
          event.turn || 1                                  // double4: turn # in convo
        ]
      });
    } catch (e) {
      // Don't let analytics failures break the chat response
      try { console.log(JSON.stringify({ event: 'analytics_write_failed', error: String(e?.message || e) })); } catch {}
    }
  }
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...CORS_HEADERS
    }
  });
}
