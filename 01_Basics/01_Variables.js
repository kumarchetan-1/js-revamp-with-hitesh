const accountId = 12345
let accountEmail = "kumarchetan.npr@gmail.com"
var accountPassword = "asdf@123"
city = "Bijnor" // Not prefer to use

let accountState; // Undefined

// accountId = 43432432  // Not allowed

/* 
Prefer not to use var because of it is not scope binding 
i.e Not functional or block scope binding 
Which means if you declare it in a for loop, function or if condition etc. then
it will be available to other parts of the program
and this problem was initially in the javascript so later let keyword is introduced to solve the problem
*/

accountEmail = "test@gmail.com"
accountPassword = "hjkl@4321"
city = "Noida"

console.log(accountId)

console.table([accountEmail, accountPassword, city, accountState])

console.log(typeof(city))