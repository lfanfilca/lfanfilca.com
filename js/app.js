/* ============================================================
   L FanfilCA — Studio Website JS
   Animations, scroll reveals, mobile nav, form handling
   ============================================================ */

(function () {
  "use strict";

  // -------- Mobile Nav Toggle --------
  const burger = document.querySelector(".nav-burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      links.classList.toggle("open", !expanded);
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        links.classList.remove("open");
      })
    );
  }

  // -------- Scroll Reveal --------
  const reveals = document.querySelectorAll(".reveal, .reveal-stagger");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // -------- Animated Counter --------
  const counters = document.querySelectorAll("[data-counter]");
  if ("IntersectionObserver" in window && counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target);
            co.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => co.observe(el));
  }
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute("data-counter"));
    const suffix = el.getAttribute("data-suffix") || "";
    const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // -------- Parallax (light) for hero animals --------
  const animals = document.querySelectorAll("[data-parallax]");
  if (animals.length && window.matchMedia("(min-width: 900px)").matches) {
    let raf = null;
    let mx = 0, my = 0;
    window.addEventListener("mousemove", (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(applyParallax);
    });
    function applyParallax() {
      raf = null;
      animals.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax") || "10");
        const tx = -mx * speed;
        const ty = -my * speed;
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    }
  }

  // -------- Contact Form --------
  const form = document.querySelector("#contact-form");
  if (form) {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.name || !data.email || !data.message) {
        showStatus("Please fill in all required fields.", "error");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        showStatus("Please enter a valid email address.", "error");
        return;
      }
      showStatus("Thanks! We'll get back to you within 1 business day. 🐼", "success");
      form.reset();
    });
    function showStatus(msg, type) {
      if (!status) return;
      status.textContent = msg;
      status.className = "form-status show " + type;
      setTimeout(() => status.classList.remove("show"), 6000);
    }
  }

  // -------- Smooth scroll for anchor links --------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // -------- Active TOC link (legal pages) --------
  const tocLinks = document.querySelectorAll(".legal-toc a[href^='#']");
  if (tocLinks.length) {
    const sections = Array.from(tocLinks)
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);
    if ("IntersectionObserver" in window) {
      const to = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const id = "#" + e.target.id;
              tocLinks.forEach((a) =>
                a.classList.toggle("active", a.getAttribute("href") === id)
              );
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      sections.forEach((s) => to.observe(s));
    }
  }

  // -------- Set current year in footer --------
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // -------- Floating animals random delay --------
  document.querySelectorAll(".floating-animal").forEach((el, i) => {
    el.style.animationDelay = (i * 0.4) + "s";
  });
})();
