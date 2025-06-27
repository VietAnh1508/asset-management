# Asset Management Application Guidelines

## Project Overview
This is an asset management application built with SvelteKit, providing a modern web interface for managing assets. The application includes pages for home, account management, and reporting.

## Tech Stack
- **Frontend Framework**: Svelte 5 with SvelteKit 2
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4
- **Language**: TypeScript
- **Code Quality**: ESLint and Prettier
- **Package Manager**: pnpm

## Project Structure
```
asset-management-svelte/
├── src/                  # Source code
│   ├── app.css           # Global CSS
│   ├── app.html          # HTML template
│   ├── assets/           # Static assets
│   ├── lib/              # Reusable components and utilities
│   └── routes/           # Application routes (pages)
│       ├── +layout.svelte  # Main layout component
│       ├── +page.svelte    # Home page
│       ├── account/        # Account-related pages
│       └── report/         # Report-related pages
├── static/               # Static files that will be served at root
├── public/               # Public assets
├── .svelte-kit/          # SvelteKit build output (generated)
└── node_modules/         # Dependencies (generated)
```

## Getting Started
1. **Prerequisites**:
   - Node.js (latest LTS version recommended)
   - pnpm package manager

2. **Installation**:
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd asset-management

   # Install dependencies
   pnpm install
   ```

3. **Running the application**:
   ```bash
   # Start development server
   pnpm start
   ```
   The application will automatically open in your default browser at http://localhost:5173.

## Development Workflow
1. **Starting the development server**:
   ```bash
   pnpm start
   ```

2. **Building for production**:
   ```bash
   pnpm build
   ```

3. **Previewing the production build**:
   ```bash
   pnpm preview
   ```

4. **Code quality checks**:
   ```bash
   # Type checking
   pnpm check

   # Linting
   pnpm lint

   # Formatting check
   pnpm format:check
   ```

5. **Fixing code style issues**:
   ```bash
   # Fix linting issues
   pnpm lint:fix

   # Format code
   pnpm format
   ```

## Testing
Currently, the project doesn't have automated tests set up. When implementing tests:
- Consider using Vitest for unit and component testing
- Playwright is recommended for end-to-end testing
- Place test files alongside the components they test with a `.test.ts` or `.spec.ts` extension

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

## Documentation Management
1. **Checking Documentation**:
   - Always refer to the official documentation for the specific versions used in the project:
     - Svelte: v5.34.7 - [Svelte Docs](https://svelte.dev/docs)
     - SvelteKit: v2.0.0 - [SvelteKit Docs](https://kit.svelte.dev/docs)
     - Vite: v7.0.0 - [Vite Docs](https://vitejs.dev/guide/)
     - TypeScript: v5.8.3 - [TypeScript Docs](https://www.typescriptlang.org/docs/)
     - TailwindCSS: v4.1.11 - [Tailwind Docs](https://tailwindcss.com/docs)
     - ESLint: v8.56.0 - [ESLint Docs](https://eslint.org/docs/user-guide/)
     - Prettier: v3.1.1 - [Prettier Docs](https://prettier.io/docs/en/)
   - When encountering issues, check the version-specific documentation first
   - Use the package.json file as the source of truth for dependency versions

2. **Feature Planning and Implementation**:
   - Before implementing new features, consult the relevant documentation
   - Create a brief feature plan document that includes:
     - Feature requirements
     - Technical approach based on documentation
     - Potential challenges and solutions
     - Implementation steps
   - Share the plan with the team for feedback before implementation
   - Reference specific documentation in comments for complex implementations

3. **Documentation Updates**:
   - When upgrading dependencies, update the documentation references in this guide
   - Document any workarounds or custom solutions that deviate from official documentation
   - Maintain internal documentation for project-specific patterns and solutions
