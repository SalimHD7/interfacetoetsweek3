document.addEventListener("DOMContentLoaded", () => {
    const cartItemsSummary = document.getElementById('cart-items-summary');
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage

    if (cartItemsSummary) {
        cartItemsSummary.innerHTML = ''; // Clear existing content
        if (cart.length === 0) {
            cartItemsSummary.innerHTML = '<p>Je winkelwagen is leeg</p>';
            return;
        }

        cart.forEach(item => {
            const cartItemHTML = `
                <div class="cart-item-summary">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img-summary" style="width: 80px; height: 80px; object-fit: contain;">
                    <div class="cart-item-info-summary">
                        <h3>${item.name}</h3>
                        <p>Prijs: €${item.price.toFixed(2)}</p>
                        <p>Aantal: ${item.quantity}</p>
                    </div>
                </div>
            `;
            cartItemsSummary.innerHTML += cartItemHTML;
        });
    }
});