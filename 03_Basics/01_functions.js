
function printMyName(){
    console.log("C");
    console.log("H");
    console.log("E");
    console.log("T");
    console.log("A");
    console.log("N");
}
// printMyName => without parenthesis function holds its reference
// printMyName() // Function call with parenthesis

// function addTwoNumber(num1, num2){
//     console.log(num1+num2);
// }

// addTwoNumber() // It will return NaN
// addTwoNumber(1, "4") // Returns 14
// addTwoNumber(1, "C") // 1C
// addTwoNumber(1, 8) // 9

function addTwoNumber(num1, num2){
    let result = num1+num2
    return result;
    // console.log("Chetan"); // Any value after return statement not get executed
}

let result = addTwoNumber(4,9)
// console.log("Result is : " + result);


function userLoginMessage(userName){
   return `${userName} just logged in!`
}

// console.log(userLoginMessage("Chetan"));

function loginMessage(userName = "Sam"){
    if (!userName) {   // This codition will never happen as long as it is given default while declaring
        return "You have not provided any user name"
    }
    return `${userName} just logged in!`
 }

 loginMessage("Chetan")