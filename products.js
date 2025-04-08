
const products = [
    { name: "Ballonnen 16 stk", price: 5, img: "./img/ballon.jpg" },
    { name: "Gouden/Zilveren Ballonnen 18 stk", price: 6, img: "./img/ballon2.jpg" },
    { name: "Confetti Canon", price: 10, img: "./img/confetticanon.jpg" },
    { name: "Confetti Canon met kleur", price: 12, img: "./img/confetticanon2.jpg" },
    { name: "Helium Tank green", price: 25, img: "./img/heliumtank.jpg" },
    { name: "Helium Tank pink", price: 30, img: "./img/heliumtank2.jpg" },
    { name: "Plastic Bekers", price: 3, img: "./img/cups.jpg" },
    { name: "Letter Ballonnen", price: 8, img: "./img/letterballon.jpg" },
    { name: "Vlaggenlijn", price: 4, img: "./img/vlaggenlijn.jpg" },
];


document.addEventListener("DOMContentLoaded", () => {
    const productsGrid = document.getElementById("products-grid");
    if (productsGrid) {
        products.forEach(product => {
            const productHTML = `
                <a href="detailpagina.html?img=${product.img}&name=${encodeURIComponent(product.name)}&price=${product.price}" class="product">
                    <img src="${product.img}" alt="${product.name}" class="product-img">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>€${product.price.toFixed(2)}</p>
                    </div>
                </a>
            `;
            productsGrid.innerHTML += productHTML;
        });
    }
});