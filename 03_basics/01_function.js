

function sayMyName(){
console.log("N");
console.log("I");
console.log("K");
console.log("H");
console.log("I");
console.log("L"); 
}

// sayMyName()

function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
return number1 + number2
     
}
const result = addTwoNumbers(5, 6)
// console.log("Result: ", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter something");
        
//     }
//     return `${username} justlogged in`
// }
function loginUserMessage(username = null){
    if(!username){
        console.log("Please enter something");
        
    }
    return `${username} justlogged in`
}
console.log(loginUserMessage("Nikhil"))
