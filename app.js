// app.js
// Logic for EdgeLab Educational Portal v2

document.addEventListener('DOMContentLoaded', () => {

    // --- Utility: Get URL Parameters ---
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // --- Render Courses / Video Player (courses.html) ---
    const playerWrapper = document.getElementById('youtube-player-wrapper');
    const videoDetails = document.getElementById('video-details');
    const playlistContainer = document.getElementById('playlist-container');

    if (playerWrapper && videoDetails && playlistContainer && typeof siteData !== 'undefined') {
        
        // Determine which video to play. Default to first video.
        let activeVideoId = parseInt(getQueryParam('v')) || siteData.videos[0].id;
        let activeVideo = siteData.videos.find(v => v.id === activeVideoId);
        
        // Fallback if ID is invalid
        if (!activeVideo) activeVideo = siteData.videos[0];

        // 1. Inject YouTube Iframe
        if (activeVideo.youtubeId) {
            playerWrapper.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0" 
                    title="${activeVideo.title}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        } else {
            playerWrapper.innerHTML = `<div style="padding: 2rem; text-align:center; color: white;">No Video ID Provided</div>`;
        }

        // 2. Inject Video Details & Materials
        let materialsHTML = '';
        if (activeVideo.materials && activeVideo.materials.length > 0) {
            activeVideo.materials.forEach(mat => {
                materialsHTML += `
                    <a href="Study meterial/${mat.fileName}" target="_blank" class="material-link">
                        <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                        <span>Download: ${mat.name}</span>
                    </a>
                `;
            });
        }

        videoDetails.innerHTML = `
            <h1>${activeVideo.title}</h1>
            <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem;">${activeVideo.description || ''}</p>
            ${materialsHTML.length > 0 ? `<h3 style="margin-bottom: 1rem;">Study Materials</h3>${materialsHTML}` : ''}
        `;

        // 3. Inject Playlist (Sidebar)
        siteData.videos.forEach(video => {
            // Don't show the currently playing video in the sidebar
            if (video.id === activeVideo.id) return;

            const item = document.createElement('div');
            item.className = 'sidebar-item';
            item.onclick = () => window.location.href = `courses.html?v=${video.id}`;
            
            item.innerHTML = `
                <img src="${video.thumbnail}" alt="Thumbnail">
                <div>
                    <h4>${video.title}</h4>
                </div>
            `;
            playlistContainer.appendChild(item);
        });
        
        // If no other videos, show a message
        if (playlistContainer.children.length === 0) {
            playlistContainer.innerHTML = '<p style="color: var(--text-muted);">More videos coming soon!</p>';
        }
    }

    // --- Render Questions (questions.html) ---
    const questionsContainer = document.getElementById('questions-container');
    const difficultyFilters = document.getElementById('difficulty-filters');
    const topicSelect = document.getElementById('topic-select');

    if (questionsContainer && typeof siteData !== 'undefined' && siteData.questions) {
        
        let currentDifficulty = 'all';
        let currentTopic = 'all';

        // Populate Topic Dropdown
        if (topicSelect) {
            // Get unique topics while preserving insertion order
            const topics = [...new Set(siteData.questions.map(q => q.category))];
            topics.forEach(topic => {
                if (topic && topic !== "General") {
                    const option = document.createElement('option');
                    option.value = topic;
                    option.textContent = topic;
                    option.style.color = 'black'; // Make sure options are visible in dropdown
                    topicSelect.appendChild(option);
                }
            });

            topicSelect.addEventListener('change', (e) => {
                currentTopic = e.target.value;
                renderQuestions();
            });
        }

        const renderQuestions = () => {
            questionsContainer.innerHTML = '';
            
            const filteredQuestions = siteData.questions.filter(q => {
                const matchDiff = currentDifficulty === 'all' ? true : q.difficulty.toLowerCase() === currentDifficulty;
                const matchTopic = currentTopic === 'all' ? true : q.category === currentTopic;
                return matchDiff && matchTopic;
            });

            if (filteredQuestions.length === 0) {
                questionsContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted);">No questions found for the selected filters.</p>';
                return;
            }

            filteredQuestions.forEach(q => {
                const item = document.createElement('div');
                item.className = 'question-item';
                
                const tagClass = q.difficulty.toLowerCase();
                
                item.innerHTML = `
                    <div class="question-info">
                        <span class="tag ${tagClass}">${q.difficulty}</span>
                        <div>
                            <h3 style="font-size: 1.1rem; margin-bottom: 0.2rem;">${q.title}</h3>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">Category: <span style="color: var(--accent-color);">${q.category || 'General'}</span></span>
                        </div>
                    </div>
                    <a href="${q.link}" target="_blank" class="btn btn-secondary">Solve Problem</a>
                `;
                
                questionsContainer.appendChild(item);
            });
        };

        // Initial Render
        renderQuestions();

        // Handle Difficulty Filters
        if (difficultyFilters) {
            const btns = difficultyFilters.querySelectorAll('.filter-btn');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    // Update active class
                    btns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    
                    // Render based on filter
                    currentDifficulty = e.target.getAttribute('data-filter');
                    renderQuestions();
                });
            });
        }
    }

});
