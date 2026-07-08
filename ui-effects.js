// ============================================================
// Shared UI effects for the symposium site: a short synthesized click
// sound (Web Audio API — no audio file needed) and a small sparkle
// burst, both triggered on any element matching `.btn, .cat-btn,
// .global-menu-toggle, .drawer-item`. Also a tiny helper to fade out
// the loading screen once the page is ready.
// Include with <script src="ui-effects.js"></script> on any page.
// ============================================================
(function () {
  let audioCtx;

  function playClickSound() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(760, audioCtx.currentTime);
      o.frequency.exponentialRampToValueAtTime(360, audioCtx.currentTime + 0.09);
      g.gain.setValueAtTime(0.09, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.14);
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      o.stop(audioCtx.currentTime + 0.14);
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

  const EFFECT_SELECTOR = ".btn, .cat-btn, .global-menu-toggle, .drawer-flip, .drawer-close";

  document.addEventListener("click", (e) => {
    const el = e.target.closest(EFFECT_SELECTOR);
    if (!el) return;
    playClickSound();
    const rect = el.getBoundingClientRect();
    spawnSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  function hideLoadingScreen() {
    const el = document.getElementById("loadingScreen");
    if (!el) return;
    setTimeout(() => el.classList.add("hidden"), 1700);
  }

  function runWin95Percent() {
    const percentEl = document.getElementById("win95Percent");
    if (!percentEl) return;
    let pct = 0;
    const iv = setInterval(() => {
      pct += Math.ceil(Math.random() * 15);
      if (pct >= 100) { pct = 100; clearInterval(iv); }
      percentEl.textContent = pct + "%";
    }, 160);
  }
  runWin95Percent();

  window.UIEffects = { playClickSound, spawnSparkles, hideLoadingScreen };

  if (document.readyState === "complete") {
    hideLoadingScreen();
  } else {
    window.addEventListener("load", hideLoadingScreen);
  }
})();
