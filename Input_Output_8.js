const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
//   const inputString = data.toString();
//   const userArray = inputString.split(",");
//  console.log(inputArray);// array of given inputs
//Your code goes here
});
inp.on("close", () => {

let a = userInput[0];
let b = a.split(" ")[0];
let c = a.split(" ")[1];
let d = a.split(" ")[2];
console.log(b);
console.log(c);
console.log(d);


})