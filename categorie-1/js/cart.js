let carts = Array.from(document.querySelectorAll(".categorie__wrapper-item"));
let products = [];
carts.forEach((cart) => {
  const btn = cart.querySelector(".categorie__wrapper-btn");

  const img = cart.querySelector(".categorie__wrapper-img");
  const descr = cart.querySelector(
    ".categorie__wrapper-description"
  ).textContent;
  const tag = descr;
  const money = Number(
    cart.querySelector(".categorie__wrapper-money").textContent.split("lei")[0]
  );

  const product = {
    tag,
    img,
    descr,
    money,
    inCart: 0,
  };
  products.push(product);

  btn.addEventListener("click", () => {
    cartNumbers(money);
    setItem(product);
  });
});

const setItem = (product) => {
  let cartItems = localStorage.getItem("productsInCart");

  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }

    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  console.log("carts : > ", cartItems);

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
};

const cartNumbers = (money, product) => {
  const totalPrice = parseInt(localStorage.getItem("totalPrice")) + money;

  if (totalPrice) {
    localStorage.setItem("totalPrice", totalPrice);
    document.querySelector(".cart__money").textContent = totalPrice + " lei";
  } else {
    localStorage.setItem("totalPrice", totalPrice);
    document.querySelector(".cart__money").textContent = totalPrice + " lei";
  }
};
