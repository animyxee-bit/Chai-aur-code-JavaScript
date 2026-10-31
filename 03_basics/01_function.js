

// function sayMyName(){
// console.log("N");
// console.log("I");
// console.log("K");
// console.log("H");
// console.log("I");
// console.log("L"); 
// }

// // sayMyName()

// function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
// return number1 + number2
     
// }
// const result = addTwoNumbers(5, 6)
// console.log("Result: ", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter something");
        
//     }
//     return `${username} justlogged in`
// }
// function loginUserMessage(username = null){
//     if(!username){
//         console.log("Please enter something");
        
//     }
//     return `${username} justlogged in`
// }
// console.log(loginUserMessage("Nikhil"))

// function calculateCartPrice(val1, val2, ...num1){
//     return num1 
// }
// console.log(calculateCartPrice(200, 2000, 500, 1111111, 333333, 335555, 555555));

// const user = {
//     username: "Nikhil", 
//     prices: 1999
// }

// function handleobject(anyobject){
//     console.log(`User name is ${anyobject.username} and Price is ${anyobject.price}`);
    
// }
// handleobject(user)
// handleobject({
//     username: "nikku",
//     price: 2999
// })
// const myNewArray = [200, 300, 400]
// function returnSecondvalue(getArray){
//     return getArray [1]
// }
// console.log(returnSecondvalue(myNewArray))





function sayMyName(){
console.log("N");
console.log("I");
console.log("K");
console.log("H");
console.log("I");
console.log("L");
}
// sayMyName()

function addTwoNumbers(number1, number2) {
    number1 + number2 
}
addTwoNumbers()
console.log(10 + 20);
 
function loginUserMessage(username){
    if (username === undefined) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

function calculateCartPrice(val1, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 600, 800, ));
const user = {
    username: "Nikhil",
    price: 2999
}
function handleobject(anyobject) {
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user)
handleobject({
    username: "Nikku",
    price: 3999

})

const myNewArray = [1000, 2000, 4000, 9000]
function returnSecondvalue(getArray) {
    return getArray[3]
}
console.log(returnSecondvalue(myNewArray));
