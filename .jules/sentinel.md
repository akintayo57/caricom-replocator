## 2026-05-03 - External Resource Hardening via CSP
**Vulnerability:** XSS and Unauthorized Resource Loading.
**Learning:** The application depends on multiple external origins for essential functionality: Google Fonts for typography, OpenStreetMap for map tiles, and a specific WordPress CDN (`i0.wp.com`) for official representative photos. A restrictive CSP must account for these to avoid breaking the UI while still providing protection.
**Prevention:** Maintain a `Content-Security-Policy` that explicitly whitelists these trusted origins and uses `'self'` for all other resource types. Use `style-src 'unsafe-inline'` cautiously to support Vite/React runtime style injection.
