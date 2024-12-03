document.addEventListener('DOMContentLoaded', () => {
    const summaryItemsContainer = document.getElementById('summary-items');
    const orderTotalElement = document.getElementById('order-total');
    const checkoutForm = document.getElementById('checkout-form');

    // Load cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Render cart items in the order summary
    let total = 0;
    cartItems.forEach(item => {
        const summaryItem = document.createElement('div');
        summaryItem.classList.add('summary-item');
        summaryItem.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
        <p>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
    </div>
`;

        summaryItemsContainer.appendChild(summaryItem);
        total += item.price * item.quantity;
    });

    // Update total
    orderTotalElement.textContent = total.toFixed(2);

    // Handle form submission
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Order Placed!',
            text: 'Thank you for your purchase. Your order is on its way!',
            confirmButtonText: 'Return to Home'
        }).then(() => {
            localStorage.removeItem('cartItems'); // Clear cart
            window.location.href = 'home.html'; // Redirect to home
        });
    });
});
