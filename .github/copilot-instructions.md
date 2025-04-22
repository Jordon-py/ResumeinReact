Purpose
Serve as the non-negotiable rulebook for generating high-quality, maintainable, scalable frontend code.
Focus on clarity, creativity, and power.
Keep it concise, educational, and visually stunning—with custom CSS only.

🎨 Color & Styling Guidelines
Use only lch color values for all UI elements (buttons, links, headings, backgrounds, etc.).

Apply modular, clean, custom CSS—absolutely no TailwindCSS or utility-class-based styling.

CSS should be modern, organized, and scalable.

⚛️ React Component Standards
Use only functional components with React Hooks (useState, useEffect, etc.).

Prioritize:

Reusability through composition and custom hooks.

Clarity and minimal duplication.

Separation of concerns—split UI from logic.

Avoid:

Class components

Inline styles

Tailwind utility classes= none (🚫)

Always:

Write concise, helpful comments for students learning the logic.

Ensure responsive design with custom media queries or adaptive layouts in CSS.

Abstract repeated logic into shared components or hooks.

📋 Component Pre-Generation Checklist
Ask before building:

❓ What is the component’s name and core purpose?

📥 What props or data will it receive?

🧩 Will it include user interactions (e.g. modals, toggles)?

✨ Ideal Examples
📝 Form with live validation and error feedback

🧠 Modal receiving dynamic content via props

🖼️ Image gallery with auto-rotation + manual navigation

📱 Adaptive navbar with dropdowns and accessible tab structure

📁 Project Structure & File Documentation
Always maintain a css_changes.md file in the project root:

Track class names, IDs, and the folders/components that use them.

All files must begin with:

jsx

// Path: src/components/{{ComponentName}}.jsx
🚀 Code Generation & Syntax Rules
Never use TailwindCSS.

Always complete components—check for logic, UI, and interactions.

Use:

2-space indentation

Single quotes (') for all strings

import / export default for components

Named exports for shared utilities

Document each file with:

A concise, educational summary

Logic breakdowns and syntax tips for comprehension

🧠 Code Review & QA Checks
Remove:

Unused imports, side effects, and variables

Validate:

Consistent naming

Clear data flow

Handling of user interactions

Each component must follow React lifecycle best practices and render correctly across screen sizes.

📝 Commit Message Format
bash
Copy
Edit
<type>(scope): Description
Example: feat(ui): Add animated modal for image preview

Allowed types: feat, fix, chore, docs, refactor, test

Keep descriptions capitalized, clear, and free from trailing punctuation.

