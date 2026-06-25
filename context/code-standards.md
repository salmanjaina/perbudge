# Code Standards

## General Principles

- **Zero-Friction Mentality**: Every piece of code in the critical path (e.g., logging a transaction) must be optimized for speed. Friction must be near zero.
- **AI Tone Guidelines**: "AI speaks plainly." When Gemini returns text to the user, ensure prompts instruct it to use zero jargon, no passive observations, and to always end with a suggested action.
- **Privacy & Security**: Financial data is the most personal data. AES encryption for sensitive fields at rest must be implemented correctly.

## Tech Stack Rules

- **Next.js 15 (App Router)**: Follow the latest App Router conventions. Read the relevant Next.js 15 documentation if needed, as APIs and file structure may differ from older versions.
- **Vanilla CSS**: Prefer Vanilla CSS for styling to allow maximum control over rich aesthetics, unless Tailwind is explicitly approved by the user.
- **SEO Best Practices**: 
  - Proper title tags and meta descriptions for each page.
  - A single `<h1>` per page.
  - Semantic HTML5 elements.
  - Unique, descriptive IDs for interactive elements.

## Content & Copy

- **Action-Oriented**: AI and UI copy should drive decisions, not just show charts.
- **Cultural Context**: "Kharcha" means expenditure in Hindi. Tone should be honest, direct, and culturally rooted for Indian households.
