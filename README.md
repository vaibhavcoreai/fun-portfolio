# 🎨 Fun & Playful Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A creative, interactive, and hand-drawn style portfolio website built with React and Framer Motion.

## ✨ Features

- **🌈 Playful Aesthetic**: Custom hand-drawn doodles, scratchy fonts, and a vibrant color palette.
- **🖱️ Interactive Elements**:
  - Custom dot-and-ring cursor with hover effects.
  - Draggable/floating clouds in the header.
  - Interactive sun/moon toggle for (future) dark mode.
  - "Click Burst" particle effects on elements.
- **📱 Fully Responsive**:
  - Mobile-first design with a custom drawer menu.
  - Adaptive layouts for Hero, Projects, and About sections.
- **🚀 Smooth Animations**:
  - Page load transitions with a cloud curtain effect.
  - Scroll-triggered reveal animations.
  - Hover effects on cards, buttons, and links.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons/Graphics**: Custom SVG Doodles & Lucide React

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/vaibhavcoreai/fun-portfolio.git
    cd fun-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Hero.jsx       # Main landing section with doodles
│   ├── Navbar.jsx     # Responsive navigation
│   ├── Projects.jsx   # Project showcase grid
│   ├── About.jsx      # About me section
│   ├── CustomCursor.jsx # Animated cursor logic
│   └── ...
├── App.jsx            # Main application layout
├── main.jsx           # Entry point
└── index.css          # Global styles & Tailwind imports
```

## 🎨 Customizing

- **Content**: Update text and links in the respective component files (e.g., `Hero.jsx`, `Projects.jsx`).
- **Doodles**: SVG doodles are inline or in helper components like `CloudDoodle.jsx`.
- **Colors**: Theme colors are defined in `tailwind.config.js` (e.g., `bg-beige`, `font-scratchy`).

## 👤 Author

**Vaibhav Manaji**
- GitHub: [@vaibhavcoreai](https://github.com/vaibhavcoreai)
- LinkedIn: [Vaibhav Manaji](https://www.linkedin.com/in/vaibhav-manaji-40a9ab290/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Made with 💙 and ☕ by Vaibhav.*
