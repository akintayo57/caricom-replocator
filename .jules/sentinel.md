## 2025-05-22 - [Vulnerability Mitigation in Transitive Dependencies]
**Vulnerability:** Transitive dependencies `flatted` (DoS/Prototype Pollution) and `picomatch` (ReDoS) were found to have high-severity vulnerabilities during `npm audit`.
**Learning:** High-severity vulnerabilities often reside in transitive dependencies that are not directly listed in `package.json`, making them harder to manage via standard updates if the parent packages haven't released fixes.
**Prevention:** Use the `overrides` field in `package.json` to force-upgrade specific transitive dependencies to secure versions when they are not directly reachable, ensuring a cleaner `npm audit` report and reduced attack surface.

## 2025-05-22 - [Sanitization of URI-based Contact Links]
**Vulnerability:** Unsanitized data used in `tel:` and `mailto:` href attributes could lead to attribute injection or URI-based attacks if the data contains quotes, brackets, or other control characters.
**Learning:** While React handles basic XSS for text content, specific attributes like `href` with custom schemes require additional sanitization to ensure they only contain expected characters (e.g., digits for phones).
**Prevention:** Implement dedicated sanitization utilities for URI-based links and apply them consistently across the codebase to maintain defense-in-depth.
