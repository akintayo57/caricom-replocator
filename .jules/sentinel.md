## 2025-05-14 - Transitive Dependency Hardening
**Vulnerability:** Transitive vulnerabilities in common build tools (Vite, PostCSS) and utility libraries (brace-expansion, flatted, picomatch) including Path Traversal, XSS, and DoS.
**Learning:** Even if direct dependencies seem up to date, their transitive tree can harbor critical risks. `npm audit` reveals these, but `npm audit fix` may not always resolve them if they are pinned by intermediate packages.
**Prevention:** Use the `overrides` field in `package.json` to surgically pin secure versions of transitive dependencies. Always verify the fix with `npm ls <package>` and ensure build integrity with `npm run build` to prevent breaking the dependency graph.
