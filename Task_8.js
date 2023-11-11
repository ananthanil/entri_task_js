var readlineSync = require("readline-sync");

let age = parseInt(readlineSync.question("Please enter your age : "));

if (age >= 0 && age <= 12) {
  console.log("you are a child");
} else if (age >= 13 && age <= 19) {
  console.log("you are a teenager");
} else if (age >= 20 && age <= 59) {
  console.log("you are an adult");
} else if (age >= 60) {
  console.log("you are a senior");
} else {
  if (age < 0) {
    console.log("oops !!! negative age not allowed please entre postive age");
  } else {
    console.log("oops !!! Blank data not allowed");
  }
}
