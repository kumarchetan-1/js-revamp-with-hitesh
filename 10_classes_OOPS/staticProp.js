class User{
	constructor(username){
		this.username = username
	}

	logme(){
		console.log(`Username is : ${this.username}`);
		
	}

	static createId(){
		return `1234`
	}
}

const firstUser = new User("Chetan")
// console.log(firstUser.createId());

class Teacher extends User{
	constructor(username, email){
		super(username)
		this.email = email
	}

}

const firstTeacher = new Teacher("Teacher One", "tone@google.com")
// console.log(firstTeacher.createId());
console.log(User.createId()); // Static properties only works on the classes but not on their instances

