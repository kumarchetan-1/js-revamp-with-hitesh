/*
const score = 191

console.log(score);

const num = new Number(1234.567)

// Number Properties (Accessed from the Number constructor):
console.log(Number.MAX_VALUE); // Returns the largest possible number in JavaScript.
console.log(Number.MIN_VALUE); // Returns the smallest possible positive number in JavaScript.
console.log(Number.NaN); // Represents "Not-a-Number" value.
console.log(Number.NEGATIVE_INFINITY); // Represents negative infinity.
console.log(Number.POSITIVE_INFINITY); // Represents positive infinity.

// Number Methods:
console.log(num.toString()); // Converts the Number to a string.
console.log(num.toFixed(2)); // Formats the number with 2 decimal places.
console.log(num.toExponential(2)); // Formats the number using exponential notation with 2 decimal places.
console.log(num.toPrecision(5)); // Formats the number with 5 significant digits.
console.log(num.valueOf()); // Returns the primitive value of the Number object.
console.log(num.toLocaleString("en-IN"))
*/

// +++++++++++    Math (Default Js Library)   ++++++++++++++++// 
/*
console.log(Math);
console.log(Math.abs(-3.33));
console.log(Math.round(-4.3));
console.log(Math.floor(3.9));
console.log(Math.ceil(3.3));
console.log(Math.min(2,3,4,0,-2));
console.log(Math.max(45, 3, 5, 0, -9));
*/

console.log(Math.random()) // returns a random floating-point number in the range [0,1) — that is, between 0 (inclusive) and 1 (exclusive).
const min = 6;
const max = 1;

// Simple way if you know min and max values
console.log(Math.floor(Math.random()*(max-min+1)+min));
// If you don't know the min and max values
console.log(Math.floor(Math.random()*Math.abs(a-b+1)+Math.min(a,b)))