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
    
let A = userInput[0];
let B = 2*(22/7);
let C = A*B;
if((C%1!=0) && (C>=0)){
    console.log(C.toFixed(2));
}
else if (C<0){
    console.log("Error");
}

    
})



