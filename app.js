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

const buttonClick = document.querySelector("button");
const inputs = document.querySelectorAll("input");

const form = document.querySelector("form");

inputs.forEach((input) => input.addEventListener("keypress", handleEvent));

form.addEventListener("submit", handleSubmit);

function handleEvent(event) {
  //   console.log(event);
  //   console.dir(event.target);

  if (event.key === "Enter") {
    event.preventDefault();
    event.target.nextElementSibling.focus();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (validate()) {
    // submit AJAX
    form.reset();
  } else {
    alert("Fix empty fields");
  }
}

function validate() {
  let isValid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      isValid = false;
    } else {
      input.style.borderColor = "currentColor";
    }
  });
  return isValid;
}

const list = document.getElementById("todos");
document.querySelector("button").addEventListener("click", handleClick);
document.addEventListener("DOMContentLoaded", loadTodos);

function handleClick() {
  const newTodo = this.previousElementSibling.value.trim();

  if (newTodo) {
    // add todo
    createTodo(newTodo);
    saveToStorage(newTodo);
    removeFromStorage(newTodo);
    this.previousElementSibling.value = "";
  } else {
    alert("input field is empty ");
  }
}

function saveToStorage(todo) {
  const todos = JSON.parse(localStorage.getItem("tasks")) || [];

  localStorage.setItem("tasks", JSON.stringify([...todos, todo]));
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("tasks"));

  if (todos) {
    todos.forEach((todo) => createTodo(todo));
  }
}

function createTodo(text) {
  const li = document.createElement("li");
  li.innerText = text;
  li.className = "todo-item";
  li.addEventListener("click", removeTodo);

  list.appendChild(li);
}

function removeFromStorage(removedTodo) {
  const todos = JSON.parse(localStorage.getItem("tasks")) || [];

  localStorage.setItem(
    "tasks",
    JSON.stringify(todos.filter((todo) => todo !== removedTodo))
  );
}

function removeTodo() {
  this.removeEventListener("click", removeTodo);
  removeFromStorage(this.innerText);
  this.remove();
}
