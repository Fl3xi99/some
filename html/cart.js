// LOAD CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ELEMENTS
const cartBtnDesktop = document.getElementById("cartBtnDesktop");
const cartBtnMobile = document.getElementById("cartBtnMobile");

const cartCountDesktop = document.getElementById("cartCountDesktop");
const cartCountMobile = document.getElementById("cartCountMobile");

// UPDATE COUNT (SAFE)
function updateCartCount() {
  if (cartCountDesktop) cartCountDesktop.textContent = cart.length;
  if (cartCountMobile) cartCountMobile.textContent = cart.length;
}

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  console.log("Added to cart:", name);
}

// OPTIONAL: cart button click (debug / later cart page)
if (cartBtnDesktop) {
  cartBtnDesktop.addEventListener("click", () => {
    // alert(`Items in winkelmand: ${cart.length}`);
    window.location.href = "cart.html";
  });
}

if (cartBtnMobile) {
  cartBtnMobile.addEventListener("click", () => {
    // alert(`Items in winkelmand: ${cart.length}`);
    window.location.href = "cart.html";
  });
}

// INIT
updateCartCount();
