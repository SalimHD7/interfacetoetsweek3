
const urlParams = new URLSearchParams(window.location.search);
const productImg = urlParams.get('img');
const productName = urlParams.get('name');
const productPrice = parseFloat(urlParams.get('price'));


if (productImg) {
    document.getElementById('product-image').src = productImg;
}
if (productName) {
    document.getElementById('product-name').textContent = productName;
}
if (productPrice) {
    document.getElementById('product-price').textContent = `€${productPrice.toFixed(2)}`;
}


const quantityInput = document.getElementById('quantity-input');
const productPriceElement = document.getElementById('product-price');

quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value) || 1; 
    const totalPrice = productPrice * quantity;
    productPriceElement.textContent = `€${totalPrice.toFixed(2)}`;
});


const recommendedProductsGrid = document.getElementById('recommended-products-grid');
const recommendedProducts = products.slice(0, 6); // Select the first 6 products

recommendedProducts.forEach(product => {
    const productHTML = `
        <a href="detailpagina.html?img=${product.img}&name=${encodeURIComponent(product.name)}&price=${product.price}" class="product">
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>€${product.price.toFixed(2)}</p>
            </div>
        </a>
    `;
    recommendedProductsGrid.innerHTML += productHTML;
});

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.querySelector('.add-to-cart');
    const quantityInput = document.getElementById('quantity-input');
    const productName = document.getElementById('product-name').textContent;
    const productPrice = parseFloat(document.getElementById('product-price').textContent.replace('€', ''));
    const productImg = document.getElementById('product-image').src;

    addToCartButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value) || 1;

        const item = {
            name: productName,
            price: productPrice,
            quantity: quantity,
            img: productImg
        };

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${quantity}x ${productName} toegevoegd aan winkelwagen!`);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none'; // Hide the spinner once the page is fully loaded
    }
});