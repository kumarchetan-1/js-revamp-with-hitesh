
let coding = ["cpp", "js", "java", "py"]

let languages = coding.forEach((item)=> item)
// console.log(languages)
//  forEach don't return any value implicitly

let programming = []
coding.forEach((item)=> programming.push(item))
// console.log(programming) 

// Using filter

let filteredArr = coding.filter((item)=> item)
// console.log(filteredArr)

// another example

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filteredNums = myNums.filter((num)=> { return num > 4})
console.log(filteredNums)