# My Solution code

## Background color switcher

```javascript
const allButtons = document.querySelectorAll('.button');
let pageBg = document.querySelector('body');
allButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let btnColor = e.target.id;
    pageBg.style.backgroundColor = btnColor;
    /*
    switch(e.target.id){
    case "grey":
    pageBg.style.backgroundColor = "grey"
    break;
    case "white":
    pageBg.style.backgroundColor = "white"
    break;
    case "blue":
    pageBg.style.backgroundColor = "blue"
    break;
    case "yellow":
    pageBg.style.backgroundColor = "yellow"
    break;
    default:
    pageBg.style.backgroundColor = "pink"
    }
    */
  });
});

```

## BMI Calculator

```javascript
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let height = parseInt(document.getElementById('height').value)
  let weight = parseInt(document.getElementById('weight').value)
  let result = document.getElementById('results');

  if(height == "" || isNaN(height) || height < 0){
    result.innerHTML = `Height: ${height} is not a number`
  } else if(weight == "" || isNaN(weight) || weight<0){
    result.innerHTML = `Weight: ${weight} is not a number`
  }else {
    // console.log(`Height: ${height}, Weight: ${weight}`)
    const bmi = ((weight*10000)/(height*height)).toFixed(2)
    let weightType = "Overweight"
    if(bmi<18.6){
      weightType = "Under Weight"
    } else if(bmi<24.9 && bmi >= 18.6){
      weightType = "Normal Range"
    }
    result.innerHTML = `Height: ${height}, Weight: ${weight} and  <b>your BMI is ${bmi}</b> <br> You are in ${weightType}`;
  }

});


```

## Project 3 Digital Clock

```javascript
const clockContainer = document.querySelector('#clock');

function clock() {
  const currentTime = new Date().toLocaleTimeString('in');
  clockContainer.innerHTML = `${currentTime}`;
}

setInterval(clock, 1000);

```

##  Project 3 Guess the number

```javascript
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remainingAttempt = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')

let prevGuess = []
let guessAttempt = 1
let playGame = true
let restartBtn = document.createElement('button')
restartBtn.setAttribute('id', 'restartBtn')
let randomNum = parseInt(Math.random() * 100 + 1)

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess) {
  if (guess == '' || isNaN(guess) || guess < 0) {
    lowOrHigh.innerHTML = '<span> please enter a valid Number </span>';
  } else {
    // prevGuess.push(guess);
    cleanUpGuess(guess);
    if (guessAttempt == 11) {
      displayMessage('Game over random number was ' + randomNum);
      endGame()
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNum) {
    displayMessage('you guessed it right!');
  } else if (guess < randomNum) {
    displayMessage(`Your ${guess} value is too low!`);
  } else {
    displayMessage(`Your ${guess} value is too high!`);
  }
}

function cleanUpGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  guessAttempt++;
  remainingAttempt.innerHTML = `${11 - guessAttempt}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h4> ${message} </h4>`;
}

function endGame() {
  userInput.innerHTML = '';
  userInput.setAttribute('disabled', '');
  let startOver = document.querySelector('.startOver');
  restartBtn.innerHTML = `Start new game`;
  startOver.append(restartBtn);
  playGame = false;
  submit.disabled = true;
  startGame()
}

function startGame() {
  restartBtn.addEventListener("click", ()=>{
    prevGuess = [];
    submit.disabled = false;
    randomNum = parseInt(Math.random() * 100 + 1)
    guessSlot.innerHTML = ""
    userInput.removeAttribute("disabled")
    submit.disabled = false;
    remainingAttempt.innerHTML = `${11 - guessAttempt}`;
    startOver.removeChild(restartBtn)
    playGame = true
  })
}

```