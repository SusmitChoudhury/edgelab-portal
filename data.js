// data.js
// Centralized Database for EdgeLab Educational Portal

const siteData = {
    // Array of your YouTube videos and associated study materials
    videos: [
        {
            id: 1,
            title: "I Built a FULL AI Website Without Writing a Single Line of Code 🤯 | Gemini + Antigravity + Sarvam AI",
            youtubeId: "O3t3AiOZgjw", 
            thumbnail: "https://img.youtube.com/vi/O3t3AiOZgjw/maxresdefault.jpg",
            description: "Learn how to build a complete, stunning AI website entirely through prompt engineering and no-code tools. Perfect for beginners and advanced developers alike.",
            materials: [
                {
                    name: "No code AI Website Notes (PDF)",
                    fileName: "No code AI Website.pdf.pdf",
                    type: "pdf"
                }
            ]
        }
    ],

    // Array of coding questions
    questions: [
        {
            id: 1,
            title: "Reverse a String",
            difficulty: "Easy",
            category: "Strings",
            link: "#" // Link to LeetCode, HackerRank, or your own solution
        },
        {
            id: 2,
            title: "Two Sum Problem",
            difficulty: "Easy",
            category: "Arrays",
            link: "#"
        },
        {
            id: 3,
            title: "Merge Two Sorted Lists",
            difficulty: "Easy",
            category: "Linked Lists",
            link: "#"
        },
        {
            id: 4,
            title: "Longest Substring Without Repeating Characters",
            difficulty: "Hard",
            category: "Sliding Window",
            link: "#"
        },
        {
            id: 5,
            title: "Valid Parentheses",
            difficulty: "Medium",
            category: "Stacks",
            link: "#"
        }
    ]
};
