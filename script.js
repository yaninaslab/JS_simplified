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
