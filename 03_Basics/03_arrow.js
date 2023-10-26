
// Fat arrow functions are introduced in ES6 (2015)

const userInfo = {
    name: "Chetan",
    feeSubmitted: 2000,
    messageToUser: function () {
        console.log(`${this.name}, please submit your remaining fees!`); // Here this works as an context variable
        console.log(this);
    }
}

// userInfo.messageToUser()

userInfo.name = "Coding Round"
// userInfo.messageToUser()

console.log(this) // returns {} here in node but in browser it returns window object which contains so many methods



// function student() {
//     console.log(this);
// }   

// But here this returns so many properties of the global object

// const student = function() {
//     const name = "Chetan"
//     console.log(this.name); // returns {} undefined
//     // console.log(this);
// }  
// same output as above for this


// In fat arrow functions ()=> this keyword is not accessible
const student = () => {
    const name = "Chetan"
    console.log(this.name); // returns {} undefined
    console.log(this); // Here also it returns {} (empty object)
}  

student()


// Different ways of writing fat arrow functions

// const addTwoNumbers = function(num1, num2) {
//   return num1+num2
// }
// const addTwoNumbers = (num1, num2) => num1+num2 // No need to write return keyword to return the value
const addTwoNumbers = (num1, num2) => (num1+num2) // Same here
const greetings = (num1, num2) => ({message: "Jai Hind!"}) // way to declare an object without using return keyword

console.log(addTwoNumbers(5, 3))
console.log(greetings(5, 3)) // returns object
console.log(greetings())  // same output as above 