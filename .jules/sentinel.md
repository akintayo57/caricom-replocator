## 2025-05-14 - Sanitizing Contact Links in Official Cards
**Vulnerability:** Potential attribute injection in `tel:` and `mailto:` links via unsanitized representative contact data. If an official's phone or email contains characters like `"` or `'`, it could break out of the `href` attribute and inject malicious event handlers (e.g., `onclick`).
**Learning:** Even internal data sources should be treated with caution if they are used to build sensitive attributes like URLs. React's standard escaping doesn't prevent breakout if the developer is not careful about where the data is placed.
**Prevention:** Use a dedicated sanitization utility for contact links that only allows safe characters (digits, `+`, `-`, `@`, etc.) and explicitly strips quote characters.
