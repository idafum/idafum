# Portfolio Home Restructure Checklist

## Working Agreement
- Start fresh from the current static site, but keep the work incremental.
- Do not write implementation code until the feature being worked on is agreed.
- Preview every meaningful change before moving to the next feature.
- Test each feature on mobile and desktop widths as we go.
- Keep the page focused: header, hero, and one project section.
- Always inspect the current files before editing and preserve Somto's latest manual changes.

## Feature 1: Page Shell And Header
- Done: Define the global page shell: `body`, shared header, and main content area.
- Done: Define the home page section order: hero first, then a call to action for projects.
- Done: Keep the header outside the home-only layout so it can become a global component.
- Done: Define the header content: home mark, navigation links, and mobile menu behavior.
- Done: Make the header responsive across mobile and desktop.
- Done: Keep the shared header structure easy to reuse on other pages later.
- Done: Preview and test after implementation.

## Feature 2: Hero
- Done: Define the main first impression: image, name/title, short positioning text, and optional visual treatment.
- Done: Make the layout work cleanly on narrow mobile screens and wider desktop screens.
- Done: Keep the HTML semantic and the styling maintainable.
- Done: Preview and test after implementation.

## Feature 3: Projects Call To Action
- Done: Remove featured project details from the home page.
- Done: Add a clear call to action from the home page to the projects page.
- Pending: Build the dedicated projects page with project cards/case studies.

## Cleanup Pass
- Done: Add reusable design variables in `global.css`.
- Done: Replace repeated home page colors, spacing, borders, and radii with shared variables.
- Done: Keep the current home page structure focused on header, hero, and project call to action.

## Current State
- `index.html` is the active home page.
- `css/global.css` contains shared variables, reset styles, the sticky global header, and shared container rules.
- `css/landing.css` contains the home hero and call-to-action styles.
- The home page has a sticky global header and a hero with image/name/description/location, an inline Apple logo after "Apple platform applications", a `Read more` link to `about.html`, and a `See my projects` link to `portfolio.html`.
- Project details should live on the dedicated projects page rather than the home page.

## About Page Plan
- Purpose: make the About page function as a structured, resume-readable page for humans and hiring tools.
- Do not duplicate the home page profile summary; the hero already handles the short introduction.
- Do not include full Projects or Contact sections; those should live on dedicated pages.
- Section 1: Education.
- Section 2: Work Experience.
- Section 3: Skills.
- Certifications / Training is intentionally omitted for now until there is content to add.
- Use semantic HTML sections and real text so AI hiring tools can scan the content.
- Keep the design consistent with `global.css` variables and the current portfolio direction.

## Projects Page Plan
- Purpose: replace the `portfolio.html` placeholder with a focused, semantic overview of Somto's project work.
- Keep the existing shared global header and navigation structure.
- Start with HTML and content structure only; do not add projects-page CSS until the rendered HTML structure is reviewed and approved.
- Use a page introduction followed by one semantic projects section containing four project articles.
- The projects section has no separate visible heading; each project article uses an `h2` directly beneath the page `h1`.
- Keep the projects in this order:
  1. Risk and Compliance SharePoint Hub.
  2. Trak CLI.
  3. Combat Critters Desktop App.
  4. Mobile Incident Reporting System.
- Mark Mobile Incident Reporting System as `In development` in visible text.
- Give each project a heading and short summary in the initial structure.
- Add project-specific metadata, technology lists, images, and links only when their real content and destinations are confirmed; do not invent placeholders.
- HTML phase: Done; the semantic structure and heading hierarchy are approved.
- CSS phase: In progress as a guided exercise. Somto writes each agreed styling step, then the result is inspected and previewed before continuing.
- CSS step 1: Done; `css/projects.css` is connected after `global.css`, and the projects page has a responsive outer width and spacing.
- CSS step 2: Done; the introduction has fluid typography, readable spacing, and semantic emphasis for key phrases.
- CSS step 3: Done; the mobile-first project list has consistent gaps, padding, borders, radii, and surfaces.
- CSS step 4: Done; project titles, descriptions, and the development status label have an approved visual hierarchy.
- CSS step 5: Done; the list uses one column on mobile and two equal columns from 768px upward.
- Preview and test each approved phase at the widths in the Responsive Testing Checklist.

## Project Card Enhancement Plan
- Keep a shared information order across all cards: project identity, summary, skills/tools, optional evidence, and optional external links.
- Do not force unavailable content into a card. Visuals and links are project-specific enhancements rather than required fields.
- Use semantic skills/tools lists with real text so hiring tools and screen readers can parse them.
- Open external GitHub links safely, label them clearly, and do not add a link until the exact repository URL is confirmed.
- Phase 1 — Content inventory: confirm each project's summary, skills/tools, repository visibility and URL, available media, and confidentiality constraints.
- Phase 2 — Shared HTML: agree on and add the semantic skills/tools and project-actions structure before adding project-specific visuals.
- Phase 3 — SharePoint Hub: add a SharePoint-inspired color treatment without screenshots, internal URLs, employer identifiers, client data, or confidential interface details.
- Phase 4 — Trak CLI: add a terminal-inspired treatment, confirmed skills/tools, GitHub link, and a short motion demo if available.
- Prefer an optimized muted, looping `<video>` with a poster image over an animated GIF when source video is available; it is usually smaller and gives better playback control.
- If an animated GIF is used, keep it short and optimized, provide meaningful alternative text or an adjacent description, and ensure the project remains understandable without motion.
- Phase 5 — Combat Critters Desktop App: add approved app assets/screenshots, confirmed skills/tools, and its GitHub link.
- Phase 6 — Mobile Incident Reporting System: add confirmed skills/tools while retaining the visible `In development` status; do not add private source links or unfinished visuals unless explicitly approved.
- Phase 7 — Responsive and accessibility QA: test media cropping, text wrapping, link focus states, touch targets, reduced-motion behavior, and card balance at all checklist widths.
- Build and preview one project enhancement at a time, starting with shared HTML and then the SharePoint card.
- SharePoint content inventory confirmed: Microsoft SharePoint, Microsoft 365, Information Architecture, UI/UX Design, Workflow Design, Process Improvement, Requirements Gathering, Stakeholder Communication, Documentation, Task Management, and Microsoft Planner.
- SharePoint HTML status: skills/tools structure is implemented with a deliberately shortened five-item list.
- SharePoint visual direction: use a light neutral card, restrained SharePoint-teal accent, and an official local SharePoint logo asset; reject the full dark teal gradient because it overpowers the project grid.
- SharePoint asset confirmed: `assets/symbols/sharepoint-logo.svg` is a local 48×48 SVG with no embedded scripts or external references.
- SharePoint context confirmed: the hub was developed as an internal workplace project at IKEA Winnipeg.
- SharePoint confidentiality boundary: employer attribution and a high-level outcome are allowed, but no screenshots, internal links, private documents, employee information, or operational details should be exposed.
- SharePoint enhancement status: add the logo to the card, remove the rejected dark-gradient rules, and implement the revised light-card styling.

## Responsive Testing Checklist
- Mobile: around 375px wide.
- Larger mobile / small tablet: around 640px wide.
- Tablet / desktop: around 768px to 1024px wide.
- Wide desktop: 1280px or above if the layout expands that far.
- Check spacing, text wrapping, menu behavior, image cropping, and tap/click targets.

## Notes For Codex
- Work collaboratively and pause for direction before implementing each feature.
- Before editing, inspect the relevant HTML/CSS and explain the intended change.
- Use the existing no-build static site setup unless Somto asks for a different stack.
- Prefer scoped, understandable class names over one-off or overly generic names.
- Avoid touching unrelated pages unless a shared structure requires it.
