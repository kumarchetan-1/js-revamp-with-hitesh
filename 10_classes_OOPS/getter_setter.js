class Account {
	constructor(balance){
		this.balance = balance
	}
	get formattedBalance() {
	  return `$${this.balance.toFixed(2)}`;
	}
	set deposit(amount) {
	  if (amount > 0) {
		this.balance += amount;
	  } else {
		console.log('Deposit amount must be positive.');
	  }
	}
  };
  
  const account = new Account(0)
  account.deposit = 100.5;
  console.log(account.formattedBalance); // Output: "$100.50"
  account.deposit = -50; // Output: "Deposit amount must be positive."
  







// class User{
// 	constructor(username, firstName, lastName, password){
// 		this.username = username
// 		this.password = password
// 		this.firstName = firstName
// 		this.lastName = lastName
// 	}

// 	get username(){
// 		return `${this._username.toUpperCase()}`
// 	}

// 	set username(value){
//      this._username = value.toLocaleLowerCase()
// 	}

// 	get fullName(){
// 		return `${this.firstName} ${this.lastName}`
// 	}
	
// 	set realage(age){
// 		this.age = age
// 	}
// }

// const userOne = new User("chetan_kumar", "Chetan", "Kumar", "asdf@1234")
// console.log(userOne.username)
// userOne.username = "chetanKumar-1"
// console.log(userOne.username)

// console.log(userOne.fullName);
// userOne.realage = 24
// console.log(userOne.age)




// Another syntax for using getter and setter in defineProperty() method

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;  // Corrected to prevent recursion
        }
    });
}

const userOne  = new User('c@google.com', "qwert@1234")
console.log(userOne.email)