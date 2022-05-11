const products = [
  {
    id: 1,
    title: "Lenovo Yoga",
    price: 3000,
  },
  {
    id: 2,
    title: "Acer Aspire",
    price: 1800,
  },
  {
    id: 3,
    title: "Dell Vostro",
    price: 3400,
  },
];

let order = [];

function addToBasket(productId) {
  // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
  if (order.find((el) => el.id === productId))
    return alert("The item is already in the cart");
  // TODO: если товар еще не в корзине, добавить его из массива products
  const product = products.find((item) => item.id === productId);
  order = [...order, product];
  // Эти строчки не трогаем, они отвечают за переотрисовку страницы
  renderCart();
  rerenderTotalPrice();
}

function removeFromBasket(productId) {
  order = order.filter((item) => item.id !== productId);
  // TODO: описать логику удаления товара из корзины

  // Эти строчки не трогаем, они отвечают за переотрисовку страницы
  renderCart();
  rerenderTotalPrice();
}

function rerenderTotalPrice() {
  const totalPrice = order.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  // TODO: опишите функционал подсчета общей стоимости заказа

  // Не меняйте эту строчку
  document.getElementById("total").innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
  const cart = document.getElementById("basket-items");

  cart.innerHTML = "";
  order.forEach((item) => {
    const el = document.createElement("li");
    el.innerText = item.title;
    el.onclick = () => removeFromBasket(item.id);
    cart.appendChild(el);
  });
}

// const buttons = document.getElementsByClassName("accordion");
// const panel = document.getElementsByClassName("panel");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     const panel = buttons[i].nextElementSibling;
//     panel.classList.toggle("show");
//   });
// }
const buttons = document.querySelectorAll(".accordion");
buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.classList.toggle("show");
  })
);

const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClick);
}

function handleClick(event) {
  const btn = event.target;

  btn.dataset.clicked = +btn.dataset.clicked + 1;
}
