const user = {
	username: "Chetan",
	loginCount: 2,
	isLoggedIn : true,
	getAllUsers: function(){
		console.log("Got user details from the database")
		console.log(`User Name: ${this.username}`)
	}
}

// console.log(user.username)
// console.log(user.getAllUsers())
// console.log(this)


// const promiseOne = new Promise()
// const currentDate = new Date()


function createUser(username, isLoggedIn, loginCount){
	this.username = username 
	this.isLoggedIn = isLoggedIn
	this.loginCount = loginCount
    this.greetings = function(){
		console.log(`Welcome: ${this.username}`)
	}
	// return this
}

const userOne = new createUser("Chetan", true, 21)
const userTwo = new createUser("Arjun", false, 22)

// console.log(userOne)
console.log(userOne.constructor)