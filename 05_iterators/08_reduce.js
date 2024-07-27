const myNums = [1, 2, 3]

// const total = myNums.reduce(function (accumulator, currentValue){
//     console.log(`Value of accumulator = ${accumulator} and Current-value = ${currentValue}`)

//     return accumulator + currentValue;
// }, 0)

const total = myNums.reduce((acc, currVal)=> acc+currVal, 0)

// console.log(total)

const shoppingCart = [
    {
        itemName: "Javascript course",
        price: 1000
    },
    {
        itemName: "Java course",
        price: 20
    },
    {
        itemName: "Python course",
        price: 100
    },
    {
        itemName: "Mobile dev course",
        price: 1200
    }
]

// Add the price of the shopping cart

let totalCost = shoppingCart.reduce((acc, item)=> acc + item["price"], 0)
console.log(totalCost)