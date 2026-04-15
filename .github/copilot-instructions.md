This is a component library for a custom React application.

It is built only for Webview2.

We use bun and rslib for package management and bundling.

Do not import libraries that are not already dependencies of the project.

## The following rules must be followed when writing code for components and common functions in the lib folder. Storybook stories are exempt.

Write in TypeScript React using functional components.

Write argument types and return types for all functions, even if void.

For named functions, do not use arrow functions, only function declarations.

Write short block style comments above each global function.

Write short block style comments for each item in a component's prop type.

Do not use class components unless explicitly requested.

Do not inline destructure parameters.

Do not inline create a type.

Avoid using excessive inline styles. Create a new CSS class when possible.
