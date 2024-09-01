document.addEventListener('DOMContentLoaded', () => {
    // Toggle Mobile Menu (Example only, make sure to add menu toggle button and menu container in your HTML)
    const menuToggle = document.createElement('button');
    menuToggle.id = 'menu-toggle';
    menuToggle.textContent = '☰ Menu';
    document.body.insertBefore(menuToggle, document.body.firstChild);

    const navMenu = document.createElement('div');
    navMenu.id = 'nav-menu';
    navMenu.style.display = 'none'; // Initially hidden
    navMenu.innerHTML = '<p>Menu Item 1</p><p>Menu Item 2</p><p>Menu Item 3</p>';
    document.body.insertBefore(navMenu, document.body.firstChild);

    menuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'none' ? 'block' : 'none';
    });

    // Search Input Handling
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            console.log('Search input changed to: ', event.target.value);
            // Optionally, add functionality to filter results
        });
    }

    // Cart Icon Interaction
    const cartIcon = document.querySelector('.nav-cart i');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            alert('Cart icon clicked!');
            // Optionally, add functionality to open cart drawer or redirect
        });
    }

    // Scroll to Top Button
    const scrollTopButton = document.createElement('div');
    scrollTopButton.textContent = 'Back to Top';
    scrollTopButton.classList.add('scroll-top');
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Hover Effect for Boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            box.style.transform = 'scale(1.02)'; // Slight zoom effect
        });
        box.addEventListener('mouseout', () => {
            box.style.boxShadow = 'none';
            box.style.transform = 'scale(1)'; // Reset zoom effect
        });
    });
});
