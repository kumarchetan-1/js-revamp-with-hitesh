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
    //   console.log(numToString)
    //   console.log(typeof numToString)


      // ******************. OPERATIONS *************** //

      let numb = 3
      let negNumb = -numb
    //   console.log(negNumb)

      /*
      console.log(2+2)
        console.log(2-2)
        console.log(2*2)
        console.log(3**2)
        console.log(7/2)
        console.log(9%2)
      */

        let str1 = "Chetan"
        let str2 = " Kumar"
        let fullName = str1 + str2
        // console.log(fullName)

        // console.log("1" + 2)
        // console.log(1 + "2")
        // console.log("1" + "2")
        // console.log("1" + 2 + 2)  // results in 122
        // console.log(1 + 2 + "2") // results in 32
        // console.log(3+4*5/3); // Not preferred although * < / < +


        // refer this link to follow for more - https://tc39.es/ecma262/#sec-toprimitive

        console.log(true) // prints true
        console.log(+true) // converts to 1
        // console.log(true+) // Throw error

        let num1, num2, num3
        num1 = num2 = num3 = 3 + 3


        let gameCounter1 = 100
        let gameCounter2 = 100
        const topCount = gameCounter1++ // first returns the value then increment
        const botCount = ++gameCounter2 // first increment the value then returns
        

        console.log(topCount)
        console.log(botCount)

//         If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


        // link to study - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment




