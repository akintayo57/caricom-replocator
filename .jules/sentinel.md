## 2025-04-04 - Content Security Policy Implementation
**Vulnerability:** Missing Content Security Policy (CSP) headers or meta tags.
**Learning:** Without a CSP, the application was vulnerable to XSS and unauthorized data exfiltration. However, implementing a CSP in a Leaflet-based application requires specific allowances: `img-src` must include `data:` for marker icons and `https://*.tile.openstreetmap.org` for map tiles. `connect-src` also needs the tile provider URL.
**Prevention:** Always include a CSP meta tag in `index.html` from the start of the project, ensuring all external assets (Fonts, Maps) are explicitly whitelisted.
