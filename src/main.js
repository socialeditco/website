import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import { brand, media, services, packages, proofPoints } from './content.js';

gsap.registerPlugin(ScrollTrigger);

const app = document.querySelector('#app');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav = [
  ['#services', 'Services'],
  ['#packages', 'The Edits'],
  ['#work', 'Portfolio'],
  ['#about', 'About'],
  ['#contact', 'Contact'],
];

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const logo = `<span class="logo"><span>Social</span><strong>Edit<i>co.</i></strong></span>`;

function render() {
  app.innerHTML = `
    <div class="page">
      <div class="texture" aria-hidden="true"></div>
      <header class="site-header" data-header>
        <a href="#top" class="logo-link" aria-label="Social Edit Co. home">${logo}</a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join('')}
          <a class="btn" href="#contact">Let's Chat</a>
        </nav>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle><span></span><span></span><span></span></button>
      </header>

      <div class="mobile-menu" data-mobile-menu aria-hidden="true">
        <nav>${nav.map(([href, label]) => `<a href="${href}" data-mobile-link>${label}</a>`).join('')}</nav>
      </div>

      <main id="main">
        <section class="hero" id="top">
          <div class="container hero-grid">
            <div class="hero-copy">
              <p class="eyebrow reveal">Social media marketing</p>
              <h1 class="display hero-title"><span>Your</span><span>socials,</span><span>edited.</span></h1>
              <p class="hero-text reveal">Strategic content, elevated branding, and consistent social media designed to keep your business visible.</p>
              <div class="actions reveal"><a class="btn" href="#contact">Let's Chat</a><a class="btn ghost" href="#packages">View The Edits</a></div>
              <div class="mini-proof reveal"><span>Strategic content</span><span>Elevated branding</span><span>Monthly consistency</span></div>
            </div>
            <div class="hero-art" aria-hidden="true">
              <div class="visual visual-main float-slow"><img src="${media.portfolio[0].src}" alt="" /></div>
              <div class="visual visual-note float-fast"><h2>Brand<br><em>presence</em></h2><p>For businesses that need to look active, aligned, and worth following.</p></div>
              <div class="phone float-phone"><div class="phone-screen"><strong>Social<br>Edit<br>Co.</strong><div>${Array.from({ length: 9 }, () => '<span></span>').join('')}</div></div></div>
              <div class="ghost-word">Edited</div>
            </div>
          </div>
        </section>

        <section class="section" id="services">
          <div class="container split">
            <div class="reveal"><p class="eyebrow">What I do</p><h2 class="serif-title">Social media marketing that fits <em>your</em> brand.</h2><p class="copy">From business to business, no two brands need the same voice. Social Edit Co. creates content that helps you stay visible, recognizable, and consistent online.</p></div>
            <div class="service-panel reveal"><ul>${services.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></div>
          </div>
        </section>

        <section class="packages" id="packages">
          <div class="container">
            <div class="section-head reveal"><div><p class="eyebrow">Monthly package</p><h2 class="serif-title">The Edits</h2></div><p class="copy">Strategic, brand-aligned content designed to keep your business visible, consistent, and engaging from month to month.</p></div>
            <div class="package-grid">${packages.map((plan) => `
              <article class="package-card ${plan.theme} ${plan.featured ? 'featured' : ''}">
                <div><h3>${esc(plan.name)}</h3><div class="price"><strong>${esc(plan.price)}</strong><span>${esc(plan.cadence)}</span></div><p class="posts">${esc(plan.posts)}</p><p>${esc(plan.tone)}</p></div>
                <ul>${plan.features.map((feature) => `<li>${esc(feature)}</li>`).join('')}</ul>
              </article>`).join('')}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container why-grid"><div class="reveal"><p class="eyebrow">Why it matters</p><h2 class="serif-title">Visibility drives growth</h2></div><p class="copy reveal">Strategic, consistent content keeps businesses visible while turning online attention into meaningful growth. Your audience cannot remember a brand that keeps disappearing.</p></div>
          <div class="container proof-grid">${proofPoints.map((point) => `<article class="proof reveal-item"><h3>${esc(point.title)}</h3><p>${esc(point.body)}</p></article>`).join('')}</div>
        </section>

        <section class="section presence">
          <div class="container split reverse">
            <div class="reveal"><p class="eyebrow">Social presence</p><h2 class="serif-title">A digital presence <em>worth</em> following.</h2><p class="copy">Branding, content direction, strategy, and scheduling — so your page looks intentional before someone ever reaches out.</p></div>
            <div class="presence-art reveal" aria-hidden="true"><div class="phone big"><div class="phone-screen"><strong>The<br>Edit</strong></div></div><div class="tile t1">Editorial posts</div><div class="tile t2">Content direction</div><div class="tile t3">Captions</div></div>
          </div>
        </section>

        <section class="section portfolio" id="work">
          <div class="container section-head reveal"><div><p class="eyebrow">Portfolio</p><h2 class="serif-title">The difference is in the details.</h2></div><p class="copy">A brand should feel recognizable before anyone reads the caption. The grid, colors, type, and message all work together.</p></div>
          <ul class="container portfolio-grid">${media.portfolio.map((item) => `<li class="portfolio-item"><img src="${item.src}" alt="${esc(item.alt)}" loading="lazy" decoding="async" /><span>${esc(item.label)}</span></li>`).join('')}</ul>
        </section>

        <section class="section about" id="about">
          <div class="container split">
            <div class="reveal"><p class="eyebrow">About Amy</p><h2 class="serif-title">Hi, I'm Amy.</h2><p class="lead">I help businesses create elevated, consistent social media content that feels polished, modern, and on-brand.</p><p class="copy">From content concepts to captions, I handle the details so your business shows up consistently online. Social Edit Co. is built for business owners who want a stronger digital presence without adding another full-time job to their plate.</p></div>
            <div class="about-image reveal"><img src="${media.portrait}" alt="Amy Carpenter, founder of Social Edit Co." loading="lazy" decoding="async" /></div>
          </div>
        </section>

        <section class="cta" id="contact">
          <div class="container narrow"><p class="eyebrow center">Let's work together</p><h2 class="serif-title">Ready to elevate your social media?</h2><p class="copy center-copy">Strategic content. Elevated branding. Real results for your business.</p>
            <form class="contact-form reveal" data-form>
              <label>Name *<input name="name" autocomplete="name" required /></label>
              <label>Business<input name="business" autocomplete="organization" /></label>
              <label>Email *<input name="email" type="email" autocomplete="email" required /></label>
              <label>Interested in<select name="package"><option>Not sure yet</option><option>The Signature Edit - $495/month</option><option>The Full Edit - $695/month</option></select></label>
              <label class="full">What are you looking for?<textarea name="message" rows="5"></textarea></label>
              <div class="form-row"><p data-status role="status" aria-live="polite"></p><button class="btn" type="submit">Send Inquiry</button></div>
            </form>
          </div>
        </section>
      </main>

      <footer class="footer"><div class="container footer-grid"><div><div class="footer-logo">Social<br>Edit<em>co.</em></div><p>Social media marketing for businesses that want to stay visible, polished, and consistent online.</p></div><div class="footer-links"><a href="mailto:${brand.email}">${brand.email}</a><a href="#packages">View packages</a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${brand.name}</span><span>Service-area business · contact-only</span></div></footer>
    </div>`;
}

function initMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  const links = document.querySelectorAll('[data-mobile-link]');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  links.forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => event.key === 'Escape' && setOpen(false));
}

function initForm() {
  const form = document.querySelector('[data-form]');
  if (!form) return;
  const status = form.querySelector('[data-status]');
  const button = form.querySelector('button');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const payload = new URLSearchParams();
    payload.set('source', 'socialeditco.net');
    payload.set('submittedAt', new Date().toISOString());
    payload.set('userAgent', navigator.userAgent || '');
    for (const [key, value] of data.entries()) payload.set(key, value);
    button.disabled = true;
    button.textContent = 'Sending...';
    status.textContent = 'Sending your inquiry.';
    try {
      if (window.SEC_FORM_ENDPOINT) {
        await fetch(window.SEC_FORM_ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, body: payload });
        status.textContent = 'Inquiry sent. Amy will follow up soon.';
        form.reset();
      } else {
        const subject = encodeURIComponent('New Social Edit Co. inquiry');
        const body = encodeURIComponent(`Name: ${payload.get('name') || ''}\nBusiness: ${payload.get('business') || ''}\nEmail: ${payload.get('email') || ''}\nPackage: ${payload.get('package') || ''}\n\nMessage:\n${payload.get('message') || ''}`);
        window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
        status.textContent = 'Opening email. Add the Apps Script URL when the sheet is ready.';
      }
    } catch (error) {
      console.error(error);
      status.textContent = 'Something went wrong. Please email Amy directly.';
    } finally {
      button.disabled = false;
      button.textContent = 'Send Inquiry';
    }
  });
}

function initMotion() {
  const header = document.querySelector('[data-header]');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  if (reducedMotion) return;

  gsap.set('.hero-title span', { yPercent: 110 });
  gsap.set('.hero .reveal', { opacity: 0, y: 28 });
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to('.hero-title span', { yPercent: 0, duration: 1, stagger: 0.12 })
    .to('.hero .reveal', { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, '-=0.45')
    .from('.hero-art .visual, .hero-art .phone', { opacity: 0, y: 42, duration: 0.85, stagger: 0.1 }, '-=0.55');

  gsap.utils.toArray('.reveal').forEach((el) => {
    if (el.closest('.hero')) return;
    gsap.from(el, { opacity: 0, y: 42, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 84%', once: true } });
  });
  gsap.from('.package-card', { opacity: 0, y: 54, duration: 0.9, stagger: 0.14, ease: 'power3.out', scrollTrigger: { trigger: '.package-grid', start: 'top 80%', once: true } });
  gsap.from('.portfolio-item', { opacity: 0, y: 44, scale: 1.025, duration: 0.9, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.portfolio-grid', start: 'top 84%', once: true } });
  gsap.from('.reveal-item', { opacity: 0, y: 36, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.proof-grid', start: 'top 84%', once: true } });
  gsap.to('.float-slow', { y: -34, ease: 'none', scrollTrigger: { trigger: '.hero-art', start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
  gsap.to('.float-fast', { y: 46, ease: 'none', scrollTrigger: { trigger: '.hero-art', start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
  gsap.to('.float-phone', { y: -26, ease: 'none', scrollTrigger: { trigger: '.hero-art', start: 'top bottom', end: 'bottom top', scrub: 1.4 } });
}

render();
initMenu();
initForm();
initMotion();
