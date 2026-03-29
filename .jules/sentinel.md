## 2025-05-23 - [Vulnerability Fix: flatted]
**Vulnerability:** flatted <= 3.4.1 is vulnerable to unbounded recursion DoS in parse() revive phase.
**Learning:** Outdated dependencies can introduce critical vulnerabilities that might not be directly imported in the source code but are part of the dependency tree (in this case, via `eslint`).
**Prevention:** Regularly run `npm audit` and upgrade dependencies.

## 2025-05-23 - [Security Enhancement: Content Security Policy]
**Vulnerability:** Potential XSS and other injection attacks due to missing CSP.
**Learning:** A restrictive CSP is a powerful defense-in-depth measure that can mitigate the impact of XSS vulnerabilities.
**Prevention:** Always implement a restrictive CSP that only allows trusted resources.
