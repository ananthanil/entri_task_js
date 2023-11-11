var readlineSync = require("readline-sync");

let firstNumber = parseInt(readlineSync.question("Enter the first number : "));

let secondNumber = parseInt(
  readlineSync.question("Enter the Second number : ")
);

let product = parseFloat(firstNumber * secondNumber);

console.log(firstNumber + " * " + secondNumber + " = " + product);
