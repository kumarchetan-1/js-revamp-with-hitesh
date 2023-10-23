
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

function addTwoNumber(num1, num2){ // Here num1 and num2 called Parameters
    let result = num1+num2
    return result;
    // console.log("Chetan"); // Any value after return statement not get executed
}

let result = addTwoNumber(4,9) // Here 4, 9 are called Arguments
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

//  console.log(loginMessage("Chetan"));

function shoppingCartPrice(...num) { // Here ... => is used as Rest operator, sometimes it is used as spread operator as we have used it in object and array merging

    return num
    
}

console.log(shoppingCartPrice(200, 400, 900)); // this returns [ 200, 400, 900 ] array

function shoppingCartPrice2(item1, item2, ...item) { // Here ... => is used as Rest operator, sometimes it is used as spread operator as we have used it in object and array merging

    return item
}

console.log(shoppingCartPrice2(200, 400, 900, 2999)); // returns because first two arguments are assigned to first two parameters [ 900, 2999 ]


// Passing Arrays and Objects in the function

let loginUser = {
    name: "Sam",
    age: 23
}

function showObject(yourObject){
    return `User name is ${yourObject.name} and age is ${yourObject.age}`
}

console.log(showObject(loginUser));


// Array

let myNewArray = [2, 4, 1, 5, 6]

function returnArrayValues(yourArray) {
    return yourArray[0]
}

console.log(returnArrayValues(myNewArray));