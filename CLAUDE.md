# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is an asset management application built with SvelteKit, providing a modern web interface for managing assets.
The application includes pages for home, account management, and reporting.

## Tech Stack
- Framework: SvelteKit 2.24.0 for building Svelte applications with server-side rendering and routing.
- Bundler: Vite 7.0.0, utilized for its swift bundling capabilities.
- Styling: TailwindCSS 4.1.11, providing utility-first CSS for styling components.
- Language: TypeScript, configured for both strict type checking and modern JavaScript features (ES2023).

## Commands

Development server:
```bash
pnpm start
```

Build commands:
```bash
pnpm build          # Production build
pnpm preview        # Preview production build
```

Code quality:
```bash
pnpm check          # Type checking with svelte-check and tsc
pnpm lint           # ESLint check
pnpm lint:fix       # Fix ESLint issues
pnpm format         # Format code with Prettier
pnpm format:check   # Check formatting
```

## Architecture

This is a SvelteKit 2 application with Svelte 5, TypeScript, and TailwindCSS 4. The project follows SvelteKit's file-based routing convention.

### Key Structure
- **Routes**: File-based routing in `src/routes/` with layout in `+layout.svelte`
- **Navigation**: Centralized nav items array in layout with active state logic
- **Styling**: TailwindCSS utility classes throughout, global styles in `src/app.css`
- **TypeScript**: Configured with strict checking across app and node environments
- **Build**: Vite 7 with auto adapter for deployment flexibility

## Best Practices
1. **File Organization**:
    - Place reusable components in `src/lib`
    - Use SvelteKit's file-based routing in `src/routes`
    - Group related functionality in subdirectories

2. **Component Development**:
    - Keep components small and focused on a single responsibility
    - Use TypeScript for type safety
    - Extract reusable logic to separate files

3. **Styling**:
    - Use TailwindCSS utility classes for styling
    - For complex components, consider extracting common patterns to reusable classes

4. **State Management**:
    - Use Svelte stores for global state
    - Keep component state local when possible
    - Consider using derived stores for computed values

5. **Performance**:
    - Lazy-load routes and components when appropriate
    - Optimize images and assets
    - Use SvelteKit's built-in features for SSR and hydration

6. **Code Quality**:
    - Follow the ESLint and Prettier configurations
    - Write meaningful commit messages
    - Review code before submitting pull requests

## Documentation Reference
- Always refer to the official documentation for the specific versions used in the project
- When encountering issues, check the version-specific documentation first
- Use the package.json file as the source of truth for dependency versions

## Feature Planning and Implementation:
- Before implementing new features, consult the relevant documentation
- Create a brief feature plan document that includes:
    - Feature requirements
    - Technical approach based on documentation
    - Potential challenges and solutions
    - Implementation steps
- Share the plan with the team for feedback before implementation
- Reference specific documentation in comments for complex implementations
