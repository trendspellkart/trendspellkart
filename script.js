// ==========================================
// TrendSpellKart JavaScript v1.1
// ==========================================

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

// ---------------- SEARCH ----------------

function setupSearch() {

    console.log("Search Ready");

}

// ---------------- CART ----------------

let cartCount = Number(localStorage.getItem("cartCount")) || 0;

function setupCart() {

    console.log("Cart Ready");

    updateCartCount();

    const buttons = document.querySelectorAll(".add-cart");
console.log("Buttons Found:", buttons.length);
console.log(buttons);
    buttons.forEach(button => {

        button.addEventListener("click", function () {

            console.log("Button Clicked");

            cartCount++;

            localStorage.setItem("cartCount", cartCount);

            updateCartCount();

            alert("Product added to cart!");

        });

    });

}

function updateCartCount() {

    const badge = document.getElementById("cart-count");

    if (badge) {

        badge.textContent = cartCount;

    }

}

// ---------------- WISHLIST ----------------

function setupWishlist() {

    console.log("Wishlist Ready");

}
