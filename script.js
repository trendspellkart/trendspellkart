// ==========================================
// TrendSpellKart JavaScript v1.1
// ==========================================


// ==========================================
// Product Database
// ==========================================

const products = [
{
    id: 1,
    sku: "TSK-ML-001",
    name: "3D Moon Lamp",
    brand: "TrendSpellKart",
    category: "Home Decor",
    price: 499,
    oldPrice: 999,
    stock: 25,
    rating: 4.8,

    image: "images/IMG_20260623_133343.jpg",

    description: "Premium 3D Moon Lamp with touch control, USB rechargeable battery and 7 color lighting modes. Perfect for bedroom, living room, office and gifting.",

    specifications: {
        Material: "Plastic",
        Lighting: "Fluorescent",
        Rechargeable: "Yes",
        Shape: "Round",
        Battery: "USB Rechargeable",
        Warranty: "No",
        Size: "15 CM"
    },

    features: [
        "3D Moon Surface Design",
        "USB Rechargeable",
        "Touch Sensor Control",
        "7 Color Changing Modes",
        "Brightness Control",
        "Memory Function",
        "4-20 Hours Battery Backup",
        "Wooden Stand Included",
        "Perfect Gift Item"
    ],

    package: [
        "1 x Moon Lamp",
        "1 x USB Charging Cable",
        "1 x Wooden Stand",
        "1 x User Manual"
    ]
}
];
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

    const cartBtn = document.getElementById("cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");

cartBtn.addEventListener("click", function (e) {

    e.preventDefault();

    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");

});

closeCart.addEventListener("click", function () {

    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");

});

cartOverlay.addEventListener("click", function () {

    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");

});

    const buttons = document.querySelectorAll(".add-cart");


    buttons.forEach(button => {

        button.addEventListener("click", function () {
            

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
