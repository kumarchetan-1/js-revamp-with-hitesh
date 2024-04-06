// If

if(true){
// Code here will run
}

 if(false){
//   Code here will now run
 }

//  const temp = 41;

//  if(temp<50){
//     console.log("Temperature is less than 50");
//  } else{
//     console.log("Temp is greater than or equal to 50")
//  }

//  console.log("Execution is must");

//   ==, <, >, <=, >=, ===, !=, !==

// const score = 400;

// if(score > 300){
//     let power = "Fly"
//     console.log(`You are unstopable, your power is ${power}`)
// }
// console.log(`You are unstopable, your power is ${power}`)

/* Shorthand properties */

const balance = 1000000;
// Don't use this syntax, it is the attribute of immature coder, don't use comma with shorthand syntax, it is not readable, 
// if(balance>0) console.log("You are not bankrupt!!"), console.log("bounce back")
/* if(balance>0) console.log("You are not bankrupt!!"), 
console.log("bounce back"); */

// Multiple conditions or nested conditions 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("You can purchase properties");
}

if(loggedInFromEmail|| loggedInFromGoogle){
    console.log("User Logged In!!");
}

