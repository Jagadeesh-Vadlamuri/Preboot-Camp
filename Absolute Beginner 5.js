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
if((a%2==0) && (a!=0)){
    console.log("Even");
}
else if(a%2==1){
    console.log("Odd");
}
else if((a%2!=1) && (a!=0)){
    console.log(Math.round(a));
}
else if(a==0) {
    console.log("Zero");
}
  
    
})