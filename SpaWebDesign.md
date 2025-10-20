# Spa Web Design - Project Overview

This document provides a comprehensive overview of the `spa-web-design` project, detailing its architecture, technology stack, and file structure.

## 1. Project Concept

`spa-web-design` is a modern **S**ingle **P**age **A**pplication (SPA) designed as a portfolio or agency website. Its core user experience is built around a unique, app-like interface where each major content area (Home, Services, Work, etc.) is presented as a distinct, full-page view.

Instead of a traditional long-scrolling page, users navigate between these sections using a fixed navigation bar. This creates a focused and immersive experience, controlled entirely by client-side state management.

## 2. Technology Stack

The project is built with a modern, performance-oriented technology stack:

*   **Framework**: **React 18** is used for building the user interface.
*   **Language**: **TypeScript** provides static typing for improved code quality and maintainability.
*   **Build Tool**: **Vite** serves as the development server and build tool, configured with the `@vitejs/plugin-react-swc` plugin. This uses the **SWC** (Speedy Web Compiler) for extremely fast compilation and Hot Module Replacement (HMR).
*   **Routing**: **React Router DOM (`react-router-dom`)** manages the application's routing structure, mapping URLs to specific page components.
*   **UI & Styling**:
    *   **Tailwind CSS**: A utility-first CSS framework used for all styling, enabling rapid and consistent UI development directly within the component files.
    *   **Shadcn/ui**: A collection of beautifully designed, reusable UI components. These are not a traditional component library but rather code that is integrated directly into the project, built upon Radix UI primitives for accessibility and `class-variance-authority` for styling variants.
    *   **Lucide React**: Provides a clean and consistent set of SVG icons.
*   **State Management**: The core navigation logic is handled by React's built-in `useState` hook within the main page component.

## 3. File & Directory Structure

The project follows a standard structure for a modern React application. The most important directory is `src/`.

```
spa-web-design/
├── public/
├── src/
│   ├── assets/
│   │   └── hero-shape.png
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── sheet.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Services.tsx
│   │   └── Work.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
└── SpaWebDesign.md
```

### Key Files and Directories

#### `src/main.tsx`
The main entry point of the application. It imports the root `App` component and renders it into the DOM.

#### `src/App.tsx`
The root component of the application. Its primary responsibility is to set up the application-wide context providers (like `QueryClientProvider`, `TooltipProvider`) and define the routing structure using `react-router-dom`. It maps the root path `/` to the `Index` page.

#### `src/pages/Index.tsx`
This is the most critical component for the application's unique UI/UX. It acts as the "page" for the root route `/`.

*   **State Management**: It uses `useState` to manage the `activeSection` (e.g., 'home', 'services').
*   **Conditional Rendering**: It holds a map of all section components (`Hero`, `Services`, etc.) and renders *only* the one that corresponds to the `activeSection` state.
*   **Props Drilling**: It passes the `activeSection` state and the `setActiveSection` function down to the `Navigation` component, allowing the navigation bar to control which section is displayed.

#### `src/components/`
This directory contains all the reusable React components.

*   **`Navigation.tsx`**: The fixed header component. It receives `activeSection` and `onNavigate` as props. When a user clicks a link, it calls the `onNavigate` function to update the state in `pages/Index.tsx`, triggering a re-render to show the new section. It also uses the `activeSection` prop to highlight the currently active link.

*   **`Hero.tsx`**, **`Services.tsx`**, **`Work.tsx`**, **`About.tsx`**, **`Contact.tsx`**: These are the individual, full-page content sections. Each is styled with `h-screen` to fill the viewport and `overflow-y-auto` to allow scrolling on smaller screens where content might overflow.

*   **`components/ui/`**: This directory contains the base components from **Shadcn/ui**. For example, `button.tsx` defines the `<Button>` component and its style variants using `class-variance-authority`.

#### `src/lib/utils.ts`
A standard file in Shadcn/ui setups. It contains the `cn` utility function, which intelligently merges Tailwind CSS classes, making it easy to combine base styles with conditional or prop-based styles.

#### `src/index.css`
The global stylesheet. It's primarily used for:
1.  Importing Tailwind CSS's base, components, and utilities layers.
2.  Defining the root CSS variables for the application's theme (colors, radius, etc.), which are then used by Tailwind and Shadcn/ui components.

## 4. Core Application Logic

The "one section at a time" functionality is achieved through a simple yet powerful pattern in React:

1.  The `pages/Index.tsx` component holds a state variable, `activeSection`, initialized to `'home'`.
2.  It renders the `Navigation` component, passing down `activeSection` and a function to update it (`setActiveSection`).
3.  It then looks up the component corresponding to the `activeSection` in a JavaScript object and renders it inside the `<main>` tag.
4.  When a user clicks a link in `Navigation`, the `onClick` handler calls `setActiveSection` with the new section's name (e.g., `'work'`).
5.  This state change causes `pages/Index.tsx` to re-render, which in turn renders the new section component.

This client-side state management avoids full page reloads and creates a seamless, app-like transition between views.