## 2025-05-22 - Contact Link Sanitization

**Vulnerability:** Potential URI injection and attribute breakout in `tel:` and `mailto:` links within `OfficialCard.jsx`.

**Learning:** While React automatically handles attribute escaping for standard text, URI-based schemes like `tel:` and `mailto:` can still be susceptible to protocol manipulation or URI-specific injection (e.g., adding CC/BCC headers via `?` in `mailto:`) if the data source is untrusted.

**Prevention:** Implement defense-in-depth by sanitizing dynamic values used in URI schemes. Restrict phone numbers to a safe character set (digits, +, -, parentheses) and strip URI-manipulating characters (percent, brackets, quotes, newlines) from email addresses before they reach the `href` attribute.
