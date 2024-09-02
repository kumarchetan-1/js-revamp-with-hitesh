 function multiplyBy5(num){
	return num*5
 }

 multiplyBy5.pow = 2;
 console.log(multiplyBy5(5))
 console.log(multiplyBy5.pow)
 console.log(multiplyBy5.prototype)


 function createUser(username, score){
	this.username = username
	this.score =  score
 }

 createUser.prototype.increment= function(){
	this.score++
 }
 createUser.prototype.printMe = function(){
	console.log(`Current score is ${this.score}`)
 }

 const chai = new createUser("chaa", 23)
 const tea = new createUser("tea", 12)