# Sentinel Security Journal

## 2025-05-15 - [security improvement] Defense-in-depth with CSP and Sanitization
**Vulnerability:** Potential for attribute injection in contact links and lack of XSS mitigation.
**Learning:** Leaflet-based maps require specific CSP directives for tile providers (`https://*.tile.openstreetmap.org`) and markers (`data:`) to function correctly while maintaining a secure default-src.
**Prevention:** Always implement a restrictive CSP and sanitize all user-provided data used in HTML attributes like `href`.
