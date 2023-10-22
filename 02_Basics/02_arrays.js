// arrays part 2

const marbleHeroes = ["Thor", "IronMan", "SpiderMan"];
const dcHeroes = ["Superman", "Batman", "Flash"]

// marbleHeroes.push(dcHeroes)

// console.log(marbleHeroes) // [ 'Thor', 'IronMan', 'SpiderMan', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marbleHeroes[3][1]) // Batman

// const mixedHeroes = marbleHeroes.concat(dcHeroes);
// console.log(mixedHeroes); // [ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Batman', 'Flash' ]

// Spread operator 
const mixedHeroes = [...marbleHeroes, ...dcHeroes]
console.log(mixedHeroes); // [ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Batman', 'Flash' ]

const ranks = [1, 2, 3, 4, [5, 6,], [7, 9, [8]]]

const allRanks = ranks.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(allRanks);


console.log(Array.isArray("Chetan Kumar")); // Returns false 
//  Shift + option + down key => Duplicate the line
console.log(Array.from("Chetan Kumar")); 
/* 
[
    'C', 'h', 'e', 't',
    'a', 'n', ' ', 'K',
    'u', 'm', 'a', 'r'
  ]
  */
console.log(Array.from({name: "Chetan Kumar"})); // returns [] Interesting

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3)); // [ 100, 200, 300 ]