// Singleton => Object.create()

const Animal = {
    type: "Invertebrates",
    displayType() {
        console.log(this.type)
    },
}

const animal1 = Object.create(Animal);
animal1.displayType() // Invertebrates

const fish = Object.create(Animal)
fish.type = "Fish"
fish.displayType() // Fish


// Object Literals

let mySymbol = Symbol("key1");
console.log(typeof mySymbol);


let appUser = {
    name: "Chetan Kumar",
    [mySymbol]: "Value1",
    "sirName": "Saini",
    age: 23,
    location: "Bijnor",
    email: "kumarchetan.npr@gmail.com",
    isLoggedIn: true,
    lastLoginDay: []
}

// Dot notation and bracket notation for getting Objects value
console.log(appUser.name);
console.log(appUser["name"]); // Preferred way because if the keys in the object are declared in double quotes then you will not get value using dot notation
console.log(typeof appUser[mySymbol]);




// Getting Only symbols and all key value pairs as direct for loop will not work for symbols on Object
/*
const object = {
    [Symbol('foo')]: 'bar',
    [Symbol('baz')]: 'qux',
    name: "Chetan"
  };
  
  const keys = Reflect.ownKeys(object); // To get all properties including symbols in an array, use for loop to print values.
  const symbols = Object.getOwnPropertySymbols(object); // To return only Symbol properties array, use for loop to print values.
  
  for (const symbol of symbols) {
    console.log(symbol, object[symbol]);
  }
*/