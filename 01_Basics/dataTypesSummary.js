//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n

console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ********************** Memory Types ******************

// Stack(used in primitive data types => copy)  
// Heap(used in non-primitive data types => reference)

// Stack gives the copy of the value you have declared and 
// in Heap you get the reference of the original value 


let myYoutubeName = "chetankumar.me"
let anotherName = myYoutubeName
anotherName = "Code@9Pm"

let userOne = {
    name: "Chetan",
    upi: "kumarchetan.npr@oksbi"
}

let userTwo = userOne 
userTwo.name = "Chandra"

console.log(myYoutubeName)
console.log(anotherName)
console.log(userOne.name);
console.log(userTwo.name);
