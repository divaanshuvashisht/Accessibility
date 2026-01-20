# Web Accessibility Best Practices Demo

This interactive React app demonstrates common web accessibility issues and their solutions, following WCAG guidelines. Each section includes a broken and a fixed example, with clear explanations and references.

## 🚀 Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

## 🛠️ Getting Started
1. **Clone the repository:**
   ```sh
   git clone https://github.com/divaanshuvashisht/Accessibility.git
   cd accessibilty
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the app:**
   ```sh
   npm start
   ```
4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📚 What You'll Learn
- How to identify and fix common accessibility issues
- The importance of proper form labels, keyboard navigation, alt text, color contrast, error messages, button spacing, and landmark regions
- Relevant WCAG guidelines for each topic

## 🧭 Topics Covered
- Form Labels
- Keyboard Accessibility
- Image Alt Text
- Color Contrast
- Error Message Accessibility
- Button Spacing
- Landmark Regions

## 🤝 Contributing
Pull requests and suggestions are welcome!

## 📄 License
MIT
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
