## 2025-05-15 - [Security Hardening & Dependency Management]
**Vulnerability:** High-severity vulnerabilities in `flatted` (DoS/Prototype Pollution) and `picomatch` (ReDoS).
**Learning:** Even with zero-dependency source code, a project's lockfile can accumulate vulnerabilities from build tools and indirect dependencies. `npm audit fix --package-lock-only` is an effective way to update these without risking local environment side-effects from a full `npm install`.
**Prevention:** Regularly run `npm audit` and keep the lockfile updated as part of the CI/CD pipeline.

## 2025-05-15 - [Defense-in-Depth with CSP]
**Vulnerability:** Potential for Cross-Site Scripting (XSS) and unauthorized resource loading.
**Learning:** In a client-side application using third-party services like OpenStreetMap and Google Fonts, a Content Security Policy (CSP) is essential. It must be carefully tuned to allow necessary external resources while restricting everything else.
**Prevention:** Implement a strict CSP from the start and use `connect-src` and `img-src` to whitelist trusted domains.

## 2025-05-15 - [Input Sanitization for URI Schemes]
**Vulnerability:** Potential for attribute injection or XSS via `tel:` and `mailto:` links.
**Learning:** User-provided data (like phone numbers or emails) should never be trusted when used in URI schemes. Malicious data could break out of the `href` attribute (e.g., using `"` or ` onClick`).
**Prevention:** Always use dedicated sanitization functions to strip non-essential characters from contact information before using them in links.
