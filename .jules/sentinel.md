## 2026-04-21 - [Supply Chain] brace-expansion v5 Breaking minimatch
**Vulnerability:** Moderate/High severity vulnerabilities in `brace-expansion` v1/v4 (ReDoS, Process Hang).
**Learning:** Upgrading `brace-expansion` to v5 (which uses ESM) breaks older versions of `minimatch` (v3) commonly used by ESLint, resulting in `TypeError: expand is not a function`.
**Prevention:** Pin `brace-expansion` to `^2.0.1` which addresses the vulnerabilities while maintaining CommonJS compatibility for tools like ESLint and minimatch v3.
