let score1 = 33
let score2 = "33"
let score3 = "33abc"
let score4 = null
let score5 = undefined
let score6 = true
let score7 = "Chetan"


// console.log(typeof score1) // returns number data type
// console.log(typeof(score2)) // returns string data type

let valueInNumber = Number(score7); 

// console.log(typeof(valueInNumber)) // returns number type
// console.log(valueInNumber) // returns NaN - Not a number

/* "33" => 33
   "33abc" => NaN
   true => 1, false => 0

   */


   let isLoggedIn = "Name"
   let intToBoolean = Boolean(isLoggedIn)
//    console.log(intToBoolean)

   /*
      1 => true, 0 => false
      "" => false, 
      "Name" = true
   */

      let num = 33
      let numToString = String(num)
      console.log(numToString)
      console.log(typeof numToString)