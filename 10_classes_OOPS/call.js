function greet(greeting, punctuation) {
	console.log(greeting + ", " + this.name + punctuation);
  }
  
  let person = { name: "Chetan" };
  
  greet.call(person, "Hello", "!"); // Output: "Hello, Chetan!"

  

  function setUserName (username){
	this.username = username
  }

  function createUser(username, email, password){
	setUserName.call(this, username);
	this.email =  email;
	this.password = password;
  }

  const userOne = new createUser("chetan", "chetan@google.com", "abc@123455")

  console.log(userOne)