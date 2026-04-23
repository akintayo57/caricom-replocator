## 2025-05-15 - Vulnerable Dependencies and Input Sanitization
**Vulnerability:** High-severity vulnerabilities in `vite` (Path Traversal/Arbitrary File Read), `flatted` (DoS/Prototype Pollution), and `picomatch` (ReDoS). Also lack of input sanitization for `tel:` and `mailto:` links, and missing CSP.
**Learning:** Even if data is currently local, failing to sanitize inputs for URI schemes like `tel:` and `mailto:` can lead to attribute injection or XSS if the data source becomes dynamic or untrusted. A missing CSP leaves the app vulnerable to unauthorized resource loading.
**Prevention:** Regularly run `npm audit` and update dependencies. Implement central security utilities for input sanitization and enforce a strict Content Security Policy.
