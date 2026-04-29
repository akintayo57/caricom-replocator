## 2026-04-01 - Contact Sanitization and CSP Pattern
**Vulnerability:** Potential XSS and attribute injection in `tel:` and `mailto:` links, and risk of unauthorized script execution/resource loading.
**Learning:** In a geography-based application loading external map tiles and font resources, a strict CSP is essential to prevent unauthorized resource loading. Additionally, contact information for officials, often sourced from various datasets, must be sanitized before being injected into the DOM as link attributes.
**Prevention:** Always use centralized sanitization utilities (`src/utils/security.js`) for contact links and maintain a strict CSP meta tag in `index.html`.
