# ADR-0001: App structure and smart/dumb components

## Status

Accepted

## Context

The application initially organized UI code using Atomic Design folders (`atoms/`, `molecules/`, `organisms/`). That pattern fits styling layers in `theme.css`, but it mixed UI hierarchy with behavior (services, routing, scroll logic) inside the same components.

We need a structure that:

- Separates presentational UI from state and side effects
- Follows Angular conventions for folder layout and naming
- Uses English identifiers for all code (folders, files, classes, selectors)
- Keeps Danish copy and anchor IDs as user-facing content

## Decision

### Application structure

```
src/app/
  core/services/     # Singleton services and app-wide state
  shared/
    models/          # Shared TypeScript interfaces
    data/            # Static configuration and content
    ui/              # Reusable presentational components
  layout/            # Smart containers for site-wide shell
  pages/<feature>/   # Routed pages with page-specific components and containers
```

### Component types

| Type               | Location                            | Rules                                                                                         |
| ------------------ | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| **Presentational** | `shared/ui/`, `pages/*/components/` | `input()` / `output()` only. No app service `inject()`.                                       |
| **Container**      | `layout/`, `pages/*/containers/`    | Wires services, data, and event handlers. Suffix: `.container.ts`, selector `sh-*-container`. |
| **Page**           | `pages/*/`                          | Route-level composition. Minimal logic (e.g. passing shared data to footer).                  |

### Naming

- Files: `*.component.ts`, `*.container.ts`, `*.service.ts`
- Classes: `HomeComponent`, `AppHeaderContainer`, `PageNavigationService`
- Selectors: `sh-home`, `sh-app-header-container`

### Atomic Design scope

Atomic levels (atoms → molecules → templates) apply **only** to CSS component classes in `theme.css` (e.g. `.btn`, `.card`, `.nav-link`). They do not define the TypeScript folder structure.

## Consequences

- Presentational components are easier to test in isolation with `setInput()` and output spies
- Navigation and drawer behavior live in containers and services, not scattered across UI components
- New pages add folders under `pages/` with their own `components/` and `containers/` as needed
- `DESIGN.md` design-token vocabulary (e.g. "hero" for color tokens) remains valid for styling documentation
