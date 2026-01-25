// GEBRUIK DE CART UIT cart.js
// (dus GEEN nieuwe let cart)

const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

function renderCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <li class="cart-item">Je winkelwagen is leeg.</li>
    `;
    cartTotalEl.textContent = "0.00";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <span>${item.name}</span>
      <span>
        €${item.price.toFixed(2)}
        <button onclick="removeItem(${index})">✕</button>
      </span>
    `;

    cartItemsEl.appendChild(li);
  });

  cartTotalEl.textContent = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();

  // ook teller in navbar updaten
  if (typeof updateCartCount === "function") {
    updateCartCount();
  }
}

// INIT
renderCart();
