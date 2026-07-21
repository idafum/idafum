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
