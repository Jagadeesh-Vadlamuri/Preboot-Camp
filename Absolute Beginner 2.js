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
let b = (1/4)*(Math.sqrt(3))

console.log((b*(a**2)).toFixed(2));
    
    
})