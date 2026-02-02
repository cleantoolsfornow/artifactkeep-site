/**
 * Components Loader
 * Loads header and footer components into pages
 */

async function loadComponent(elementId, componentPath) {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const html = await response.text();
        element.innerHTML = html;

        // Re-initialize mobile menu toggle if header was loaded
        if (elementId === 'header-placeholder') {
            initMobileMenu();
        }
    } catch (error) {
        console.error(`Error loading component: ${error.message}`);
    }
}

function initMobileMenu() {
    const toggle = document.querySelector('.header-mobile-toggle');
    const nav = document.querySelector('.header-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', './components/header.html');
    loadComponent('footer-placeholder', './components/footer.html');
});
