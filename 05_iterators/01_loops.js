// For Loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number")
//     }
//     console.log(element)
// }

// break and continue      

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number");
//         break //  It will not print values after printing 4
//     }
//     console.log(element)
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number");
//         continue //  It will just skip the value of the conditional iteration but prints the next values in the loop
//     }
//     console.log(element)
// }

// Loop over arrays

const superHeroes = ["Shri Ram", "Shree Krishna", "Bajrangbali", "Mahakaal"]

for (let i = 0; i < superHeroes.length; i++) {
    const element = superHeroes[i];
    console.log(`My superhero is ${element}`)
}

// Nesting in loops

let daysToGo = 13;

