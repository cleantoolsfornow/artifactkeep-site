// Main site interactions

document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    initSmoothScrolling();
    initCopyButtons();
    hydrateHeader();
});

document.addEventListener('component:loaded', (event) => {
    if (event.detail?.id === 'header-placeholder') {
        hydrateHeader();
    }
});

function hydrateHeader() {
    initMobileMenu();
    markActiveNavLink();
    initHeaderScrollState();
}

// Mobile menu
function initMobileMenu() {
    const toggle = document.querySelector('.header-mobile-toggle');
    const nav = document.querySelector('.header-nav');

    if (!toggle || !nav || toggle.dataset.bound === 'true') return;

    const closeMenu = () => {
        nav.classList.remove('active');
        toggle.classList.remove('active');
    };

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });

    toggle.dataset.bound = 'true';
}

function markActiveNavLink() {
    const current = normalizePath(window.location.pathname);

    document.querySelectorAll('.header-nav > a:not(.btn)').forEach((link) => {
        const href = link.getAttribute('href') || '';
        let target = '/';

        try {
            target = normalizePath(new URL(href, window.location.href).pathname);
        } catch (error) {
            console.warn('Unable to resolve nav link path:', href, error);
        }

        if (target === current) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

function normalizePath(path) {
    const normalized = path.replace(/\/$/, '') || '/';

    if (normalized.endsWith('/index.html')) {
        return '/';
    }

    if (normalized === '' || normalized === '.') {
        return '/';
    }

    return normalized;
}

function initHeaderScrollState() {
    const header = document.querySelector('.header');
    if (!header || header.dataset.scrollBound === 'true') return;

    const setScrolledState = () => {
        if (window.scrollY > 12) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    setScrolledState();
    window.addEventListener('scroll', setScrolledState, { passive: true });
    header.dataset.scrollBound = 'true';
}

// Scroll reveal with staggered timing
function initScrollEffects() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (!revealElements.length) return;

    revealElements.forEach((element, index) => {
        const delay = (index % 8) * 60;
        element.style.setProperty('--reveal-delay', `${delay}ms`);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px'
        }
    );

    revealElements.forEach((element) => observer.observe(element));
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            try {
                const target = document.querySelector(href);
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } catch (error) {
                console.warn('Smooth scroll skipped for invalid selector:', href, error);
            }
        });
    });
}

function initCopyButtons() {
    document.querySelectorAll('.copy-button').forEach((button) => {
        if (button.dataset.bound === 'true') return;

        button.addEventListener('click', async () => {
            const textToCopy = button.dataset.copy;
            if (!textToCopy) return;

            try {
                await navigator.clipboard.writeText(textToCopy);

                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.classList.add('copied');

                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('copied');
                }, 1800);
            } catch (error) {
                console.error('Failed to copy:', error);
            }
        });

        button.dataset.bound = 'true';
    });
}
