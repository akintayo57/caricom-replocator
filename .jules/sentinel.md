## 2026-04-12 - Dependency Security and CSP Hardening
**Vulnerability:** The application was vulnerable to path traversal and arbitrary file reads via an outdated Vite version (7.3.1). Additionally, it lacked a Content Security Policy (CSP), making it more susceptible to XSS and unauthorized resource loading.
**Learning:** Even static React applications benefit significantly from a defense-in-depth approach using CSP meta tags. Whitelisting specific image and map tile domains (like i0.wp.com and openstreetmap.org) prevents unauthorized external content from being injected.
**Prevention:** Regularly run `npm audit` and maintain a strict CSP. Update core build tools (Vite) promptly when security advisories are released.
