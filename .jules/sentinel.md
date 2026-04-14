## 2026-04-14 - Content Security Policy for Leaflet and Google Fonts
**Vulnerability:** Absence of Content Security Policy (CSP) headers or meta tags, leaving the application vulnerable to Cross-Site Scripting (XSS) and data injection.
**Learning:** Leaflet maps require 'img-src' to include tile provider domains (e.g., `*.tile.openstreetmap.org`) and 'data:' for certain marker types. Google Fonts requires 'style-src' for the CSS and 'font-src' for the actual font files.
**Prevention:** Always implement a strict CSP that only allows trusted domains for scripts, styles, fonts, and images. Use 'self' and 'unsafe-inline' (where necessary for dev/build tools) while gradually tightening the policy.
