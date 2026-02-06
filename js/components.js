/**
 * Components Loader
 * Injects shared header/footer partials.
 */

async function loadComponent(elementId, componentPath) {
    const target = document.getElementById(elementId);
    if (!target) return;

    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}`);
        }

        target.innerHTML = await response.text();

        document.dispatchEvent(
            new CustomEvent('component:loaded', {
                detail: { id: elementId }
            })
        );
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', './components/header.html');
    loadComponent('footer-placeholder', './components/footer.html');
});
