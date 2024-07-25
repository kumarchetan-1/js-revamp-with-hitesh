// For of loop

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    // console.log(`Number is ${num}`)
}

let greetings = "Nameste Dosto!"

for (const greet of greetings) {
    // console.log(`Greet is ${greet}`)
}

// Maps

let map = new Map()
map.set("In", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
map.set("In", "India")

console.log(map)

for (const [key, value] of map) {
    console.log(key +" :- " + value)
}


// Objects are not iterable using for of loop
myobj = {
    game1: "Go",
    game2: "Chess"
}

for (const [key, value] of myobj) {
    console.log(key, ":-", value)
}