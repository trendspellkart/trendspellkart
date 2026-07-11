// ==========================================
// TrendSpellKart JavaScript v2.0
// ==========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function () {

    console.log("TrendSpellKart Loaded Successfully");

    initWebsite();

});

function initWebsite() {

    console.log("Website Ready");

    setupSearch();
    setupCart();
    setupWishlist();

}

function setupSearch() {

    console.log("Search Ready");

}

function setupWishlist() {

    console.log("Wishlist Ready");

}

// ===============================
// CART SYSTEM
// ===============================

function setupCart() {

    updateCartCount();

    const buttons = document.querySelectorAll(".add-cart");

    buttons.forEach((button) => {

        button.addEventListener("click", function () {

            const card = this.closest(".product-card");

            const product = {

                id: card.dataset.id,

                name: card.dataset.name,

                price: card.dataset.price,

                image: card.dataset.image

            };

            addToCart(product);

        });

    });

}

function addToCart(product) {

    const exists = cart.find(item => item.id === product.id);

    if (!exists) {

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert(product.name + " added to cart!");

    } else {

        alert("Product already in cart.");

    }

}

function updateCartCount() {

    const badge = document.getElementById("cart-count");

    if (badge) {

        badge.innerText = cart.length;

    }

}
