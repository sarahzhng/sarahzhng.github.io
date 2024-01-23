
// personalized welcome message 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2'); 

// create function to set show photo
function show() {
    document.getElementById('image').style.display = "block";
    document.getElementById('buttonshow').style.display = "none";
  }

// conditional block that initalizes the page 
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hello! Nice to Meet you!' + storedName;
  }

// onclick button to enter a different name 
myButton.onclick = function() {
    setUserName();
  }

