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
if((a==1) || (a==3) || (a==5) || (a==7) || (a==8) || (a==10) || (a==12)){
    console.log("31");
}
else if((a==4) || (a==6) || (a==9) || (a==11)) {
    console.log("30");
}
else if(a==2){
    console.log("28")
}
else if((a==0) || (a>12)){
    console.log("Error");
}

    
})