# Social Edit Co. Website

Editorial Vite + GSAP landing page for Social Edit Co.

## Stack

- Vite
- Vanilla JavaScript
- GSAP + ScrollTrigger
- Static deployment on Vercel
- Google Apps Script-ready inquiry form

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel settings:

- Build command: `npm run build`
- Output directory: `dist`

## Form setup

The form posts to `window.SEC_FORM_ENDPOINT` in `index.html`.

1. Create a Google Sheet.
2. Open Extensions > Apps Script.
3. Paste `apps-script/code.gs` into the Apps Script editor.
4. Deploy as a Web App.
5. Execute as: Me.
6. Access: Anyone.
7. Paste the deployed Web App URL into `index.html`.

Until the endpoint is added, the form opens a prefilled email to Amy.

## Live packages

- The Signature Edit — $495/month
- The Full Edit — $695/month

## Business display

The site is written as a service-area/contact-only business. No street address is displayed.
