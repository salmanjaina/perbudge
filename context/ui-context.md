# UI Context

## Design Philosophy

The visual language of Kharcha must be premium, dynamic, and state-of-the-art. It must wow the user at first glance. 

**Key principles:**
- **Rich Aesthetics** — Avoid generic colors (plain red, blue, green). Use curated, harmonious color palettes (e.g., HSL tailored colors, sleek dark modes). 
- **Modern Typography** — Use modern fonts from Google Fonts (e.g., Inter, Roboto, or Outfit). Do not use browser defaults.
- **Dynamic & Interactive** — Use smooth gradients, hover effects, interactive elements, and subtle micro-animations to enhance the user experience and encourage engagement.
- **Mobile-first, not mobile-only** — The transaction input flow must feel like a native app on a mobile screen. The dashboard should earn its width on the web.
- **Data before delight (in structure)** — While the aesthetics must be premium, the core interaction must remain frictionless. Performance and reliability are paramount.

## Transparency vs. Translucency

- **CRITICAL RULE**: NEVER use highly transparent components for cards, modals, or primary surfaces that contain text or interactive elements (e.g., `bg-card/20` or `opacity-70` backgrounds that blend completely into the page).
- **Use Translucency**: Instead of transparent components, use **translucent** components. This means using `backdrop-blur` combined with a mostly opaque background (e.g., `oklch(0.12 0 0 / 95%)` or `bg-background/95`). 
- **Class to Use**: For glassmorphic surfaces, ALWAYS use the `.translucent-surface` utility class which provides the proper high-opacity frosted glass effect without sacrificing legibility.

## Technical Styling Rules

- **Framework**: Use Tailwind CSS (as adopted from UI rules pattern) and custom properties. 
- **Tailwind**: Follow the UI-RULES and use standard Tailwind conventions for layout and glassmorphism.
- **Dark Mode**: Implement a sleek, thoughtful dark mode using standard Next.js and Tailwind setups. 

## Layout Patterns

- **Transaction Input**: Mobile bottom sheet / web modal. It must be accessible instantly, requiring under 3 taps.
- **Money Flow Dashboard**: Multi-view data representation built for both mobile (card-based) and web (wide layout).
- **AI Digest**: Surfaced as a weekly digest card and a chat interface — not just a passive dashboard widget.

## Anti-Patterns to Avoid

- ❌ Generic, template-looking MVP designs.
- ❌ High-friction input forms (e.g., long scrolling lists of categories when AI can infer it).
- ❌ Plain HTML aesthetics without micro-interactions.
