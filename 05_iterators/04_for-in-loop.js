
const myobj = {
    js : "javascript",
    cpp : "C++",
    py : "python",
    swift: "swift by apple"
}

for (const key in myobj) {
//    console.log(key, myobj[key])
}

const programming = ["js", "cpp", "swift", "py"]

for (const key in programming) {
    // console.log(`Value of key ${key} is ${programming[key]}`)
}


// Map
// For in loop doesn't work on Map objects because The entries in a Map are not enumerable properties. This means they do not show up in the list of properties when iterating with for...in
let map = new Map()
map.set("In", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
map.set("In", "India")

for (const key in map) {
    // console.log(key)
}