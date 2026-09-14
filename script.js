window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  
const coverScreen = document.getElementById('Cover');
const introScreen = document.getElementById('Intro');
const button = document.getElementById("Start");


button.addEventListener('click', function() {
    coverScreen.classList.remove('Active');
    introScreen.classList.add('Active');
});

});