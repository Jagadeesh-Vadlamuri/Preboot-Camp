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

let a = userInput[1].split(" ").length;
let c = userInput[1].split(" ");
let d = userInput[0].split(" ");
let b = userInput[1].split(",").join("");
let sum = 0;
let k = Number(d[1]);

for(i=0; i<c.length; i++){
    sum+=Number(c[i]);
}

console.log(a, k);
console.log(b);




})