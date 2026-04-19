## 2025-05-15 - Content Security Policy for Leaflet and CDN
**Vulnerability:** Potential for Cross-Site Scripting (XSS) and data exfiltration due to missing security headers/meta tags in a map-heavy application.
**Learning:** Standard restrictive CSPs break Leaflet maps and external image CDNs. Tile providers (openstreetmap.org) and image proxies (i0.wp.com) must be explicitly whitelisted in `img-src` and `connect-src`. Vite's development server also requires `ws:`/`wss:` in `connect-src` and `'unsafe-inline'` for scripts/styles.
**Prevention:** Implement a `<meta>` CSP tag that balances strictness with the specific requirements of the project's third-party integrations (Maps, Fonts, CDNs).
