// Portfolio chat widget — self-contained floating button + panel
// Talks to /api/chat (Cloudflare Pages Function backed by Workers AI)
(function () {
  if (window.__monishChatLoaded) return;
  window.__monishChatLoaded = true;

  // ---------- STYLES ----------
  const css = `
.mp-chat-toggle {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #6dc97a;
  color: #0e0e0c;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(0,0,0,0.5);
  z-index: 99998;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  font-family: "Fraunces", Georgia, serif;
  font-weight: 600;
}
.mp-chat-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(0,0,0,0.6);
}
.mp-chat-toggle svg { width: 26px; height: 26px; }
.mp-chat-toggle.hidden { display: none; }

.mp-chat-panel {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 400px;
  max-width: calc(100vw - 48px);
  height: 600px;
  max-height: calc(100vh - 48px);
  background: #1a1a17;
  border: 1px solid #2e2d29;
  border-radius: 14px;
  display: none;
  flex-direction: column;
  z-index: 99999;
  overflow: hidden;
  font-family: "Inter", system-ui, sans-serif;
  box-shadow: 0 16px 56px rgba(0,0,0,0.65);
  color: #f5f4ee;
  transform-origin: bottom right;
}
.mp-chat-panel.open {
  display: flex;
  animation: mp-panel-in 0.2s ease-out;
}
@keyframes mp-panel-in {
  from { opacity: 0; transform: translateY(12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.mp-chat-header {
  padding: 16px 20px;
  border-bottom: 1px solid #2e2d29;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0e0e0c;
}
.mp-chat-title {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #9a978f;
}
.mp-chat-title strong {
  color: #6dc97a;
  font-weight: 500;
}
.mp-chat-close {
  background: none;
  border: none;
  color: #b8b6a8;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  padding: 4px 8px;
  font-family: inherit;
}
.mp-chat-close:hover { color: #6dc97a; }

.mp-chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  scroll-behavior: smooth;
}
.mp-chat-messages::-webkit-scrollbar { width: 6px; }
.mp-chat-messages::-webkit-scrollbar-track { background: transparent; }
.mp-chat-messages::-webkit-scrollbar-thumb { background: #2e2d29; border-radius: 3px; }

.mp-msg {
  font-size: 14px;
  line-height: 1.55;
  padding: 12px 16px;
  border-radius: 12px;
  max-width: 86%;
  word-wrap: break-word;
}
.mp-msg.user {
  align-self: flex-end;
  background: #6dc97a;
  color: #0e0e0c;
  font-weight: 500;
  border-bottom-right-radius: 4px;
}
.mp-msg.bot {
  align-self: flex-start;
  background: #222220;
  color: #f5f4ee;
  border-bottom-left-radius: 4px;
}
.mp-msg.bot a {
  color: #6dc97a;
  border-bottom: 1px solid rgba(109,201,122,0.4);
}
.mp-msg.bot a:hover { border-bottom-color: #6dc97a; }
.mp-msg.bot p { margin: 0 0 10px; }
.mp-msg.bot p:last-child { margin-bottom: 0; }
.mp-msg.bot ul, .mp-msg.bot ol { margin: 0 0 10px; padding-left: 22px; }
.mp-msg.bot ul:last-child, .mp-msg.bot ol:last-child { margin-bottom: 0; }
.mp-msg.bot li { margin-bottom: 6px; line-height: 1.5; }
.mp-msg.bot li:last-child { margin-bottom: 0; }
.mp-msg.bot strong { color: #ffffff; font-weight: 600; }
.mp-msg.bot em { font-style: italic; color: #b8b6a8; }
.mp-msg.bot code {
  background: rgba(255,255,255,0.07);
  padding: 1px 6px;
  border-radius: 4px;
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 12.5px;
  color: #6dc97a;
}
.mp-msg.bot.welcome {
  background: transparent;
  padding: 0;
  font-family: "Fraunces", Georgia, serif;
  font-size: 17px;
  line-height: 1.4;
  color: #f5f4ee;
}
.mp-msg.bot.welcome .label {
  display: block;
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #6dc97a;
  margin-bottom: 8px;
}

.mp-msg.loading {
  display: flex;
  gap: 5px;
  padding: 16px 18px;
  align-items: center;
}
.mp-msg.loading span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9a978f;
  animation: mp-pulse 1.4s infinite ease-in-out;
}
.mp-msg.loading span:nth-child(2) { animation-delay: 0.16s; }
.mp-msg.loading span:nth-child(3) { animation-delay: 0.32s; }
@keyframes mp-pulse {
  0%, 70%, 100% { opacity: 0.2; transform: translateY(0); }
  35% { opacity: 1; transform: translateY(-2px); }
}

.mp-suggestions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
}
.mp-sug-btn {
  background: transparent;
  border: 1px solid #2e2d29;
  color: #b8b6a8;
  padding: 11px 14px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
  line-height: 1.4;
}
.mp-sug-btn:hover {
  border-color: #6dc97a;
  color: #6dc97a;
  background: rgba(109,201,122,0.04);
}

.mp-chat-form {
  display: flex;
  border-top: 1px solid #2e2d29;
  padding: 12px;
  gap: 8px;
  background: #0e0e0c;
}
.mp-chat-input {
  flex: 1;
  background: #1a1a17;
  border: 1px solid #2e2d29;
  color: #f5f4ee;
  font-family: inherit;
  font-size: 14px;
  padding: 10px 14px;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.15s;
}
.mp-chat-input:focus { border-color: #6dc97a; }
.mp-chat-input::placeholder { color: #6a6862; }
.mp-chat-send {
  background: #6dc97a;
  color: #0e0e0c;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s, transform 0.1s;
}
.mp-chat-send:hover { opacity: 0.9; }
.mp-chat-send:active { transform: scale(0.97); }
.mp-chat-send:disabled { opacity: 0.4; cursor: not-allowed; }

.mp-footer-hint {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #6a6862;
  text-align: center;
  padding: 8px 16px 12px;
  background: #0e0e0c;
  border-top: 1px solid #2e2d29;
}
.mp-footer-hint a { color: #9a978f; border-bottom: 1px solid #2e2d29; }
.mp-footer-hint a:hover { color: #6dc97a; border-bottom-color: #6dc97a; }

@media (max-width: 600px) {
  .mp-chat-panel {
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    border: none;
  }
  .mp-chat-toggle { bottom: 16px; right: 16px; width: 54px; height: 54px; }
  .mp-chat-toggle svg { width: 22px; height: 22px; }
  .mp-msg { font-size: 14px; }
  .mp-msg.bot.welcome { font-size: 16px; }
}
`;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ---------- DOM ----------
  const toggle = document.createElement('button');
  toggle.className = 'mp-chat-toggle';
  toggle.setAttribute('aria-label', 'Open chat about Monish\'s work');
  toggle.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`;

  const panel = document.createElement('div');
  panel.className = 'mp-chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Chat about Monish\'s work');
  panel.innerHTML = `
    <div class="mp-chat-header">
      <div class="mp-chat-title">ASK ABOUT <strong>MONISH'S WORK</strong></div>
      <button class="mp-chat-close" aria-label="Close chat">✕</button>
    </div>
    <div class="mp-chat-messages" id="mp-msgs">
      <div class="mp-msg bot welcome">
        <span class="label">PORTFOLIO ASSISTANT</span>
        Ask me anything about the case studies — the work, the numbers, the trade-offs. I'll keep it grounded in the facts on this site.
        <div class="mp-suggestions">
          <button class="mp-sug-btn">What was the actual ROI on Recurring Buy?</button>
          <button class="mp-sug-btn">How did the Referrals program scale during crypto winter?</button>
          <button class="mp-sug-btn">Why build the experimentation platform in-house?</button>
          <button class="mp-sug-btn">What are Monish's five operating principles?</button>
        </div>
      </div>
    </div>
    <form class="mp-chat-form" id="mp-form">
      <input class="mp-chat-input" id="mp-input" type="text" placeholder="Type a question…" autocomplete="off" maxlength="600" />
      <button class="mp-chat-send" type="submit" aria-label="Send">→</button>
    </form>
    <div class="mp-footer-hint">
      AI ANSWERS. PREFER DIRECT? <a href="mailto:monishsp@gmail.com">EMAIL MONISH</a>
    </div>
  `;

  document.body.appendChild(toggle);
  document.body.appendChild(panel);

  // ---------- BEHAVIOR ----------
  const msgsEl = panel.querySelector('#mp-msgs');
  const form = panel.querySelector('#mp-form');
  const input = panel.querySelector('#mp-input');
  const sendBtn = panel.querySelector('.mp-chat-send');
  const closeBtn = panel.querySelector('.mp-chat-close');

  const history = []; // Array of {role, content}

  function open() {
    panel.classList.add('open');
    toggle.classList.add('hidden');
    setTimeout(() => input.focus(), 150);
  }
  function close() {
    panel.classList.remove('open');
    toggle.classList.remove('hidden');
  }
  toggle.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) close();
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function renderMarkdown(text) {
    // 1) Escape first
    let s = escapeHtml(String(text || ''));

    // 2) Inline formatting (bold/italic/code) — bold before italic to avoid greedy single-* matches
    s = s.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*\w])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
    s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>');

    // 3) Linkify (emails, URLs, root-relative paths)
    s = s.replace(/(\b[\w.+-]+@[\w-]+\.[\w.-]+)/g, '<a href="mailto:$1">$1</a>');
    s = s.replace(/(\bhttps?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    s = s.replace(/(^|[\s(])(\/[a-z0-9][a-z0-9\-\/]*)/gi, (m, pre, p) => `${pre}<a href="${p}">${p}</a>`);

    // 4) Block-level: split into paragraphs by blank lines, detect lists per block
    const blocks = s.split(/\n\s*\n/);
    const html = blocks.map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean);

      // Numbered list (every line starts with "N.")
      if (lines.length > 1 && lines.every(l => /^\d+\.\s+/.test(l))) {
        return '<ol>' + lines.map(l => '<li>' + l.replace(/^\d+\.\s+/, '') + '</li>').join('') + '</ol>';
      }

      // Bullet list (every line starts with "- " or "* ")
      if (lines.length > 1 && lines.every(l => /^[-*]\s+/.test(l))) {
        return '<ul>' + lines.map(l => '<li>' + l.replace(/^[-*]\s+/, '') + '</li>').join('') + '</ul>';
      }

      // Mixed: single-line list (one item only)
      if (lines.length === 1 && /^(\d+\.|[-*])\s+/.test(lines[0])) {
        const isNumbered = /^\d+\./.test(lines[0]);
        const tag = isNumbered ? 'ol' : 'ul';
        return `<${tag}><li>` + lines[0].replace(/^(\d+\.|[-*])\s+/, '') + `</li></${tag}>`;
      }

      // Regular paragraph: single newlines → <br>
      return '<p>' + lines.join('<br>') + '</p>';
    }).join('');

    return html;
  }

  function addMsg(role, content, opts = {}) {
    const div = document.createElement('div');
    div.className = `mp-msg ${role}`;
    if (role === 'bot' && opts.html) div.innerHTML = renderMarkdown(content);
    else div.textContent = content;
    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return div;
  }
  function addLoading() {
    const div = document.createElement('div');
    div.className = 'mp-msg bot loading';
    div.innerHTML = '<span></span><span></span><span></span>';
    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return div;
  }
  function setSending(v) {
    sendBtn.disabled = v;
    input.disabled = v;
  }

  async function send(content) {
    content = content.trim();
    if (!content) return;

    // Clear welcome message + suggestions on first send
    const welcome = msgsEl.querySelector('.mp-msg.welcome');
    if (welcome) welcome.remove();

    addMsg('user', content);
    history.push({ role: 'user', content });
    input.value = '';
    setSending(true);
    const loadingEl = addLoading();

    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history })
      });
      const data = await r.json().catch(() => ({}));
      loadingEl.remove();

      if (r.ok && data.message) {
        history.push({ role: 'assistant', content: data.message });
        addMsg('bot', data.message, { html: true });
      } else {
        const err = data?.error || 'Something went wrong.';
        addMsg('bot', `I had trouble answering that. ${err === 'Message too long — keep it under 600 characters.' ? err : 'Try emailing Monish directly at monishsp@gmail.com.'}`, { html: true });
      }
    } catch (e) {
      loadingEl.remove();
      addMsg('bot', 'Connection error. Try again, or email Monish at monishsp@gmail.com.', { html: true });
    } finally {
      setSending(false);
      input.focus();
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    send(input.value);
  });

  // Suggestion buttons
  msgsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.mp-sug-btn');
    if (btn) send(btn.textContent);
  });
})();
