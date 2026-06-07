/* ═══════════════════════════════════════════════════
   ROBOTAXI UK — app.js
   Core: Preloader, Nav, Cursor, Particles,
         Counters, Reveal, Theme, Scroll
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ────────────────────────────────────────────────
     PRELOADER
  ──────────────────────────────────────────────── */
  function initPreloader() {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    window.addEventListener('load', () => {
      setTimeout(() => pre.classList.add('hidden'), 2000);
    });
  }

  /* ────────────────────────────────────────────────
     CUSTOM CURSOR
  ──────────────────────────────────────────────── */
  function initCursor() {
    const dot     = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');
    if (!dot || !outline) return;

    let mx = 0, my = 0;
    let ox = 0, oy = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });

    function animOutline() {
      ox += (mx - ox) * 0.12;
      oy += (my - oy) * 0.12;
      outline.style.left = ox + 'px';
      outline.style.top  = oy + 'px';
      requestAnimationFrame(animOutline);
    }
    animOutline();

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      outline.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      outline.style.opacity = '0.5';
    });
  }

  /* ────────────────────────────────────────────────
     NAVBAR SCROLL BEHAVIOUR
  ──────────────────────────────────────────────── */
  function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
      });
      // Close on link click
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('open');
        });
      });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          links.forEach(l => {
            l.classList.toggle('active-link', l.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.45 });

    sections.forEach(s => observer.observe(s));
  }

  /* ────────────────────────────────────────────────
     HERO PARTICLES
  ──────────────────────────────────────────────── */
  function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = window.innerWidth < 700 ? 20 : 45;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.style.cssText = `
        position: absolute;
        width: ${Math.random() > 0.7 ? 2 : 1}px;
        height: ${Math.random() > 0.7 ? 2 : 1}px;
        background: ${Math.random() > 0.6 ? 'var(--cyan)' : 'var(--green)'};
        border-radius: 50%;
        top:  ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${0.2 + Math.random() * 0.6};
        animation: particleFloat ${4 + Math.random() * 8}s ${Math.random() * 6}s ease-in-out infinite alternate;
      `;
      container.appendChild(p);
    }

    // Inject keyframes once
    if (!document.getElementById('particle-keyframes')) {
      const style = document.createElement('style');
      style.id = 'particle-keyframes';
      style.textContent = `
        @keyframes particleFloat {
          from { transform: translate(0, 0); opacity: 0.1; }
          to   { transform: translate(${20}px, ${-30}px); opacity: 0.8; }
        }
      `;
      // Multiple random animations
      const frames = Array.from({ length: 8 }, (_, i) => {
        const x = (Math.random() - 0.5) * 60;
        const y = (Math.random() - 0.5) * 60;
        return `
          @keyframes particleFloat${i} {
            0%   { transform: translate(0, 0); opacity: 0.15; }
            50%  { opacity: 0.8; }
            100% { transform: translate(${x}px, ${y}px); opacity: 0.15; }
          }
        `;
      }).join('');
      style.textContent = frames;
      document.head.appendChild(style);

      // Re-assign random animations to particles
      container.querySelectorAll('div').forEach((p, i) => {
        p.style.animation = `particleFloat${i % 8} ${4 + Math.random() * 8}s ${Math.random() * 4}s ease-in-out infinite alternate`;
      });
    }
  }

  /* ────────────────────────────────────────────────
     COUNTER ANIMATION
  ──────────────────────────────────────────────── */
  function initCounters() {
    const counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const dur    = 1800;
        const step   = 16;
        const inc    = target / (dur / step);
        let current  = 0;

        const timer = setInterval(() => {
          current += inc;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current);
        }, step);

        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  /* ────────────────────────────────────────────────
     SCROLL REVEAL
  ──────────────────────────────────────────────── */
  function initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    // Observe dynamically-added .reveal elements too
    function observeAll() {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el);
      });
    }

    observeAll();

    // Re-run after services are rendered (slight delay)
    setTimeout(observeAll, 500);
  }

  /* ────────────────────────────────────────────────
     THEME TOGGLE
  ──────────────────────────────────────────────── */
  function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const body   = document.body;
    const stored = localStorage.getItem('rt-theme') || 'dark';
    body.setAttribute('data-theme', stored);

    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = body.getAttribute('data-theme');
        const next    = current === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', next);
        localStorage.setItem('rt-theme', next);
      });
    }
  }

  /* ────────────────────────────────────────────────
     SCROLL TO TOP
  ──────────────────────────────────────────────── */
  function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ────────────────────────────────────────────────
     SMOOTH ANCHOR SCROLL (offset for fixed nav)
  ──────────────────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ────────────────────────────────────────────────
     SECTION SECTION-TAG STAGGER
  ──────────────────────────────────────────────── */
  function initSectionAnimations() {
    const headers = document.querySelectorAll('.section-header');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    headers.forEach(h => {
      h.style.opacity = '0';
      h.style.transform = 'translateY(20px)';
      h.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(h);
    });
  }

  /* ────────────────────────────────────────────────
     VEHICLE DATA READOUT CYCLING
  ──────────────────────────────────────────────── */
  function initVehicleReadout() {
    const lines = document.querySelectorAll('.readout-line');
    if (!lines.length) return;

    const routes = [
      ['◉ AUTO PILOT ENGAGED', '◎ ROUTE: LONDON → HEATHROW', '◈ ETA: 23 MIN'],
      ['◉ AUTO PILOT ENGAGED', '◎ ROUTE: MANCHESTER CTR → AIRPORT', '◈ ETA: 18 MIN'],
      ['◉ AUTO PILOT ENGAGED', '◎ ROUTE: BIRMINGHAM → COVENTRY', '◈ ETA: 31 MIN'],
      ['◉ DELIVERY MODE', '◎ PARCEL: 3.2KG EXPRESS', '◈ STOPS: 4 REMAINING']
    ];
    let idx = 0;

    setInterval(() => {
      idx = (idx + 1) % routes.length;
      lines.forEach((l, i) => {
        l.style.opacity = '0';
        setTimeout(() => {
          l.textContent = routes[idx][i] || '';
          l.style.opacity = '1';
        }, 200);
      });
    }, 3500);
  }

  /* ────────────────────────────────────────────────
     FLOATING WHATSAPP TOOLTIP
  ──────────────────────────────────────────────── */
  function initFloatingWA() {
    const btn = document.querySelector('.whatsapp-float');
    if (!btn) return;

    const tooltip = document.createElement('span');
    tooltip.textContent = 'Chat with us!';
    tooltip.style.cssText = `
      position: absolute;
      right: 72px; top: 50%; transform: translateY(-50%);
      background: #25D366; color: #fff;
      font-size: 0.8rem; font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      white-space: nowrap;
      opacity: 0; pointer-events: none;
      transition: opacity 0.3s;
      font-family: var(--font-body);
    `;
    btn.style.position = 'relative';
    btn.appendChild(tooltip);

    btn.addEventListener('mouseenter', () => tooltip.style.opacity = '1');
    btn.addEventListener('mouseleave', () => tooltip.style.opacity = '0');

    // Show tooltip hint after 5 seconds
    setTimeout(() => {
      tooltip.style.opacity = '1';
      setTimeout(() => tooltip.style.opacity = '0', 3000);
    }, 5000);
  }

  /* ────────────────────────────────────────────────
     INIT ALL
  ──────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCursor();
    initNavbar();
    initParticles();
    initCounters();
    initReveal();
    initTheme();
    initScrollTop();
    initSmoothScroll();
    initSectionAnimations();
    initVehicleReadout();
    initFloatingWA();

    // Re-run reveal after services render
    setTimeout(initReveal, 600);
  });

})();
