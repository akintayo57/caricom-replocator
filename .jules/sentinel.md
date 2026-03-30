## 2026-03-30 - [Security Enhancement] Input Sanitization and CSP
**Vulnerability:** Potential XSS or attribute injection via `tel:` and `mailto:` links if source data is compromised. Absence of Content Security Policy (CSP) increases risk of XSS.
**Learning:** Even with trusted static data, sanitizing outputs for specific URI schemes (`tel:`, `mailto:`) is a good defense-in-depth practice. A CSP is a critical baseline for modern web applications.
**Prevention:** Implement output-specific sanitization for sensitive attributes and maintain a robust CSP.
