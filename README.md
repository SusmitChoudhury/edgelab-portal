# EdgeLab Educational Portal 🚀

Welcome to the **EdgeLab Educational Portal** — a completely frontend-driven, highly customizable learning management system (LMS) designed for educational content creators. This platform allows you to seamlessly host video courses, attach study materials, and provide coding questions all in one place.

## Features ✨

- **Massive Landing Page:** A modern, highly responsive homepage with glassmorphism effects and bold typography.
- **Embedded YouTube Player:** Keep your students on your site. Videos play directly on your courses page, surrounded by related content and downloads.
- **Problem Solving Dashboard:** A dedicated space for coding questions equipped with interactive tags and difficulty filters.
- **Zero Backend Required:** The entire site reads from a single `data.js` file, making updates instant and deployment effortless.

## Tech Stack 🛠️

- **HTML5:** Semantic and accessible structure.
- **CSS3:** Custom properties (variables), Flexbox/Grid layouts, custom animations, and a responsive dark theme (`#100E09`, `#F86936`, `#06402B`).
- **Vanilla JavaScript:** Lightweight DOM manipulation, routing via URL parameters, and dynamic data rendering.

## How to Add Content 📝

Updating the site is incredibly easy. All content is stored in the `data.js` file.

### Adding a New Video
1. Upload your PDF notes to the `Study meterial` folder.
2. Open `data.js`.
3. Add a new object to the `videos` array:

```javascript
{
    id: 2, 
    title: "Your Awesome Video Title",
    youtubeId: "dQw4w9WgXcQ", // The 11-character code from the YouTube link
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "A short description of what the video is about.",
    materials: [
        {
            name: "Notes (PDF)",
            fileName: "your_pdf_filename.pdf"
        }
    ]
}
```

### Adding a Coding Question
Simply append to the `questions` array in `data.js`:

```javascript
{
    id: 6,
    title: "Reverse a Linked List",
    difficulty: "Medium",
    category: "Linked Lists",
    link: "https://leetcode.com/..."
}
```

## Running Locally 💻

1. Clone this repository.
2. Open the folder in your terminal.
3. Start a local server. For example, using Node.js:
   ```bash
   npx serve -p 3000
   ```
4. Open `http://localhost:3000` in your browser.

## Deployment 🌐

This project is built for **GitHub Pages**. 
Simply push your code to a public GitHub repository, navigate to **Settings > Pages**, and deploy from the `main` branch.

---
*Built with ❤️ by EdgeLab.*
