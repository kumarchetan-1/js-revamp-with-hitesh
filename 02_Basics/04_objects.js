
// const tinderUser = new Object() // singleton Object

const tinderUser = {}

tinderUser.name = "Mark"
tinderUser.id = "00asdf"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "chetan@codeplay.com",
    fullName: {
        userFullName:{
            fName: "Chetan",
            lName: "Kumar"
        }
    }
}


// console.log(regularUser.fullName.userFullName.fName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = { obj1, obj2};
const obj3 = Object.assign({}, obj1, obj2) // {}=> is the target object and obj1 and obj2 are source objects although without target object it also get assigned to first of the source elements

const obj5 = {...obj1, ...obj2} // Spread operator

// console.log(obj5);
// console.log(obj3) // returns { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1) // this also becomes { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } without using blank object {} so to get rid of it we use {} blank object while using assign method on object


const users = [
    {
        name: "Chetan",
        email: "chetan@codeplay.com"
    },
    {
        name: "Chandra",
        email: "chandra@codeplay.com"
    },
    {
        name: "Chandragupta",
        email: "Chandragupta@codeplay.com"
    }
]

// console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // returns an array of keys only
console.log(Object.values(tinderUser)); // returns an array of values only
console.log(Object.entries(tinderUser)); // returns an array of arrays of key and values both
console.log(tinderUser.hasOwnlProperty("isLoggedIn")); // returns true and false values