// adding image changer 

const myImage = document.querySelector('img');

myImage.oneclick = function() {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/firefox.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox.png');
    }
}

// personalized welcome message 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1'); 

// create function to set peresonalized greeting 
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

// conditional block that initalizes the page 
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }

// onclick button to enter a different name 
myButton.onclick = function() {
    setUserName();
  }

