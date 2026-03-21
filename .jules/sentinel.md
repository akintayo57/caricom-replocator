## 2026-03-21 - [High] Fix flatted vulnerability and implement CSP
**Vulnerability:**
1. High-severity DoS vulnerability in `flatted` (<= 3.4.1) used as a sub-dependency of ESLint.
2. Missing Content Security Policy (CSP) in `index.html`, exposing the app to XSS and unauthorized resource loading.

**Learning:**
1. Vulnerabilities can hide in dev-dependencies (like ESLint) and should be explicitly pinned in `devDependencies` to override vulnerable sub-dependency versions when using `npm`.
2. A proper CSP is critical for modern React apps to restrict resource loading, especially when using external fonts and map tiles from third-party services.

**Prevention:**
1. Regularly run `npm audit` and explicitly pin secure versions of vulnerable sub-dependencies in `devDependencies`.
2. Always implement a least-privilege CSP in `index.html` to mitigate XSS risks and control external resource loading.
