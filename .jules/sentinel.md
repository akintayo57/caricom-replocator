## 2026-04-12 - CSP Meta Tag Limitation
**Vulnerability:** Clickjacking defense via `frame-ancestors` directive.
**Learning:** The `frame-ancestors` CSP directive is ignored by browsers when delivered via a `<meta http-equiv="Content-Security-Policy">` tag. It must be sent as an HTTP response header to be effective.
**Prevention:** For single-page applications (SPAs) deployed on static hosting where headers cannot be easily set, use the `<meta>` tag for resource whitelisting (XSS defense) but rely on other mechanisms or server-side configuration for clickjacking protection.
