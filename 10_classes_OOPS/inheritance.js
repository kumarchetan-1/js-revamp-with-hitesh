class User{
	constructor(username){
		this.username = username
	}

	logme(){
		console.log(`Username is : ${this.username}`);
		
	}
}

class Teacher extends User{
	constructor(username, email, password){
		super(username)
		this.email = email
		this.password = password
	}

	addCourse(){
		console.log(`A new course was added by ${this.username}`);
	}
}

const teacherOne = new Teacher("First Teacher", "firstteacher@gmail.com", "password@12")
const userOne = new User("First User")
teacherOne.addCourse()
userOne.logme()

console.log(teacherOne instanceof User);
