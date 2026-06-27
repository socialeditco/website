import { brand, sectionImages } from './content.js';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

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

function plate(key, alt, classes = 'brand-plate', loading = 'lazy') {
  const item = sectionImages[key];
  return `<img class="${classes}" src="${esc(item.src)}" data-fallback="${esc(item.fallback)}" alt="${esc(alt)}" loading="${loading}" decoding="async" />`;
}

function render() {
  app.innerHTML = `
    <div class="page asset-led">
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
        <section class="asset-section hero-asset" id="top" aria-labelledby="hero-heading">
          <h1 class="sr-only" id="hero-heading">Your socials, edited.</h1>
          <div class="asset-frame wide reveal">${plate('hero', 'Social Edit Co. hero design reading your socials, edited.', 'brand-plate', 'eager')}</div>
          <div class="container asset-actions reveal"><a class="btn" href="#contact">Let's Chat</a><a class="btn ghost" href="#packages">View The Edits</a></div>
        </section>

        <section class="asset-section" id="services" aria-labelledby="services-heading">
          <h2 class="sr-only" id="services-heading">Social media marketing that fits your brand.</h2>
          <div class="asset-frame reveal">${plate('services', 'Social media marketing that fits your brand with content creation, captions, marketing strategy, and brand consistency.')}</div>
        </section>

        <section class="asset-section packages-asset" id="packages" aria-labelledby="packages-heading">
          <div class="container package-intro reveal"><p class="eyebrow">Monthly packages</p><h2 class="serif-title" id="packages-heading">The Edits</h2></div>
          <div class="asset-stack"><div class="asset-frame reveal">${plate('fullEdit', 'The Full Edit monthly package, $695 per month, 24 custom-designed posts monthly.')}</div><div class="asset-frame reveal">${plate('signature', 'The Signature Edit monthly package, $495 per month, 15 custom-designed posts monthly.')}</div></div>
        </section>

        <section class="asset-section" aria-labelledby="visibility-heading"><h2 class="sr-only" id="visibility-heading">Visibility drives growth.</h2><div class="asset-frame reveal">${plate('visibility', 'Visibility drives growth through strategic, consistent content.')}</div></section>
        <section class="asset-section" aria-labelledby="presence-heading"><h2 class="sr-only" id="presence-heading">A digital presence worth following.</h2><div class="asset-frame reveal">${plate('presence', 'A digital presence worth following with branded content direction and strategy.')}</div></section>
        <section class="asset-section" id="work" aria-labelledby="work-heading"><h2 class="sr-only" id="work-heading">Social Edit Co. examples.</h2><div class="asset-frame reveal">${plate('examples', 'The Edits portfolio examples showing branded social media design samples.')}</div></section>
        <section class="asset-section" id="about" aria-labelledby="about-heading"><h2 class="sr-only" id="about-heading">About Amy.</h2><div class="asset-frame reveal">${plate('amy', 'About Amy, owner and creative director behind Social Edit Co.')}</div></section>

        <section class="asset-section cta-asset" id="contact" aria-labelledby="contact-heading">
          <h2 class="sr-only" id="contact-heading">Ready to elevate your social media?</h2>
          <div class="asset-frame reveal">${plate('cta', 'Ready to elevate your social media? Strategic content, elevated branding, real results for your business.')}</div>
          <div class="container form-shell reveal">
            <form class="contact-form" data-form>
              <label>Name *<input name="name" autocomplete="name" required /></label>
              <label>Business<input name="business" autocomplete="organization" /></label>
              <label>Email *<input name="email" type="email" autocomplete="email" required /></label>
              <label>Interested in<select name="package"><option>Not sure yet</option><option>The Signature Edit - $495/month</option><option>The Full Edit - $695/month</option></select></label>
              <label class="full">What are you looking for?<textarea name="message" rows="5" placeholder="Tell Amy what your business needs help with."></textarea></label>
              <div class="form-row"><p data-status role="status" aria-live="polite"></p><button class="btn" type="submit">Send Inquiry</button></div>
            </form>
          </div>
        </section>
      </main>

      <footer class="footer footer-asset"><div class="asset-frame footer-frame reveal">${plate('footer', 'Social Edit Co. footer with email, website, phone, and Instagram handle.')}</div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${brand.name}</span><span>Service-area business · contact-only</span></div></footer>
    </div>`;
}

function initImageFallbacks() {
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      const fallback = img.getAttribute('data-fallback');
      if (fallback && img.src !== fallback) img.src = fallback;
    }, { once: true });
  });
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
  if (reducedMotion || !gsap || !ScrollTrigger) return;
  gsap.utils.toArray('.asset-frame, .asset-actions, .package-intro, .form-shell').forEach((el) => {
    gsap.from(el, { opacity: 0, y: 36, scale: 0.985, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } });
  });
}

render();
initImageFallbacks();
initMenu();
initForm();
initMotion();
