
let coding = ["cpp", "js", "java", "py"]

let languages = coding.forEach((item)=> item)
// console.log(languages)
//  forEach don't return any value implicitly

let programming = []
// coding.forEach((item)=> programming.push(item))
coding.forEach((item)=> {
    if(item == "cpp"){
        programming.push(item)
    }
})
// console.log(programming) 

// Using filter

let filteredArr = coding.filter((item)=> item)
// console.log(filteredArr)

// another example

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filteredNums = myNums.filter((num)=> { return num > 4})
// console.log(filteredNums)

const books = [
    {
        title: "The Bhagavad Gita",
        genre: "Spiritual",
        author: "Vyasa",
        publish: -400  // The Bhagavad Gita is believed to have been written around 400 BCE.
    },
    {
        title: "Ramayana",
        genre: "Epic",
        author: "Valmiki",
        publish: -500  // The Ramayana is estimated to have been composed around 500 BCE.
    },
    {
        title: "Mahabharata",
        genre: "Epic",
        author: "Vyasa",
        publish: -400  // The Mahabharata is believed to have been composed around 400 BCE.
    },
    {
        title: "Upanishads",
        genre: "Philosophy",
        author: "Various",
        publish: -600  // The Upanishads were composed between 800 BCE and 400 BCE.
    },
    {
        title: "Patanjali's Yoga Sutras",
        genre: "Philosophy",
        author: "Patanjali",
        publish: -200  // The Yoga Sutras are believed to have been written around 200 BCE.
    },
    {
        title: "The Vedas",
        genre: "Religious",
        author: "Unknown (Various Sages)",
        publish: -1500  // The Vedas are some of the oldest scriptures, dated around 1500 BCE.
    },
    {
        title: "Bhagavata Purana",
        genre: "Spiritual",
        author: "Vyasa",
        publish: 900  // The Bhagavata Purana is believed to have been composed around 900 CE.
    },
    {
        title: "Arthashastra",
        genre: "Political Science",
        author: "Kautilya (Chanakya)",
        publish: -300  // The Arthashastra is dated around 300 BCE.
    },
    {
        title: "Tirukkural",
        genre: "Ethics",
        author: "Tiruvalluvar",
        publish: 300  // The Tirukkural is believed to have been composed around 300 CE.
    },
    {
        title: "The Alchemist of the East",
        genre: "Spiritual",
        author: "Rudrani Devi",
        publish: 2019  // A modern book that blends spiritual insights with fiction.
    }
];

let userBooks = books.filter((book)=> book.author == "Vyasa")

userBooks = books.filter((book)=>{
    return book.genre == "Political Science" || book.genre == "Ethics"
})
console.log(userBooks)