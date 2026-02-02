// Guide Renderer - Load and render markdown user guide

// Using marked.js for markdown rendering
// CDN: https://cdn.jsdelivr.net/npm/marked/marked.min.js

document.addEventListener('DOMContentLoaded', () => {
    loadUserGuide();
});

async function loadUserGuide() {
    const guideContainer = document.getElementById('guide-content');

    if (!guideContainer) return;

    try {
        const response = await fetch('./content/guide.md');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const markdown = await response.text();

        // Check if marked.js is loaded
        if (typeof marked === 'undefined') {
            console.error('marked.js not loaded');
            guideContainer.innerHTML = '<pre>' + escapeHtml(markdown) + '</pre>';
            return;
        }

        // Configure marked options
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });

        // Render markdown to HTML
        const html = marked.parse(markdown);
        guideContainer.innerHTML = html;

        // Add scroll reveal to sections
        guideContainer.querySelectorAll('h2, h3').forEach(heading => {
            heading.classList.add('scroll-reveal');
        });

        // Re-initialize scroll effects for new content
        if (window.initScrollEffects) {
            window.initScrollEffects();
        }

    } catch (error) {
        console.error('Failed to load user guide:', error);
        guideContainer.innerHTML = `
      <div class="error-message">
        <p>Unable to load user guide. Please try again later or visit our <a href="https://github.com/cleantoolsfornow/artifactkeep" target="_blank">GitHub repository</a>.</p>
      </div>
    `;
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
