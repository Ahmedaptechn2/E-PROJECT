// Common JavaScript functions for all pages
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price, id: Date.now() });
    showThankYouOverlay(productName, price);
}

function showThankYouOverlay(productName, price) {
    const overlay = document.createElement('div');
    overlay.className = 'thank-you-overlay';
    overlay.innerHTML = `
        <div class="thank-you-container">
            <button class="close-thank-you" onclick="this.parentElement.parentElement.remove()">✕</button>
            <div class="thank-you-icon">🎉</div>
            <h2>Thank You For Your Purchase!</h2>
            <p class="product-details">
                <strong>${productName}</strong><br>
                Price: <strong>${price}</strong>
            </p>
            <p class="thank-you-message">We appreciate your order. Your product will be delivered soon!</p>
            <button class="continue-btn" onclick="this.parentElement.parentElement.remove()">Continue Shopping</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

function toggleAI() {
    const window = document.getElementById('aiWindow');
    const currentDisplay = window.style.display;
    
    if (currentDisplay === 'none' || currentDisplay === '') {
        window.style.display = 'flex';
    } else {
        window.style.display = 'none';
    }
}

function toggleOTT() {
    const dropdown = document.getElementById('ottDropdown');
    dropdown.classList.toggle('active');
}