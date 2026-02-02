// Downloads - Fetch and populate download links from GitHub releases

const GITHUB_RELEASES_API = 'https://api.github.com/repos/cleantoolsfornow/artifactkeep-releases/releases/latest';

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Downloads] Page loaded, fetching release data...');
    loadDownloads();
});

async function loadDownloads() {
    try {
        console.log('[Downloads] Fetching from:', GITHUB_RELEASES_API);

        const response = await fetch(GITHUB_RELEASES_API, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const release = await response.json();
        console.log('[Downloads] Successfully fetched release:', release.tag_name);
        console.log('[Downloads] Release date:', release.published_at);
        console.log('[Downloads] Assets found:', release.assets?.length || 0);

        populateDownloadLinks(release.assets);
        updateVersionInfo(release);

        console.log('[Downloads] ✅ Download links populated successfully');
    } catch (error) {
        console.error('[Downloads] ❌ Failed to load downloads:', error);
        showDownloadError();
    }
}

function populateDownloadLinks(assets) {
    if (!assets || !assets.length) {
        console.warn('[Downloads] No assets found in release');
        return;
    }

    // Map file patterns to element IDs
    const downloadPatterns = {
        'mac-dmg': (name) => name.endsWith('.dmg'),
        'mac-tar': (name) => name.endsWith('.app.tar.gz') || name.endsWith('.tar.gz'),
        'windows-msi': (name) => name.endsWith('.msi'),
        'windows-exe': (name) => name.endsWith('.exe'),
        'linux-deb': (name) => name.endsWith('.deb'),
        'linux-appimage': (name) => name.toLowerCase().endsWith('.appimage'),
        'linux-rpm': (name) => name.endsWith('.rpm')
    };

    // Match assets to download buttons
    for (const asset of assets) {
        for (const [elementId, matcher] of Object.entries(downloadPatterns)) {
            if (matcher(asset.name)) {
                console.log(`[Downloads] Matched: ${asset.name} → #${elementId}`);
                setDownloadLink(elementId, asset.browser_download_url);
            }
        }
    }
}

function setDownloadLink(elementId, url) {
    const element = document.getElementById(elementId);
    if (element && url) {
        element.href = url;
        element.classList.remove('disabled');
    }
}

function updateVersionInfo(release) {
    const versionElements = document.querySelectorAll('.version-number');
    const dateElements = document.querySelectorAll('.release-date');

    // Extract version from tag_name (e.g., "v2.0.0" → "v2.0.0")
    if (release.tag_name) {
        versionElements.forEach(el => {
            el.textContent = release.tag_name;
        });
    }

    // Use published_at for release date
    if (release.published_at) {
        const date = new Date(release.published_at);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        dateElements.forEach(el => {
            el.textContent = formattedDate;
        });
    }
}

function showDownloadError() {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'download-error';
    errorMessage.innerHTML = `
    <p>Unable to load download links. Please visit our <a href="https://github.com/cleantoolsfornow/artifactkeep-releases/releases" target="_blank">GitHub Releases</a> page directly.</p>
  `;

    const container = document.querySelector('.downloads-container');
    if (container) {
        container.insertBefore(errorMessage, container.firstChild);
    }
}
