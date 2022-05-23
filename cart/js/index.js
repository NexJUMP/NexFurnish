const displayCart = () => {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".cart__items");

  if (cartItems && productContainer) {
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="cart__item">
      <img class="cart__close" src="./images/close.svg" alt="close">
      <img class="cart__img" src="./images/items/${item.tag}.jpg" alt="item">

      <div class="cart__text">${item.descr}</div>
      <div class="cart__money">${item.money * item.inCart} lei</div>
      <div class="cart__quantity">
          <div class="cart__menus">-</div>
          <div class="cart__quantity-number">1</div>
          <div class="cart__plus">+</div>
      </div>
  </div>
      `;
    });
  }
};

displayCart();

const buttonBuy = document.querySelector(".cart__total-btn");

buttonBuy.addEventListener("click", () => {
  localStorage.clear();
  alert("Succes");
  document.location.reload(true);
  const money = (document.querySelector(".cart__total-money").textContent =
    0 + " lei");
});

const money = (document.querySelector(".cart__total-money").textContent =
  localStorage.getItem("totalPrice") + " lei");

const deleteButtons = document.querySelectorAll(".cart__close");

deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.remove();
  });
});
