## 2026-04-12 - Content Security Policy for Vite/React with External Assets
**Vulnerability:** Risk of XSS and unauthorized resource loading in a frontend application.
**Learning:** In a Vite-based React app using Leaflet maps and Google Fonts, a meta-tag CSP must balance security with functionality by allowing `'unsafe-inline'` for styles (due to Vite's runtime injection and Google Fonts) and explicitly whitelisting tile providers (`*.tile.openstreetmap.org`) and image proxies (`i0.wp.com`).
**Prevention:** Implement a restrictive `default-src 'self'` and specifically whitelist external domains for `img-src`, `font-src`, and `style-src` while keeping `script-src` restricted to `'self'`.
