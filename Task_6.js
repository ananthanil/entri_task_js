var readlineSync = require("readline-sync");

let grade = parseInt(readlineSync.question("Please enter your mark : "));

if (grade >= 60) {
  console.log("Passed");
} else {
  console.log("Failed");
}
