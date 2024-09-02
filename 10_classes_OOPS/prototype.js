let myName = "Chetan   "

// console.log(myName.trueLength)


const myHeros = ['thor', 'spiderman']

let heroSuperPower = {
	thor: "thor power",
	spiderman: "spiderman Power"
}

Object.prototype.chetan = function(){
	console.log("Chetan is present everywhere")

}

Array.prototype.heyChetan = function(){
	console.log("Hey Chetan you are not everywhere")
}

// heroSuperPower.chetan()
// myHeros.chetan()

myHeros.heyChetan()
// heroSuperPower.heyChetan()

// Inheritance

const user ={
	userName: "Chetan",
	email: "chetan@google.com"
}

const teacher = {
	makeVideo: true
}

const teachingSupport = {
	isAvailable: false
}

const TaSupport = {
	makeAssignment: "JS assignment",
	fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(teacher, user)

let anotherUserName = "The sourcecode  "

String.prototype.trueLength = function(){
	console.log(this)
	console.log(`True length is : ${this.trim().length}`)
}

anotherUserName.trueLength()
"Chetan Kumar   ".trueLength()