// IIFE => Immediately invoked function expression

// Used to invoke functions immediately to safeguard from the pollution of global variables


// Named IIFE
(function runApp(){
  console.log("Database connected!");
})(); // This semicolon is required if you are using two IIFEs because then it got to know where to end the expression

// Unnamed IIFE
((name)=>{
  console.log(`${name} Your Database connected!`);
})("Chetan");

(()=>{
    console.log("Database connected!");
  })()

  console.log("hello")