const tinderUser = new Object() singleton object
const tinderUser = {}

tinderUser.id = "kalefaalse"
tinderUser.name = "Nikhil"
tinderUser.isLoggenIn = false
console.log(tinderUser);

const regularUser = {
    email: "kalefaalse@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nikhil",
            lastname: "Akhriya",
        }
    }
}
console.log(regularUser.fullname.userfullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2)
const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
   { id: 1,
    email: "Kalakaua@google.com",
   },

   { id: 2,
    email: "Kalakaua@google1.com",
   },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const Course = {
    Coursename: "Jsmasterclasses",
    cousreinstructor: "Nikhil Sir",
    fee: "FREE"

}
const {cousreinstructor} = Course
console.log(cousreinstructor)



