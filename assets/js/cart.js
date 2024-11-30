// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-btn');

    // Get cart items from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Render cart items dynamically
    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            checkoutButton.style.display = 'none';
        } else {
            checkoutButton.style.display = 'block';
            cartItems.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                itemDiv.innerHTML = `
                    <div>
                        <img src="${item.image}" alt="${item.name}" style="width:100px;height:auto;">
                        <p>${item.name}</p>
                        <p>Price: $${item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });
        }
    };

    // Remove item from cart
    const removeItem = (index) => {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCart();
    };

    // Add event listener for remove buttons
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const index = event.target.dataset.index;
            removeItem(index);
        }
    });

    // Render cart on page load
    renderCart();
});

