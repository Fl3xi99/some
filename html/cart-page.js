// GEBRUIK DE CART UIT cart.js
// (dus GEEN nieuwe let cart)

const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

function renderColorDot(colorHex) {
  // Twee vaste kleuren → split circle
  if (Array.isArray(colorHex) && colorHex.length === 2) {
    return `
      <span class="cart-color-dot split"
        style="--c1:${colorHex[0]}; --c2:${colorHex[1]};">
      </span>
    `;
  }

  // Eén kleur → normale circle
  return `
    <span class="cart-color-dot"
      style="background:${colorHex};">
    </span>
  `;
}


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
    <span class="cart-item-title">
      ${item.name}
      <span class="cart-color-wrap">
      ${renderColorDot(item.colorHex)}

        ${item.colorName}
      </span>
    </span>

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
