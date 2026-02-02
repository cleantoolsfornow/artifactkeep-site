// Downloads - Fetch and populate download links from GitHub releases

const DOWNLOADS_MANIFEST_URL = 'https://github.com/cleantoolsfornow/artifactkeep-releases/releases/latest/download/downloads.json';

document.addEventListener('DOMContentLoaded', () => {
    loadDownloads();
});

async function loadDownloads() {
    try {
        const response = await fetch(DOWNLOADS_MANIFEST_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        populateDownloadLinks(data);
        updateVersionInfo(data);
    } catch (error) {
        console.error('Failed to load downloads:', error);
        showDownloadError();
    }
}

function populateDownloadLinks(data) {
    const platforms = data.platforms || {};

    // macOS
    if (platforms.mac) {
        setDownloadLink('mac-dmg', platforms.mac.dmg);
        setDownloadLink('mac-tar', platforms.mac.tar);
    }

    // Windows
    if (platforms.windows) {
        setDownloadLink('windows-msi', platforms.windows.msi);
        setDownloadLink('windows-exe', platforms.windows.exe);
    }

    // Linux
    if (platforms.linux) {
        setDownloadLink('linux-deb', platforms.linux.deb);
        setDownloadLink('linux-appimage', platforms.linux.appimage);
        setDownloadLink('linux-rpm', platforms.linux.rpm);
    }
}

function setDownloadLink(elementId, url) {
    const element = document.getElementById(elementId);
    if (element && url) {
        element.href = url;
        element.classList.remove('disabled');
    }
}

function updateVersionInfo(data) {
    const versionElements = document.querySelectorAll('.version-number');
    const dateElements = document.querySelectorAll('.release-date');

    if (data.version) {
        versionElements.forEach(el => {
            el.textContent = `v${data.version}`;
        });
    }

    if (data.date) {
        const date = new Date(data.date);
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
