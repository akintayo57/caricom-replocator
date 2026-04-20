## 2026-04-20 - [Vite Path Traversal Vulnerability Fix]
**Vulnerability:** Vite versions prior to 7.3.2 were vulnerable to path traversal (CVE-2025-24967) in the `.map` handling of optimized dependencies, arbitrary file read via dev server WebSocket, and other issues.
**Learning:** Transitive dependencies can often lag behind on security updates even if top-level packages are relatively current. Vite 7.3.1 was being used which had several high-severity vulnerabilities.
**Prevention:** Regularly run `npm audit` and use the `overrides` field in `package.json` to enforce secure versions across the entire dependency tree.
