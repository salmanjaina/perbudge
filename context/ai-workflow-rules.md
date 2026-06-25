# AI Workflow Rules

## Approach

Build incrementally against the project details (`notes.md`) and the context files in this folder. Treat them as the source of truth for the Kharcha platform.

## Execution Rules

1. **Focus on Phase 1 First**: Do not implement Phase 2 features (Loans, Investments, Blog) until the Foundation phase is complete, functional, and deeply polished.
2. **Prioritize the UI**: Any UI generated must meet the "Rich Aesthetics" guidelines (modern fonts, smooth gradients, micro-animations). Avoid simple wireframe-like structures.
3. **No Placeholders in UI**: When generating UIs, avoid using placeholder images or components if possible. Use the `generate_image` tool to create functional demonstration assets if an image is needed.
4. **Follow Next.js 15 Rules**: Heed deprecation notices and read the relevant documentation if necessary. Avoid outdated App Router paradigms.
5. **SEO & Semantics**: Automatically implement SEO best practices (proper headers, semantic HTML, unique IDs) on every page.

## Keeping Context Updated

- If the database schema evolves, update `architecture.md`.
- Track progress of Phase 1 builds in `progress-tracker.md`.
- Ensure new UI decisions reflect in `ui-context.md`.
