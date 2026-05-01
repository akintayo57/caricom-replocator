## 2025-05-14 - Implementing Content Security Policy (CSP) via Meta Tag
**Vulnerability:** Cross-Site Scripting (XSS) and Data Injection.
**Learning:** Adding a CSP via a `<meta>` tag is an effective defense-in-depth measure for static Vite/React applications. However, `frame-ancestors` is ignored in meta tags and must be delivered via HTTP headers. Also, external resources like OpenStreetMap tiles and Google Fonts must be explicitly allow-listed to prevent breakage.
**Prevention:** Always audit external resource dependencies (images, fonts, scripts) before implementing a restrictive CSP to avoid breaking core functionality.
