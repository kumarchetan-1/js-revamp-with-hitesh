// ES6

class user{
	constructor(username, email, password){
		this.username = username
		this.email = email
		this.password = password
	}

	encryptPassword(){
		return `${this.password}abc`
	}

	changeUsername(){
		return `${this.username.toUpperCase()}`
	}
}

const userOne = new user("Chetan", "kumarchetan.npr@gmail.com", "abc112345")
console.log(userOne.encryptPassword())
console.log(userOne.changeUsername())


// Behind the scene

function createUserTwo(username, email, password){
	this.username = username
	this.email = email
	this.password = password
}

createUserTwo.prototype.encryptPassword = function(){
	return `${this.password}abc`
}

createUserTwo.prototype.changeUsername = function(){
	return `${this.username.toUpperCase()}`
}

const userTwo = new createUserTwo("Sourcecode", "kumarchetan.npr@gmail.com", "abc112345")
console.log(userTwo.encryptPassword())
console.log(userTwo.changeUsername())

