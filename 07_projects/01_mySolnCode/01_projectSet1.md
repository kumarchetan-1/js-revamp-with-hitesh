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

