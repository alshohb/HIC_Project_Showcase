// integration.js
document.addEventListener('DOMContentLoaded', () => {
    // Find all "Add to Cart" buttons in products.html
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Attach click event listeners to add products to localStorage
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.dataset.name,
                price: parseFloat(button.dataset.price),
                image: button.dataset.image,
                quantity: 1, // Default quantity
            };
            addToCart(product);
        });
    });

    // Function to add a product to localStorage
    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cartItems', JSON.stringify(cart));
        alert(`${product.name} has been added to your cart!`);
    }
});

