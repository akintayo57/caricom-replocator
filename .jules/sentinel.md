## 2025-05-15 - Contact Link Attribute Injection Defense
**Vulnerability:** Potential for attribute injection in `tel:` and `mailto:` links if contact data is unsanitized, although React's JSX escaping provides a primary layer of defense.
**Learning:** Adding protocol-level sanitization (e.g., stripping spaces, quotes, and HTML-significant characters) provides defense-in-depth, ensuring that even if data sources are compromised or React's escaping is bypassed, the links remain safe.
**Prevention:** Always sanitize user-provided or external data before embedding it into URI schemes like `tel:` or `mailto:`.
