var readlineSync = require("readline-sync");

let length = parseInt(readlineSync.question("Enter the Length : "));

let width = parseInt(readlineSync.question("Enter the Width : "));

let area = parseFloat(length * width);

console.log("The area of the rectangle is ", area);
