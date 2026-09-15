window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  
const coverScreen = document.getElementById('Cover');
const introScreen = document.getElementById('Intro');
const button = document.getElementById("Start");

const doorLeft = document.getElementById('LeftDoor');
const doorRight = document.getElementById('RightDoor');


button.addEventListener('click', function() {
    doorLeft.classList.add('MoveLeft');
    doorRight.classList.add('MoveRight');
     
    setTimeout(function() {
    coverScreen.classList.remove('Active');
    }, 1000);
   
    introScreen.classList.add('Active');

    setTimeout(function() {
    introScreen.classList.add('Show');
    }, 1000);

    setTimeout(function() {
    introScreen.classList.add('Blur');
    }, 1000);
});

});