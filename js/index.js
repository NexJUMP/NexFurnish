const button = document.querySelector(".menu__button");
localStorage.getItem("totalPrice") || localStorage.setItem("totalPrice", 0);
button.addEventListener("click", () => {
  const list = document.querySelector(".menu__list");
  list.classList.toggle("menu__list--active");
});

const onLoadTotalPrice = () => {
  const totalPrice = localStorage.getItem("totalPrice");

  if (totalPrice) {
    document.querySelector(".cart__money").textContent = totalPrice + "lei";
    document.querySelector(".header__cart-money").textContent =
      totalPrice + "lei";
  }
};

onLoadTotalPrice();
