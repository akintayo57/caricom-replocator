## 2026-03-24 - [CSP Configuration for Leaflet Maps]
**Vulnerability:** Misconfigured Content Security Policy (CSP) can break interactive map components like Leaflet.
**Learning:** Leaflet requires `img-src` to permit tile providers (e.g., `https://*.tile.openstreetmap.org`) and potentially `data:` for markers. Style and script directives must also allow for Leaflet's dynamic behavior unless configured otherwise.
**Prevention:** Always test UI-heavy components like maps after applying a CSP. For Leaflet, ensure `img-src` includes the tile source and `data:`, and use `style-src 'unsafe-inline'` if the library injects styles.

## 2026-03-24 - [Defense-in-Depth Sanitization and RFC Compliance]
**Vulnerability:** Over-aggressive input sanitization can break functional data (e.g., removing apostrophes from email addresses).
**Learning:** While React handles attribute escaping, explicit sanitization provides defense-in-depth against underlying vulnerabilities (like attribute injection in `tel:`/`mailto:` links if they were to bypass React's standard path). However, sanitizers must be RFC-compliant to avoid functional regressions.
**Prevention:** When writing sanitizers for standardized formats like email, refer to RFCs to identify valid but potentially dangerous characters. In the case of emails, apostrophes are valid and should be allowed.
