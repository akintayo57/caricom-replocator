# Sentinel Security Journal 🛡️

## 2025-05-15 - [CRITICAL] Supply Chain Vulnerability in flatted
**Vulnerability:** Multiple high-severity vulnerabilities in `flatted` (<=3.4.1), including unbounded recursion DoS (GHSA-25h7-pfq9-p65f) and Prototype Pollution (GHSA-rf6f-7fwh-wjgh). While some were patched in earlier versions, version 3.4.2 is required to address both.
**Learning:** Even indirect dependencies (in this case, used by ESLint tools) can introduce critical vulnerabilities into the project's environment. `npm audit` is essential for surfacing these, and updates should target the version that resolves all reported issues.
**Prevention:** Regularly run `npm audit` and use dependency pinning or overrides in `package.json` to force-upgrade vulnerable sub-dependencies when direct updates aren't available or sufficient.
