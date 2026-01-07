
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

cartBtn.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartMenu);
cartOverlay.addEventListener("click", closeCartMenu);

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("show");
}

function closeCartMenu() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("show");
}

function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} (€${item.price.toFixed(2)})
      <button onclick="removeFromCart(${index})">✕</button>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

renderCart();

