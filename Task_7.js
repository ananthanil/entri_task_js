var readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question("Please enter a number : "));

if (number < 0) {
  console.log(number, "is negative number");
} else if (number > 0) {
  console.log(number, "is  positive number");
} else {
  console.log("Entered number is zero");
}
