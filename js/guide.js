// Prefer live guide from GitHub, keep built-in page copy as SEO/offline fallback.
const GITHUB_GUIDE_URL = 'https://raw.githubusercontent.com/cleantoolsfornow/artifactkeep-releases/main/guide.md';

document.addEventListener('DOMContentLoaded', () => {
    loadUserGuide();
});

async function loadUserGuide() {
    const guideContainer = document.getElementById('guide-content');
    if (!guideContainer) return;

    // Always enhance built-in fallback so anchor links work without network.
    applyGuideEnhancements(guideContainer);

    try {
        const response = await fetch(GITHUB_GUIDE_URL);
        if (!response.ok) {
            throw new Error(`GitHub fetch failed with status: ${response.status}`);
        }

        const markdown = await response.text();

        // If markdown parser is unavailable, keep static fallback copy.
        if (typeof marked === 'undefined') {
            showGuideStatus(
                guideContainer,
                'Showing built-in guide copy. Live guide parser is unavailable.'
            );
            return;
        }

        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });

        guideContainer.innerHTML = marked.parse(markdown);
        clearGuideStatus(guideContainer);
        applyGuideEnhancements(guideContainer);
    } catch (error) {
        console.error('[Guide] Failed to load live guide:', error);

        if (guideContainer.textContent.trim()) {
            showGuideStatus(
                guideContainer,
                'Showing built-in guide copy because the live GitHub guide could not be loaded.'
            );
            return;
        }

        guideContainer.innerHTML = `
      <div class="error-message">
        <p>Unable to load user guide. Please try again later or visit our <a href="https://github.com/cleantoolsfornow/artifactkeep-releases/releases" target="_blank" rel="noopener">GitHub repository</a>.</p>
      </div>
    `;
    }
}

function applyGuideEnhancements(container) {
    generateHeadingIds(container);
    handleAnchors(container);
}

function generateHeadingIds(container) {
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const usedIds = new Set();

    headings.forEach((heading) => {
        if (heading.id) {
            usedIds.add(heading.id);
            return;
        }

        let id = heading.textContent
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

        let uniqueId = id;
        let counter = 1;

        while (usedIds.has(uniqueId)) {
            uniqueId = `${id}-${counter}`;
            counter += 1;
        }

        usedIds.add(uniqueId);
        heading.id = uniqueId;
    });
}

function handleAnchors(container) {
    const anchors = container.querySelectorAll('a[href^="#"]');

    if (window.location.hash) {
        const targetId = window.location.hash.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
        }
    }

    anchors.forEach((link) => {
        if (link.dataset.anchorBound === 'true') return;

        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            const targetId = href ? href.slice(1) : '';
            const target = document.getElementById(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', href);
            }
        });

        link.dataset.anchorBound = 'true';
    });
}

function showGuideStatus(container, message) {
    let notice = container.querySelector('.guide-sync-note');

    if (!notice) {
        notice = document.createElement('div');
        notice.className = 'guide-sync-note';
        container.prepend(notice);
    }

    notice.textContent = message;
}

function clearGuideStatus(container) {
    const notice = container.querySelector('.guide-sync-note');
    if (notice) {
        notice.remove();
    }
}
