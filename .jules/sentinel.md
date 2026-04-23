## 2025-05-15 - NPM Overrides Comment Failure
**Vulnerability:** N/A (Tooling issue)
**Learning:** Adding a `"//"` key inside the `"overrides"` object in `package.json` causes `npm` to fail with `Override without name: //`. `npm` expects all keys in `overrides` to be valid package names.
**Prevention:** Avoid using `"//"` or any non-package name keys inside `"overrides"`. Document security pins in the PR description or as top-level metadata in `package.json` if necessary, though top-level unknown keys might also trigger warnings in some tools.
