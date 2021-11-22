const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", () => {

//Start Code

var Jags = userInput[0];
console.log(Jags)

//End Code

})
