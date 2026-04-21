## 2025-03-17 - Missing Security Headers and Input Validation
**Vulnerability:** The application was missing a Content Security Policy (CSP) and input length limits on user-facing search fields.
**Learning:** Even static frontend-only applications can benefit from CSP as defense-in-depth against XSS. Lack of input validation on search fields, even if not currently sent to a backend, is a poor security practice that can lead to issues if the application evolves.
**Prevention:** Always implement a strict CSP and validate/sanitize all user inputs, including length constraints, at the point of entry.
