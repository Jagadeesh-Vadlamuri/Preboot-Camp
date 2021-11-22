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
let b = userInput[1];
let c = userInput[2];
console.log(a);
console.log(b);
console.log(c);

    
    
    
    

    
    
})
    
    
