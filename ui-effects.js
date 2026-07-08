// ============================================================
// Shared UI effects for the symposium site:
//  - a short synthesized click sound (Web Audio API — no audio file)
//  - a neon triangular custom cursor with an electric zap effect on
//    every click, anywhere on the page
//  - a hacker/terminal-style full-page boot sequence that plays on
//    the loading screen before it fades out
// Include with <script src="ui-effects.js"></script> on any page.
// A page just needs: <div class="loading-screen" id="loadingScreen">
//   <div class="terminal-boot"><pre id="bootLines"></pre>
//   <span class="boot-cursor">▌</span></div></div>
// ============================================================
(function () {
  let audioCtx;

  function getAudioCtx() {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function playClickSound() {
    try {
      const ctx = getAudioCtx();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(760, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(360, ctx.currentTime + 0.09);
      g.gain.setValueAtTime(0.09, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.14);
    } catch (e) {
      // Web Audio unavailable — fail silently, sound is a nice-to-have.
    }
  }

  // -------- cybernetic boot sound: a short synthesized power-up sweep
  // plus a couple of digital "blip" pulses — no audio file needed,
  // played once when the full first-visit boot sequence starts. --------
  function playCyberBootSound() {
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;

      // low-to-high frequency sweep (the "power-up" core)
      const sweep = ctx.createOscillator();
      const sweepGain = ctx.createGain();
      sweep.type = "sawtooth";
      sweep.frequency.setValueAtTime(90, now);
      sweep.frequency.exponentialRampToValueAtTime(680, now + 0.9);
      sweepGain.gain.setValueAtTime(0.0001, now);
      sweepGain.gain.exponentialRampToValueAtTime(0.05, now + 0.15);
      sweepGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);

      // a subtle detuned layer for a synthetic/robotic edge
      const layer = ctx.createOscillator();
      const layerGain = ctx.createGain();
      layer.type = "square";
      layer.frequency.setValueAtTime(95, now);
      layer.frequency.exponentialRampToValueAtTime(690, now + 0.9);
      layerGain.gain.setValueAtTime(0.0001, now);
      layerGain.gain.exponentialRampToValueAtTime(0.02, now + 0.15);
      layerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2200, now);

      sweep.connect(sweepGain);
      layer.connect(layerGain);
      sweepGain.connect(filter);
      layerGain.connect(filter);
      filter.connect(ctx.destination);

      sweep.start(now);
      sweep.stop(now + 0.95);
      layer.start(now);
      layer.stop(now + 0.95);

      // two crisp digital blips, timed to land near "connection established"
      // and "access granted" in the boot text
      [0.55, 1.2].forEach((t) => {
        const blip = ctx.createOscillator();
        const blipGain = ctx.createGain();
        blip.type = "square";
        blip.frequency.setValueAtTime(1200, now + t);
        blip.frequency.exponentialRampToValueAtTime(1900, now + t + 0.05);
        blipGain.gain.setValueAtTime(0.0001, now + t);
        blipGain.gain.exponentialRampToValueAtTime(0.045, now + t + 0.01);
        blipGain.gain.exponentialRampToValueAtTime(0.0001, now + t + 0.09);
        blip.connect(blipGain);
        blipGain.connect(ctx.destination);
        blip.start(now + t);
        blip.stop(now + t + 0.09);
      });
    } catch (e) {
      // Web Audio unavailable — fail silently, sound is a nice-to-have.
    }
  }

  function spawnSparkles(x, y) {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "ui-spark";
      const angle = ((Math.PI * 2) / count) * i + Math.random() * 0.4;
      const dist = 24 + Math.random() * 20;
      s.style.setProperty("--dx", Math.cos(angle) * dist + "px");
      s.style.setProperty("--dy", Math.sin(angle) * dist + "px");
      s.style.left = x + "px";
      s.style.top = y + "px";
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    }
  }

  // -------- neon electric zap, fired on every click anywhere on the page --------
  function spawnElectricBurst(x, y) {
    // central flash ring
    const ring = document.createElement("span");
    ring.className = "ui-electric-ring";
    ring.style.left = x + "px";
    ring.style.top = y + "px";
    document.body.appendChild(ring);
    ring.addEventListener("animationend", () => ring.remove());

    // jagged lightning bolts flying outward
    const boltCount = 6;
    for (let i = 0; i < boltCount; i++) {
      const bolt = document.createElement("span");
      bolt.className = "ui-electric-bolt";
      const angle = ((Math.PI * 2) / boltCount) * i + Math.random() * 0.5;
      const dist = 30 + Math.random() * 26;
      bolt.style.setProperty("--dx", Math.cos(angle) * dist + "px");
      bolt.style.setProperty("--dy", Math.sin(angle) * dist + "px");
      bolt.style.setProperty("--rot", (Math.random() * 360) + "deg");
      bolt.style.left = x + "px";
      bolt.style.top = y + "px";
      document.body.appendChild(bolt);
      bolt.addEventListener("animationend", () => bolt.remove());
    }
  }

  const EFFECT_SELECTOR = ".btn, .cat-btn, .global-menu-toggle, .drawer-flip, .drawer-close";

  document.addEventListener("click", (e) => {
    // Electric zap fires for any click on the page.
    spawnElectricBurst(e.clientX, e.clientY);

    const el = e.target.closest(EFFECT_SELECTOR);
    if (!el) return;
    playClickSound();
    const rect = el.getBoundingClientRect();
    spawnSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  // -------- neon triangular custom cursor (injected so every page shares it) --------
  function buildCursorUrl(svg) {
    return "url(\"data:image/svg+xml," + encodeURIComponent(svg) + "\")";
  }

  const triCursor = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
    <defs><filter id="g" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="1.4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter></defs>
    <polygon points="2,2 2,25 18,17" fill="#5B8DEF" stroke="#BFE3FF" stroke-width="1.3" filter="url(#g)"/>
  </svg>`;

  const triCursorHover = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
    <defs><filter id="g2" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter></defs>
    <polygon points="2,2 2,25 18,17" fill="#FFC857" stroke="#FFF3D6" stroke-width="1.3" filter="url(#g2)"/>
  </svg>`;

  const cursorStyle = document.createElement("style");
  cursorStyle.textContent = `
    html, body {
      cursor: ${buildCursorUrl(triCursor)} 2 2, auto;
    }
    a, button, .btn, .cat-btn, .global-menu-toggle, .drawer-flip, .drawer-close,
    input, select, textarea, [role="button"], summary, label {
      cursor: ${buildCursorUrl(triCursorHover)} 2 2, pointer;
    }

    .ui-electric-ring{
      position:fixed; width:10px; height:10px; margin:-5px 0 0 -5px;
      border-radius:50%; pointer-events:none; z-index:400;
      border:2px solid #BFE3FF;
      box-shadow:0 0 8px 2px #5B8DEF, 0 0 18px 4px rgba(91,141,239,0.6);
      animation:ui-electric-ring-anim 0.45s ease-out forwards;
    }
    @keyframes ui-electric-ring-anim{
      0%{ transform:scale(0.3); opacity:1; }
      100%{ transform:scale(4.5); opacity:0; }
    }

    .ui-electric-bolt{
      position:fixed; width:3px; height:16px; margin:-8px 0 0 -1.5px;
      pointer-events:none; z-index:400;
      background:linear-gradient(180deg, #EAF4FF, #5B8DEF 55%, transparent);
      clip-path:polygon(50% 0%, 100% 35%, 60% 40%, 100% 100%, 0% 55%, 45% 50%);
      box-shadow:0 0 6px 1px #5B8DEF, 0 0 12px 2px rgba(91,141,239,0.7);
      transform:rotate(var(--rot,0deg));
      animation:ui-electric-bolt-anim 0.5s ease-out forwards;
    }
    @keyframes ui-electric-bolt-anim{
      0%{ transform:translate(0,0) rotate(var(--rot,0deg)) scale(1); opacity:1; }
      100%{ transform:translate(var(--dx),var(--dy)) rotate(var(--rot,0deg)) scale(0.3); opacity:0; }
    }

    /* -------- hacker/terminal boot loading screen -------- */
    .loading-screen{
      position:fixed; inset:0; z-index:999;
      background:#000;
      display:flex; align-items:center; justify-content:center;
      transition:opacity 0.5s ease, visibility 0.5s ease;
      overflow:hidden;
    }
    .loading-screen.hidden{ opacity:0; visibility:hidden; pointer-events:none; }
    .loading-screen::before{
      content:""; position:absolute; inset:0; pointer-events:none;
      background:repeating-linear-gradient(
        0deg, rgba(91,141,239,0.05) 0px, rgba(91,141,239,0.05) 1px,
        transparent 1px, transparent 3px
      );
      animation:ui-scanlines 6s linear infinite;
    }
    @keyframes ui-scanlines{ 0%{ background-position:0 0; } 100%{ background-position:0 120px; } }
    .terminal-boot{
      width:min(560px, 88vw); color:#5B8DEF;
      font-family:'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size:0.95rem; line-height:1.7;
      text-shadow:0 0 6px rgba(91,141,239,0.65);
    }
    .terminal-boot pre{
      margin:0; white-space:pre-wrap; word-break:break-word;
    }
    .terminal-boot .boot-cursor{
      display:inline-block; margin-left:2px;
      animation:ui-cursor-blink 0.9s steps(1) infinite;
    }
    @keyframes ui-cursor-blink{ 50%{ opacity:0; } }
    .terminal-boot .boot-ok{ color:#7CF29C; }
    .terminal-boot .boot-warn{ color:#FFC857; }

    /* -------- hamburger events drawer: scrollable, scrollbar hidden -------- */
    .events-drawer{
      scrollbar-width:none;       /* Firefox */
      -ms-overflow-style:none;    /* old Edge/IE */
    }
    .events-drawer::-webkit-scrollbar{ display:none; } /* Chrome/Safari */
  `;
  document.head.appendChild(cursorStyle);

  // -------- hacker-style boot sequence, then fade the loading screen --------
  const BOOT_LINES = [
    "> connecting to AURCM Madurai server...",
    "> connection established",
    "> checking new events...",
    "> new event found",
    "> access granted",
    "> redirecting..."
  ];

  function typeLine(container, text, cb) {
    const lineEl = document.createElement("div");
    container.appendChild(lineEl);
    let i = 0;
    (function step() {
      lineEl.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(step, 14 + Math.random() * 18);
      } else {
        cb();
      }
    })();
  }

  function runBootSequence(onDone) {
    const bootLines = document.getElementById("bootLines");
    if (!bootLines) { onDone(); return; }
    let idx = 0;
    (function nextLine() {
      if (idx >= BOOT_LINES.length) {
        setTimeout(onDone, 300);
        return;
      }
      typeLine(bootLines, BOOT_LINES[idx], () => {
        idx++;
        setTimeout(nextLine, 160);
      });
    })();
  }

  // Persists across tabs/sessions (localStorage) so the typed terminal
  // boot sequence + cybernetic sound only ever plays the very first time
  // someone reaches the site. Every later page (including normal site
  // navigation between pages) just shows the plain loading screen — no
  // typing animation, no boot sound — and fades out quickly.
  const BOOT_SEEN_KEY = "vertex26_boot_seen";

  function hideLoadingScreen() {
    const el = document.getElementById("loadingScreen");
    if (!el) return;

    let firstVisit = false;
    try {
      firstVisit = !window.localStorage.getItem(BOOT_SEEN_KEY);
    } catch (e) {
      // localStorage unavailable (e.g. private mode) — treat as not-first-visit
      // so we fail safe to the quick loading screen everywhere.
      firstVisit = false;
    }

    if (firstVisit) {
      try { window.localStorage.setItem(BOOT_SEEN_KEY, "1"); } catch (e) {}
      playCyberBootSound();
      runBootSequence(() => {
        el.classList.add("hidden");
      });
    } else {
      // Quick, silent loading screen only — no terminal typing, no sound.
      setTimeout(() => {
        el.classList.add("hidden");
      }, 450);
    }
  }

  window.UIEffects = { playClickSound, playCyberBootSound, spawnSparkles, spawnElectricBurst, hideLoadingScreen };

  if (document.readyState === "complete") {
    hideLoadingScreen();
  } else {
    window.addEventListener("load", hideLoadingScreen);
  }
})();
