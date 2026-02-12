// shared.js
document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById('main-header');

    if (!headerPlaceholder) {
        console.warn("Header placeholder with id 'main-header' not found.");
        return;
    }

    fetch('/_header.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch _header.html');
            return response.text();
        })
        .then(data => {
            headerPlaceholder.innerHTML = data;
            initializeHeaderFunctionality();
        })
        .catch(error => {
            console.error('Failed to load header:', error);
            headerPlaceholder.innerHTML = "<p style='color:red; text-align:center;'>Error: Could not load navigation bar.</p>";
        });
});

function initializeHeaderFunctionality() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('header nav');

    // 1. Hamburger Menu Toggle
    if (hamburger && nav) {
        const navList = nav.querySelector('ul');
        hamburger.setAttribute('aria-controls', navList.id);

        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // 2. Set Active Navigation Link
    const navLinks = document.querySelectorAll('header nav a');
    const currentPagePath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPagePath || (currentPagePath === '/' && linkPath.endsWith('/index.html'))) {
            link.classList.add('active-link');
            link.setAttribute('aria-current', 'page');
        }
    });

    // 3. OTT Dropdown Logic (Grid)
    window.toggleOTT = function() {
        const dropdown = document.getElementById('ottDropdown');
        if (dropdown) {
            dropdown.classList.toggle('active');
        }
    };

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('ottDropdown');
        const trigger = document.querySelector('.ott-trigger');
        if (dropdown && trigger && !dropdown.contains(e.target) && !trigger.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
}
