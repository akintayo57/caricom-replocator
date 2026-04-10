## 2026-04-10 - ESM Extension Requirements in Node.js Test Runner
**Vulnerability:** N/A (Tooling challenge)
**Learning:** When using the built-in Node.js test runner (`node --test`) with ESM in a project that uses Vite, imports in test files MUST include the explicit `.js` extension (e.g., `import { ... } from './security.js'`), even if the source code itself uses Vite's extension-less resolution. Failing to do so causes `ERR_MODULE_NOT_FOUND`.
**Prevention:** Always include file extensions in ESM imports when targeting environments outside of the primary bundler (like raw Node.js).
