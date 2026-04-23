## 2026-04-23 - Content Security Policy Implementation
**Vulnerability:** Lack of Content Security Policy (CSP) exposed the application to potential XSS and unauthorized resource loading.
**Learning:** The application relies on multiple external domains: Google Fonts (fonts.googleapis.com/fonts.gstatic.com), OpenStreetMap (*.tile.openstreetmap.org) for mapping, and i0.wp.com for image delivery. Leaflet maps specifically require 'data:' URI support in `img-src` for marker icons.
**Prevention:** Implement a strict CSP in `index.html` and maintain a whitelist of approved external resource providers.
