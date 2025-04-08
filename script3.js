
document.addEventListener("DOMContentLoaded", () => {
    
    initializeCart();
    initializeProductDetailPage();
    initializeRecommendedProducts();
});

function initializeCart() {
    const cartItemsContainer = document.getElementById('cart-items-winkelmand');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Je winkelwagen is leeg</p>';
            return;
        }

        cart.forEach((item, index) => {
            const cartItemHTML = `
                <div class="cart-item-winkelmand" id="cart-item-${index}">
                    <img src="${item.img}" alt="${item.name}" 
                         class="cart-item-img-winkelmand" 
                         style="width: 100px; height: 100px; object-fit: contain;">
                    <div class="cart-item-info-winkelmand">
                        <h3>${item.name}</h3>
                        <p>Prijs: €${item.price.toFixed(2)}</p>
                        <p>Aantal: ${item.quantity}</p>
                        <button class="remove-btn-winkelmand" 
                                onclick="removeItem(${index})">
                            Verwijderen
                        </button>
                    </div>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });

        updateTotal();
    }
}

function initializeProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productImg = urlParams.get('img');
    const productName = urlParams.get('name');
    const productPrice = parseFloat(urlParams.get('price'));

    if (document.getElementById('product-image')) {
        
        document.getElementById('product-image').src = productImg || '';
        document.getElementById('product-name').textContent = productName || '';
        document.getElementById('product-price').textContent = 
            productPrice ? `€${productPrice.toFixed(2)}` : '';

        
        const quantityInput = document.getElementById('quantity-input');
        quantityInput?.addEventListener('input', () => {
            const quantity = parseInt(quantityInput.value) || 1;
            document.getElementById('product-price').textContent = 
                `€${(productPrice * quantity).toFixed(2)}`;
        });

        
        const addToCartButton = document.querySelector('.add-to-cart');
        addToCartButton?.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value) || 1;
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            const existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: quantity,
                    img: productImg
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${quantity}x ${productName} toegevoegd aan winkelwagen!`);
            window.location.href = 'winkelmand.html';
        });
    }
}

function initializeRecommendedProducts() {
    const recommendedProductsGrid = document.getElementById('recommended-products-grid');
    if (recommendedProductsGrid) {
        recommendedProductsGrid.innerHTML = '';
        products.slice(0, 6).forEach(product => {
            const productHTML = `
                <a href="detailpagina.html?img=${product.img}&name=${encodeURIComponent(product.name)}&price=${product.price}" 
                   class="product">
                    <img src="${product.img}" 
                         alt="${product.name}" 
                         class="product-img">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>€${product.price.toFixed(2)}</p>
                    </div>
                </a>
            `;
            recommendedProductsGrid.innerHTML += productHTML;
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById('cart-items-winkelmand');
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Je winkelwagen is leeg</p>';
            return;
        }

        cart.forEach((item, index) => {
            const cartItemHTML = `
                <div class="cart-item-winkelmand" id="cart-item-${index}">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img-winkelmand" style="width: 100px; height: 100px; object-fit: contain;">
                    <div class="cart-item-info-winkelmand">
                        <h3>${item.name}</h3>
                        <p>Prijs: €${item.price.toFixed(2)}</p>
                        <p>Aantal: ${item.quantity}</p>
                        <button class="remove-btn-winkelmand" onclick="removeItem(${index})">Verwijderen</button>
                    </div>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });

        updateTotal(); 
    }
});


function updateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    let totalQuantity = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    const vat = total * 0.21; 
    document.getElementById('totalItems-winkelmand').textContent = totalQuantity;
    document.getElementById('vat-winkelmand').textContent = `€${vat.toFixed(2).replace('.', ',')}`;
    document.getElementById('totalPrice-winkelmand').textContent = `€${(total + vat).toFixed(2).replace('.', ',')}`;
}


function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById(`cart-item-${index}`).remove();
    updateTotal(); 
}