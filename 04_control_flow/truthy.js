const userEmail = ""
const UserEmails = []

// if(userEmail){
//     console.log("User have email")
// } else{
//     console.log("User don't have email")
// }

// if(UserEmails){
//     console.log("User have one or more than one emails")
// } else{
//     console.log("User don't have email")
// }

/* Falsy Values 
false, 0, "", -0, BigInt 0n, null, undefined, NaN 
*/

/*
Truthy Values
 "0", " ", true, [], {}, function(){}
*/


// if(UserEmails.length === 0 ){
//     console.log("Array is empty")
// }

// const obj = {}

// if(Object.keys(obj).length === 0){
//     console.log("Object is empty")
// }

// Nullish Coalescing operator (??)

/* logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;
console.log(val1)

// Ternary Operator

//  condition ? true : false

const iceTeaPrice = 10
iceTeaPrice>=80 ? console.log("Price is more than or equal to 80") : console.log("Price is less than 80")