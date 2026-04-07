## 2026-04-07 - Defensive Input Sanitization and CSP
**Vulnerability:** Potential attribute injection in `tel:` and `mailto:` links, and lack of Content Security Policy.
**Learning:** Even with React's automatic protection, explicit sanitization of contact fields is a critical defense-in-depth measure, especially when data sources may change. CSP provides a necessary second layer of defense.
**Prevention:** Always sanitize data used in sensitive HTML attributes like `href` and maintain a restrictive CSP to mitigate XSS risks.
