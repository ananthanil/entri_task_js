var readlineSync = require("readline-sync");

let age = parseInt(readlineSync.question("Please enter your age : "));

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("Sorry! you can't vote");
}
