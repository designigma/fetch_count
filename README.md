# Frontend Interview Assignment

A modern React web application demonstrating API interaction, state management, persistence, and animated UI components. Built as a responsive, mobile-first web app.

## Tech Stack

- **Framework:** React 18 + Vite (TypeScript)
- **State Management & Persistence:** Zustand
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Testing:** Vitest + React Testing Library
- **Icons:** Lucide React

## Architecture Choices

This project was built using **Atomic Design Principles** to ensure modularity, scalability, and reusability. The UI is broken down into:

- **Atoms:** The smallest building blocks (e.g., `Button`, `AnimatedCounter`).
- **Molecules:** Groups of atoms functioning together (e.g., `HeaderAction` combining buttons and the counter).
- **Organisms:** Complex UI sections (e.g., `DataList` rendering the fetched grid).
- **Templates & Pages:** Layout wrappers and the final composed views.

**Why Zustand?**
I chose Zustand over Redux/Context for state management because it eliminates boilerplate while natively supporting `localStorage` persistence via its middleware, perfectly fulfilling the assignment's persistence requirement.

**Why Framer Motion?**
To achieve the requirement of visually engaging animations (changing color, shape, and size on counter increment), Framer Motion provides a declarative and highly performant, physics-based animation API.

## 💻 Local Setup Instructions

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/designigma/fetch_count.git
   cd frontend-assignment
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
   The app will be available at `http://localhost:5173`.

4. **Run Automated Tests:**
   \`\`\`bash
   npm run test
   \`\`\`
