const mySym = Symbol("key1 ")


const JsUser = {
    name: "Nikhil",
    "full name": "Nikhil Akhriya",
    [mySym]: "mykey1",
    age: 20,
    email: "Nikhil@google.com",
    location: "Delhi",
    isLoggedIn: false,
    LastLoginDays:["Monday", "Sunday"],
}
// console.log(JsUser.LastLoginDays)
// console.log(JsUser["full name"])
// console.log( typeof JsUser[mySym])
// console.log(JsUser)
JsUser.name = "Nikku"
JsUser.email = "Permandevilesports.com"
Object.freeze
// console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello JS Master");
}
JsUser.greetingtwo = function(){
    console.log(`Hello JS Master, ${this.location}` );
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
