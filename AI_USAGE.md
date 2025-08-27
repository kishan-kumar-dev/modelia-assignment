# AI Usage Notes

This document outlines how AI tools were used throughout the development of the Modelia assignment.

## 1. Code Generation

- **ChatGPT**: Assisted in writing React components, hooks, and TypeScript types.
- **GitHub Copilot**: Generated repetitive boilerplate code for components such as:
  - HistoryList
  - PromptInput
  - StyleSelector
  - Spinner

## 2. Debugging & Type Fixes

- Resolved import/export issues (e.g., `Generation` type from `api.ts`) using ChatGPT.
- Fixed TypeScript strict mode errors and ensured proper typing across hooks and components.

## 3. Performance & Optimization Guidance

- Used AI to suggest and implement:
  - React.memo for memoization
  - Lazy loading of large components
  - Error boundaries for runtime error handling

## 4. Project Documentation

- AI assisted in drafting:
  - README.md
  - AI_USAGE.md
  - Code comments explaining hooks and utilities

## 5. Workflow Automation

- ChatGPT was used to:
  - Provide ESLint + Prettier configurations
  - Optimize folder structure and component modularization
  - Suggest TailwindCSS styling for accessibility and responsiveness

## 6. Testing Assistance (Optional)

- AI provided guidance for unit testing and end-to-end testing using:
  - React Testing Library
  - Cypress

---

> AI tools were used responsibly to accelerate development, ensure code quality, and document the project workflow. All business logic and project structure decisions were implemented by the developer.
