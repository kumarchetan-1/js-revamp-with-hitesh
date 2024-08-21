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