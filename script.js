window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

const background = document.getElementById('Background');

const coverScreen = document.getElementById('Cover');
const introScreen = document.getElementById('Intro');
const openButton = document.getElementById("Open");

const doorLeft = document.getElementById('LeftDoor');
const doorRight = document.getElementById('RightDoor');

const Q1Button = document.getElementById("B1");
const Q2Button = document.getElementById("B2");
const Q25Button = document.getElementById("B25");
const Q3Button = document.getElementById("B3");
const Q4Button = document.getElementById("B4");
const Q5Button = document.getElementById("B5");

const Q1Screen = document.getElementById('Q1');
const Q2Screen = document.getElementById('Q2');
const Q25Screen = document.getElementById('Q25');
const Q3Screen = document.getElementById('Q3');
const Q4Screen = document.getElementById('Q4');
const Q5Screen = document.getElementById('Q5');


openButton.addEventListener('click', function() {
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

Q1Button.addEventListener('click', function() {
     
    introScreen.classList.remove('Show');

    setTimeout(function() {
    introScreen.classList.remove('Active');
    }, 1000);

    setTimeout(function() {
    background.classList.add('first')
    }, 1000);

    Q1Screen.classList.add('Active');

    setTimeout(function() {
    Q1Screen.classList.add('Show');
    }, 2000);
});


});