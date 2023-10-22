// Arrays
// ()=> Parenthesis {}=> Curly Braces, []=> Square Brackets or Brackets

const myArr1 = [1,2,3,4]
const mySuperHeroes =["Shaktiman", "Nagaraja"]

const myArr2 = new Array(1,3,5,7,9)
// console.log(myArr2[0])

myArr2.push(4); // [1, 3, 5, 7, 9]
myArr2.push(6); // [1, 3, 5, 7, 9, 6]
myArr2.pop(); // Removes the last value i.e 6

myArr2.unshift(2); // [2, 1, 3, 5, 7, 9, 6] adds in the starting
myArr2.shift(); // [1,3, 5, 7, 9,6] removes from start

// console.log(myArr2.includes(0));  // return boolean value, here "false"
// console.log(myArr2.indexOf(5)); // return index of the given value i.e 2 if not present in the array it returns -1

console.log("Before join " + myArr2); // Array converts into string
const newArr = myArr2.join(); // converts it into string data type

// console.log(newArr); // returns "1,3, 5, 7, 9,6" without brackets
// console.log(typeof newArr); // Returns "string"

console.log(myArr2); 

// slice and splice

console.log("Before slice main array is " + myArr2);

let mynum1 = myArr2.slice(1,3)
console.log("Sliced array is "+ mynum1);
console.log("After slice main array is " + myArr2);


let mynum2 = myArr2.splice(1,2);
console.log("Spliced  Array is "+ mynum2); // Splice include element at the end index provided
console.log("After Spliced Main Array is " + myArr2); // Splice removes the spliced elements from the main array
