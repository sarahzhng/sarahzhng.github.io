
let myHeading = document.querySelector('h2'); 

// create function to set show photo
function show() {
    var sourceimage = "images/cat.jpeg";
    var img = document.getElementById ('image')
    img.src = sourceOfPicture.replace('90x90', '200x200');
    img.style.display = "block"
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

