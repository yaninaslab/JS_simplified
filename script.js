console.log("Hello world");

let a = 1;
let b = 2;
let c = 3;

console.log((a + b) / c);
let myName = "Yanina";
console.log("My name is " + myName);

let happy = true;
let fun = false;

console.log(happy && fun);

function sayHi(name) {
  return "Hello " + name;
}

let s = sayHi("Yana");
console.log(s);

function printVariable(variable) {
  console.log(variable);
}

function printName(name, callback) {
  callback("Hello " + name);
}

printName("Sergii", printVariable);

printName("Yana", function (variable) {
  console.log(variable);
});

function one(callback) {
  callback(); // This calls the function Three
  console.log("One"); // One
}
function three() {
  console.log("Three");
}
one(three);
// Three
// One

let printMyName = (name) => {
  console.log(name);
};

printMyName("Yana");

let printHi = (name) => "Hi " + name;

console.log(printHi("Yana"));

// Closures

function print(variable) {
  let c = 3;
  return function func(variable2) {
    console.log(variable);
    console.log(variable2);
    console.log(c);
  };
}

let ab = print(1);
ab(2);

function printA() {
  var answer = 1;
  console.log(answer);
}
printA();
printA();

if (0) console.log("Truthy");

if ([]) {
  console.log("Here");
}

let arr = ["a", "b", "c", "d", "e"];
console.log(arr[2]);

const array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];
console.log(array[0][3]);
console.log(array[1][2]);
console.log(array[2][0]);

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
];

const sum = items.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(sum);

function addByX(num1) {
  const newFunc = (num2) => num1 + num2;

  return newFunc;
}

const addByTwo = addByX(2);
let result = addByTwo(3);

console.log(result);

const users = [
  { id: 1, name: "Al", isActive: true, age: 20 },
  { id: 2, name: "Arif", isActive: true, age: 18 },
  { id: 3, name: "Al Arif", isActive: false, age: 30 },
];
// const names = users
//   .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
//   .filter((user) => user.isActive)
//   .map((user) => user.name);
// console.log(names);

let names2 = users
  .filter((o) => o.isActive === true)
  .sort((a, b) => b.age - a.age)
  .map((user) => user.name);
console.log(names2);

for (let i = 0; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
};
// While loop
// let currentPerson = person;
// while (currentPerson != null) {
//   console.log(currentPerson.name);
//   currentPerson = currentPerson.friend;
// }

// Recursion substituting the while loop
function printNames(currentPerson) {
  if (currentPerson == null) return;
  console.log(currentPerson.name);
  printNames(currentPerson.friend);
}

printNames(person);

// Defining default values
function printName(name) {
  name = name || "Default";
  console.log(name);
}

printName();

const grades = [50, 40, 70];

const average =
  grades.reduce((acc, grades) => {
    return acc + grades;
  }, 0) / grades.length;

console.log(average);

const supporter1 = {
  club: "Milan",

  chant() {
    setTimeout(() => console.log("Forza", this.club));
  },
};

const supporter2 = {
  club: "Inter",
};

supporter2.chant = supporter1.chant.bind(supporter2);
// supporter1.chant();
// supporter2.chant();

function censor() {
  const censoredArr = []; // [ ['asv', 'sds'], ['aaa', 'bbb'] ]

  return function (str1, str2 = "") {
    if (str2) {
      censoredArr.push([str1, str2]);
    } else {
      for (let pair of censoredArr) {
        str1 = str1.replace(new RegExp(pair[0], "gi"), pair[1]);
      }

      return str1;
    }
  };
}

const changeScene = censor();
changeScene("PHP", "JS");
changeScene("backend", "frontend");
console.log(
  changeScene(
    "PHP is the most popular programming language for backend web development"
  )
);

const numbers = [1, 22, 12, 66, 90, 51, 11];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

const developers = [
  {
    id: 1,
    fullName: "Anton Petrov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "React"],
    salary: 1000,
  },
  {
    id: 2,
    fullName: "Ivan Ivanov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "Vue"],
    salary: 950,
  },
  {
    id: 3,
    fullName: "Albert Sidorov",
    skills: ["HTML", "CSS", "JavaScript", "Git", "jQuery"],
    salary: 850,
  },
];

const middleDevelopers = developers.map((dev) => ({
  id: dev.id,
  fullName: dev.fullName,
  skills: [...dev.skills, "TypeScript"],
  salary: dev.salary + 500,
}));

console.log(middleDevelopers);

const names = [
  "Mikhail",
  "Ivan",
  "Albert",
  "John",
  "Ian",
  "Petr",
  "Alexandr",
  "Oleg",
  "Jaroslav",
  "Vsevolod",
];
const shortNames = names.filter((name) => name.length <= 5);
console.log(shortNames);

const products = [
  {
    id: 1,
    name: "Intro to JavaScript",
    category: "books",
    price: 150,
  },
  {
    id: 2,
    name: "Intro to CSS",
    category: "books",
    price: 120,
  },
  {
    id: 3,
    name: "Deep dive into JavaScript",
    category: "books",
    price: 350,
  },
  {
    id: 4,
    name: "Intro to PHP",
    category: "books",
    price: 250,
  },
  {
    id: 5,
    name: "Deep dive into PHP",
    category: "books",
    price: 350,
  },
];

const cheapProducts = products.filter((product) => product.price < 300);
console.log(cheapProducts);

const developers2 = [
  {
    id: 1,
    fullName: "Ivan Ivanov",
    skills: ["HTML", "CSS", "Git", "Gulp", "Pug"],
  },
  {
    id: 2,
    fullName: "Petr Petrov",
    skills: ["HTML", "CSS", "Git", "JavaScript", "npm"],
  },
  {
    id: 3,
    fullName: "Ian Melnikov",
    skills: ["HTML", "CSS", "Git", "JavaScript", "TypeScript"],
  },
  {
    id: 4,
    fullName: "Antonio Banderas",
    skills: ["HTML", "CSS", "Git", "JavaScript", "TypeScript", "React"],
  },
];

const tsDevelopers = developers2.filter((dev) =>
  dev.skills.includes("TypeScript")
);
console.log(tsDevelopers);

const order = [
  {
    id: 1,
    name: "Лопата",
    price: 1000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Удочка",
    price: 1200,
    quantity: 2,
  },
  {
    id: 3,
    name: "Ведро",
    price: 500,
    quantity: 3,
  },
  {
    id: 4,
    name: "Мороженое",
    price: 100,
    quantity: 8,
  },
];

const totalPrice = order.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);
console.log(totalPrice);

const players = [
  {
    id: 1,
    name: "Andres",
    surname: "Iniesta",
    club: "Vissel Cobe",
  },
  {
    id: 2,
    name: "Eden",
    surname: "Hazard",
    club: "Real Madrid",
  },
  {
    id: 3,
    name: "Mo",
    surname: "Salah",
    club: "Liverpool",
  },
  {
    id: 4,
    name: "Lionel",
    surname: "Messi",
    club: "Barcelona",
  },
];

// const messi = players.find((player) => player.surname.includes("Messi"));
const messi = players.find((player) => player.surname === "Messi");
console.log(messi);
