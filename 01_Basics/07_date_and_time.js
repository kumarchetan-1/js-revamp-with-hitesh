const myDate = new Date();

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.getTime())
// console.log(typeof(myDate))

// const customDate = new Date(10, 11, 2023) // Invalid Form
const customDate1 = new Date(2023, 10, 22)
const customDate2 = new Date("2023, 01, 22")
const customDate21 = new Date("2023/01/22")
const customDate22 = new Date("01/05/2023")
const customDate3 = new Date(22, 10, 2023, 6, 20)

// console.log(customDate22.toLocaleString())
// console.log(customDate1.toLocaleString())
// console.log(customDate2.toLocaleString())
// console.log(customDate3.toLocaleString())

let myCreatedDate = new Date("05/19/2000")
let currentTimeStamp = Date.now(); // Gives you the time from 1st Jan 1972 midnight to now in milliseconds
console.log(currentTimeStamp); // in milliseconds from 1st Jan 1972 Midnight
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime()); // in Milliseconds from from 1st Jan 1972 midnight

console.log(Math.round(Date.now()/100)) // Conversion from milliseconds to seconds

myCreatedDate.toLocaleString("en-IN",{
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})

console.log(myCreatedDate)