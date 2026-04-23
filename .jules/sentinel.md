## 2025-05-14 - Transitive Dependency Vulnerabilities in Vite Ecosystem
**Vulnerability:** Multiple high-severity vulnerabilities in transitive dependencies: `picomatch` (ReDoS/Injection), `flatted` (Prototype Pollution/DoS), and `brace-expansion` (DoS).
**Learning:** Even when the primary dependency (Vite) is updated, transitive dependencies might still resolve to vulnerable versions if the primary dependency's version range is too broad or if they are pinned deeper in the tree.
**Prevention:** Use the `overrides` field in `package.json` to force-upgrade transitive dependencies to known secure versions when they aren't automatically updated by the package manager.
