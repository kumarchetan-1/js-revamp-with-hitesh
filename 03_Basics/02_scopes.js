

var a = 200; // function-scoped variable
let b = 300; // block-scoped variable
const c = 500;

if (true) {

var a = 2;
let b = 3;
const c = 5;

// console.log(a); // 2
// console.log(b); // 3
// console.log(c); // 5
}

// console.log(a); // 2
// console.log(b); // 300
// console.log(c); // 500

function one() {
    const userName = "Chetan Kumar"

    function two() {
        channelName = "Coding Round"
        // console.log(userName)
    }
    // console.log(channelName); // will not work due to local scope of channelName

    two()
}
one()

if (true) {
    const userName = "Chetan Kumar"
    if(userName === "Chetan Kumar"){
        const channelName = "Coding Round"
        // console.log(userName)
    }
    // console.log(channelName)
}
// console.log(userName)

console.log(incrementOne(5)); // returns 6

function incrementOne(num) {
    return num + 1
}

console.log(incrementTwo(9)); // Error => Cannot access 'incrementTwo' before initialization

const incrementTwo = function(num){
    return num + 2;
}