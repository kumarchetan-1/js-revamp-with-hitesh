const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const myObject = Object.create(null)

const chai = {
	name: "ginger chai",
	price: 399,
	isAvailable: true,
	orderChai: function () {
		console.log("Chai ni ban paayi");

	}
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name",
	{
		// writable: false,
		enumerable: false, // will stop the iteration for this property 
		// configurable: false
	}
)

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
	if (typeof value !== "function") {
		console.log(`${key}: ${value}`)
	}
}

