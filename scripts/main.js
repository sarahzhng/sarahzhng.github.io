
let myHeading = document.querySelector('h2'); 

// create function to set show photo
function show() {
    var img = document.getElementById ('image')
    img.style.display = (img.style.display === 'none') ? 'block' : 'none';
  }

  function setUserName() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        localStorage.setItem('name', userName);
        // Update the greeting message
        myHeading.innerHTML = 'Hello! Nice to meet you, ' + userName;
    }
}


