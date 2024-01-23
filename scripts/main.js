
let myHeading = document.querySelector('h2'); 

// create function to set show photo
function show() {
    var img = document.getElementById ('image')
    img.style.display = (img.style.display === 'none') ? 'block' : 'none';
  }

  function setUserName() {
    // ask user for name
    var userName = prompt("Please enter your name:");
    if (userName) {
      localStorage.setItem('name', userName);
      document.getElementById('myHeading').innerHTML = 'Hello! Nice to Meet you, ' + userName;
    }
  }
  
  // Conditional block to initialize the page
  if (!localStorage.getItem('name')) {
    // Call the setUserName function if the name is not stored
    setUserName();
  } else {
    // Retrieve the stored name and display a greeting
    var storedName = localStorage.getItem('name');
    document.getElementById('myHeading').innerHTML = 'Hello! Nice to Meet you, ' + storedName;
  }

// onclick button to enter a different name 
myButton.onclick = function() {
    setUserName();
  }

