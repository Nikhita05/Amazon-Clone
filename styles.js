document.addEventListener('DOMContentLoaded', () => {
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
