## 2025-05-15 - [CSP for Interactive Maps]
**Vulnerability:** Cross-Site Scripting (XSS) and Data Injection.
**Learning:** Implementing a strict Content Security Policy (CSP) while using interactive maps (like Leaflet) requires specifically allowing tile provider domains (e.g., OpenStreetMap) in `img-src` and sometimes `data:` for markers.
**Prevention:** Always include known external assets (fonts, tiles, APIs) in the CSP and test that they render correctly to avoid "breaking" the application while securing it.
