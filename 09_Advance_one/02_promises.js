
// let fetchData = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("Data fetched"), 1000);
//   });
  
//   fetchData
// 	.then((data) => {
// 	  console.log(data); // "Data fetched"
// 	  return "Processing data";
// 	})
// 	.then((message) => {
// 	  console.log(message); // "Processing data"
// 	  return "Data processed";
// 	})
// 	.then((finalMessage) => {
// 	  console.log(finalMessage); // "Data processed"
// 	})
// 	.catch((error) => {
// 	  console.log(error); // This will catch any error that occurs in the chain.
// 	});
  

	// const promiseOne = new Promise(function(resolve, reject){
	// 	// do an async task
	// 	// db calls, cryptography, network call
	// 	setTimeout(()=>{
	// 		console.log("Async task is completed")
	// 		resolve()
	// 	}, 1000)
	// })

	// promiseOne.then(function(){
	// 	console.log("Promise is consumed")
	// })

	// new Promise(function(resolve, reject){
    //      setTimeout(()=>{
	// 		console.log("Promise 2 created")
	// 	 }, 1000)
	// }).then(function(){
	// 	console.log("Promise 2 consumed")
	// })


	// const promiseThree = new Promise((resolve, reject)=>{
	// 	setTimeout(()=>{
	// 		console.log("Promise 3 created")
	// 		resolve({username: "kumarchetan_npr", email: "kumarchetan.npr@gmail.com"})
	// 	}, 1000)
	// })

	// promiseThree.then(function(user){
	// 	console.log(user)
	// })




	// const promiseFour = new Promise((resolve, reject)=>{
	// 	setTimeout(()=>{
	// 		let error = false
	// 		if(!error){
	// 			resolve({username: "chetan", email: "kumarchetan.npr@gmail.com"})
	// 		}else{
	// 			reject("Something went wrong")
	// 		}
	// 	}, 1000)
	// })

	// promiseFour.then((user)=>{
	// 	console.log(user)
	// 	return user.username
	// }).then((username)=>{
	// 	console.log(username)
	// }).catch((error)=>{
	// 	console.log(error)
	// })


    // const promiseFive = new Promise((resolve, reject)=>{
	// 	setTimeout(()=>{
    //       let error = true
	// 	  if(!error){
	// 		resolve({username: "Promise 5", email: "promise5@gmail.com"})
	// 	  } else{
	// 		reject("Error: Promise went wrong")
	// 	  }
	// 	}, 1000)
	// })

	// async function consumePromiseFive() {
	// 	try{
	// 		const response = await promiseFive
	// 		console.log(promiseFive)
	// 	}catch(error){
    //       console.log(error)
	// 	}
	// }

	// consumePromiseFive()


	async function getAllUsers() {
		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/users")
			const usersData = await response.json()
			console.log(usersData)
		} catch (error) {
			console.log(error)
		}
	}

	fetch("https://api.github.com/users/kumarchetan-1")
	.then((response)=>{
        return response.json()
	}).then((data)=>{
		console.log(data)
	}).catch((error)=>{
		console.log(error)
	})