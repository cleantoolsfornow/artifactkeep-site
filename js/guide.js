// Use raw.githubusercontent.com - this has proper CORS headers unlike release download URLs
const GITHUB_GUIDE_URL = 'https://raw.githubusercontent.com/cleantoolsfornow/artifactkeep-releases/main/guide.md';

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Guide] Page loaded, initializing guide loader...');
    loadUserGuide();
});

async function loadUserGuide() {
    const guideContainer = document.getElementById('guide-content');
    if (!guideContainer) return;

    try {
        console.log('[Guide] Fetching guide from GitHub...');
        const response = await fetch(GITHUB_GUIDE_URL);

        if (!response.ok) {
            throw new Error(`GitHub fetch failed with status: ${response.status}`);
        }

        const markdown = await response.text();
        console.log('[Guide] ✅ Successfully loaded from GitHub');

        // Check if marked.js is loaded
        if (typeof marked === 'undefined') {
            console.error('[Guide] marked.js not loaded');
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

        // Generate IDs for headings (marked.js no longer does this by default)
        generateHeadingIds(guideContainer);

        // No animations for guide content - keep it simple

        console.log('[Guide] ✅ Guide rendered successfully');

        // Handle anchor links after content is loaded
        handleAnchors(guideContainer);

    } catch (error) {
        console.error('[Guide] ❌ Failed to load user guide:', error);
        guideContainer.innerHTML = `
      <div class="error-message">
        <p>Unable to load user guide. Please try again later or visit our <a href="https://github.com/cleantoolsfornow/artifactkeep-releases/releases" target="_blank">GitHub repository</a>.</p>
      </div>
    `;
    }
}

function generateHeadingIds(container) {
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const usedIds = new Set();

    headings.forEach(heading => {
        // Create slug from heading text
        let id = heading.textContent
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')  // Remove special chars except spaces and hyphens
            .replace(/\s+/g, '-')       // Replace spaces with hyphens
            .replace(/-+/g, '-');       // Collapse multiple hyphens

        // Handle duplicates by adding a number
        let uniqueId = id;
        let counter = 1;
        while (usedIds.has(uniqueId)) {
            uniqueId = `${id}-${counter}`;
            counter++;
        }
        usedIds.add(uniqueId);

        heading.id = uniqueId;
    });

    console.log('[Guide] Generated', headings.length, 'heading IDs');
}

function handleAnchors(container) {
    // Debug: log all heading IDs that were generated
    const headings = container.querySelectorAll('h1, h2, h3, h4');
    console.log('[Guide] Generated heading IDs:', Array.from(headings).map(h => h.id));

    // Debug: log all anchor links in the content
    const anchors = container.querySelectorAll('a[href^="#"]');
    console.log('[Guide] Anchor links found:', Array.from(anchors).map(a => a.getAttribute('href')));

    // If URL has a hash, scroll to that element after content loads
    if (window.location.hash) {
        const targetId = window.location.hash.slice(1);
        console.log('[Guide] Trying to scroll to:', targetId);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            console.warn('[Guide] Target element not found for hash:', targetId);
        }
    }

    // Add smooth scrolling to internal anchor links
    anchors.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const targetId = href.slice(1);
            console.log('[Guide] Clicked anchor:', href);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', href);
            } else {
                console.warn('[Guide] Target not found:', targetId);
            }
        });
    });
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
