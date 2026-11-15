# Gal Sapir — Property Photography

A Hebrew, right-to-left editorial portfolio in ivory and muted gold. Buildless HTML, CSS, and JavaScript; no framework or build step required.

## Structure

- `dist/index.html` — semantic page sections and accessible native dialogs.
- `dist/styles.css` — numbered design, layout, and responsive sections.
- `dist/app.js` — portfolio data, filtering, lightbox, equipment, and contact setup.
- `dist/config.js` — verified public phone and WhatsApp settings.
- `dist/assets/` — optimized photographs, catalogue, licensed font, and web video.
- `server.mjs` — local preview server with video byte-range support.
- `.openai/hosting.json` — Sites project identity and static hosting declaration.

## Preview

Run `node server.mjs` and visit http://127.0.0.1:4173.
Run `node --check dist/app.js` for a syntax check.

## Contact setup

Set `phone` and `whatsapp` in `dist/config.js` to the verified business number: international digits only, no leading `+` or domestic zero. Without a verified number, contact actions honestly display a pending-details dialog rather than calling an invented number.

## Assets and factual accuracy

The portfolio uses Gal's supplied photographs and images extracted from the supplied PDF, with the overlaid gallery watermarks removed as requested. Equipment: Canon EOS R8, Canon RF 15–30mm, DJI Mic Mini, tripod, and Gal's updated DJI RS5 and drone. No drone model is assumed. The supplied MOV was converted to a full-length 720p H.264/AAC MP4, preserving its audio, with fast-start streaming. Original source files remain untouched.

## Release notes

Business phone and personal domain still require confirmation. GitHub Pages publication uses the isolated `/photography/` path to preserve the existing curtains site at the repository root.

