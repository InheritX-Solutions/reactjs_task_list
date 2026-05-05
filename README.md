# React Task Manager

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.2.11-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.2.5-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

A **production-ready, enterprise-standard** React Todo application built with modern architecture and best practices. This project demonstrates senior-level frontend engineering with clean code organization, scalable systems, and GitHub-quality standards.

---

## ✨ Features

### Core Functionality
- ✅ Add, Edit, and Delete Todos
- ✅ Mark Todos as Complete/Incomplete
- ✅ Search Todos by keyword
- ✅ Filter Todos (All / Active / Completed)
- ✅ Pagination with configurable page sizes
- ✅ Persistent localStorage storage
- ✅ Real-time Todo Statistics

### User Experience
- ✅ Modern, responsive SaaS-style UI
- ✅ Smooth transitions and animations
- ✅ Empty state design
- ✅ Accessible components
- ✅ Clean typography and spacing

### Code Quality
- ✅ TypeScript for static typing
- ✅ ESLint + Prettier for code formatting
- ✅ Husky + Commitlint for git hooks
- ✅ Feature-based architecture
- ✅ Reusable UI components
- ✅ Memoized Redux selectors

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18.3.1 |
| **Language** | TypeScript 5.4.5 |
| **Build Tool** | Vite 5.2.11 |
| **State Management** | Redux Toolkit 2.2.5 |
| **Forms** | React Hook Form 7.51.5 + Zod 3.23.8 |
| **Styling** | Tailwind CSS 3.4.3 |
| **Code Quality** | ESLint, Prettier, Husky, Commitlint |
| **Path Aliases** | vite-tsconfig-paths |

---

## 📁 Architecture Overview

### Folder Structure

```
reactjs_task_list/
├── public/                    # Static assets
│   └── favicon.ico
├── src/
│   ├── app/                   # Core application setup
│   │   ├── providers/         # React context providers
│   │   │   └── AppProviders.tsx
│   │   └── store/             # Redux store configuration
│   │       └── index.ts
│   ├── assets/                # Global assets
│   │   └── styles/            # Global styles & Tailwind
│   │       └── index.css
│   ├── components/            # Reusable components
│   │   ├── layout/            # Layout components
│   │   │   └── MainLayout.tsx
│   │   └── ui/                # UI primitives (design system)
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Input.tsx
│   ├── constants/             # Global constants
│   │   └── index.ts
│   ├── features/              # Feature modules (feature-based architecture)
│   │   └── todos/             # Todos feature
│   │       ├── components/    # Feature-specific components
│   │       │   ├── EditTodoModal.tsx
│   │       │   ├── TodoFilters.tsx
│   │       │   ├── TodoForm.tsx
│   │       │   ├── TodoItem.tsx
│   │       │   ├── TodoList.tsx
│   │       │   ├── TodoPagination.tsx
│   │       │   └── TodoStats.tsx
│   │       ├── constants/     # Feature constants
│   │       │   └── index.ts
│   │       ├── pages/         # Feature pages
│   │       │   └── TodosPage.tsx
│   │       ├── slice/         # Redux slice & selectors
│   │       │   ├── todos.selectors.ts
│   │       │   └── todos.slice.ts
│   │       ├── types/         # Feature types
│   │       │   └── index.ts
│   │       └── validation/    # Zod validation schemas
│   │           └── todo.schema.ts
│   ├── hooks/                 # Global custom hooks
│   │   ├── index.ts
│   │   ├── useAppDispatch.ts
│   │   └── useAppSelector.ts
│   ├── services/              # Service layer (API, storage, etc.)
│   │   └── storage.service.ts
│   ├── types/                 # Global TypeScript types
│   │   └── index.ts
│   ├── utils/                 # Global utility functions
│   │   └── index.ts
│   ├── App.tsx                # Root component
│   └── main.tsx               # Application entry point
├── index.html                 # Vite entry HTML
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite config
├── tailwind.config.js         # Tailwind config
├── .eslintrc.cjs              # ESLint config
├── .prettierrc                # Prettier config
├── commitlint.config.cjs      # Commitlint config
├── .gitignore                 # Git ignore
├── .env.example               # Environment variables example
└── README.md                  # This file!
```

---

## 🎯 Key Architectural Decisions

### 1. Feature-Based Architecture
**Why it's better**:
- Groups related code (components, state, types) by feature rather than by type
- Improves code discoverability - everything related to a feature is in one place
- Easier to scale - add new features without touching existing code
- Better for large teams - multiple developers can work on separate features
- Easier to delete or deprecate features

**Industry standard**: Used by top companies like Google, Meta, and Shopify

---

### 2. Redux Toolkit
**Why it's better**:
- Reduces 80% of Redux boilerplate
- Built-in Immer for immutable state updates
- Type-safe out of the box with TypeScript
- Integrated dev tools for debugging
- Enforces best practices by default

**Before vs After**:
- Old: 5+ files (actions, constants, reducers, selectors, thunks)
- New: 2 files (slice, selectors) with all logic

---

### 3. TypeScript
**Why it's better**:
- Static type checking catches errors at compile time
- Better IDE support with autocompletion
- Self-documenting code
- Easier refactoring
- Reduces runtime bugs by 30-50% in production

---

### 4. Reusable UI Components (Design System)
**Why it's better**:
- Consistent UI across the entire application
- Faster development - reuse components instead of rebuilding
- Easier to maintain - update in one place
- Better accessibility - fix once, benefit everywhere
- Scalable for future features

---

### 5. Centralized Storage Service
**Why it's better**:
- Abstracts localStorage behind a consistent API
- Built-in error handling and fallback mechanisms
- Type-safe operations with generics
- Easy to switch to other storage (sessionStorage, IndexedDB, etc.)
- Testable in isolation

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd reactjs_task_list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will open automatically at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting & Formatting

```bash
# Lint the codebase
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format the codebase with Prettier
npm run format
```

---

## 💾 localStorage Strategy

### Storage Service (`src/services/storage.service.ts`)

A robust, type-safe wrapper around localStorage with:
- **Error Handling**: Gracefully handles JSON parsing errors and storage failures
- **Type Safety**: Generic functions for type-safe operations
- **Fallback Mechanisms**: Returns null on failures to prevent app crashes
- **Consistent API**: get, set, remove, clear methods

### Storage Structure

```javascript
{
  "todos": [
    {
      "id": "1714567890123-abc123def45",
      "title": "Complete project refactor",
      "completed": false,
      "createdAt": "2024-05-01T12:00:00.000Z",
      "updatedAt": "2024-05-01T12:00:00.000Z"
    }
  ]
}
```

---

## ⚡ Performance Optimizations

1. **Memoized Selectors**
   - Redux Toolkit selectors use memoization
   - Prevents unnecessary re-renders when unrelated state changes
   - Computed data is cached until dependencies change

2. **Component Architecture**
   - Small, focused components
   - Minimal prop drilling via Redux
   - Properly scoped state

3. **Pagination**
   - Renders only visible todos at once
   - Reduces DOM nodes and memory usage
   - Faster initial load and scrolling

4. **Vite Build Optimizations**
   - Tree shaking
   - Code splitting ready
   - Fast refresh in development
   - Optimized production bundle

---

## 📈 Scalability Guide

### Adding New Features

1. **Create feature folder**
   ```
   src/features/[feature-name]/
   ├── components/
   ├── pages/
   ├── slice/
   ├── types/
   ├── constants/
   └── validation/
   ```

2. **Add Redux slice**
   - Create `[feature-name].slice.ts`
   - Create `[feature-name].selectors.ts`
   - Add to `src/app/store/index.ts`

3. **Build UI components**
   - Use existing UI primitives from `src/components/ui/`
   - Follow the same patterns as `todos/` feature

4. **Add to routing** (when implementing React Router)

### Adding APIs

1. **Extend services layer** in `src/services/`
2. **Use Redux Toolkit Query** (recommended) or async thunks
3. **Add loading/error states**
4. **Update selectors** for async data

---

## 🔮 Future Improvements

- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Drag & Drop** - Reorder todos with drag and drop
- [ ] **Categories** - Organize todos into categories/projects
- [ ] **Priority Levels** - High/Medium/Low priority flags
- [ ] **Due Dates** - Set and track due dates for todos
- [ ] **Toast Notifications** - User feedback for actions
- [ ] **Skeleton Loaders** - Better loading states
- [ ] **Keyboard Shortcuts** - Improve accessibility and power user experience
- [ ] **Backend API** - Replace localStorage with a real API
- [ ] **User Authentication** - Sign in/Sign up with accounts
- [ ] **Unit Tests** - Jest + React Testing Library
- [ ] **Integration Tests** - Playwright or Cypress

---

## 📄 License

MIT

---

## 👨‍💻 Author

Built with ❤️ by a Bansi Borad

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
</div>
