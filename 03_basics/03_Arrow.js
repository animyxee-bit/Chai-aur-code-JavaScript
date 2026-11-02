const user = {
    username: "Nikhil",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); 
        
        

    }

}
user.welcomeMessage()
user.username = "Nikku"
user.welcomeMessage()

function chai (){
    let username = "Nikhil"
    console.log(this.username)
}
chai()

const chai = () => {
    let username = "Nikhil"
    console.log(this.username);}
    
chai()

const chai = () => {
    let username = "perman devil"
    console.log(this); 
    
}
chai()
function kala = (num1, num2) = (num1 + num2) 
const kalakabutar = (num1, num2) = (num1 + num2) 