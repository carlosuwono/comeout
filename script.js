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
const Q51Button = document.getElementById("B51");
const Q52Button = document.getElementById("B52");

const Q1Screen = document.getElementById('Q1');
const Q2Screen = document.getElementById('Q2');
const Q25Screen = document.getElementById('Q25');
const Q3Screen = document.getElementById('Q3');
const Q4Screen = document.getElementById('Q4');
const Q5Screen = document.getElementById('Q5');
const Q51Screen = document.getElementById('Q51');
const Q52Screen = document.getElementById('Q52');

const form = document.getElementById('Questionnaire');


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


function transition(hideEl, showEl, options = {}) {
    const { addBgClass, removeBgClass } = options;

    if (hideEl) {
        hideEl.classList.remove('Show');
        setTimeout(function() { hideEl.classList.remove('Active'); }, 1000);
    }

    if (addBgClass || removeBgClass) {
        setTimeout(function() {
            if (addBgClass) background.classList.add(addBgClass);
            if (removeBgClass) background.classList.remove(removeBgClass);
        }, 1000);
    }

    showEl.classList.add('Active');
    setTimeout(function() { showEl.classList.add('Show'); }, 2000);
}


Q1Button.addEventListener('click', function() {
    transition(introScreen, Q1Screen, { addBgClass: 'first' });
});

Q2Button.addEventListener('click', function() {
    transition(Q1Screen, Q2Screen, { addBgClass: 'second', removeBgClass: 'first' });
});

Q25Button.addEventListener('click', function() {
    transition(Q2Screen, Q25Screen, {});
});

Q3Button.addEventListener('click', function() {
    transition(Q25Screen, Q3Screen, { addBgClass: 'third', removeBgClass: 'second' });
});

Q4Button.addEventListener('click', function() {
    transition(Q3Screen, Q4Screen, { addBgClass: 'fourth', removeBgClass: 'third' });
});

Q5Button.addEventListener('click', function() {
    transition(Q4Screen, Q5Screen, { addBgClass: 'fifth', removeBgClass: 'fourth' });
});

Q51Button.addEventListener('click', function() {
    transition(Q5Screen, Q51Screen, {});
});
   
Q52Button.addEventListener('click', function() {
    transition(Q51Screen, Q52Screen, {});
});


function getAllGroupNames() {
    const radios = form.querySelectorAll('input[type="radio"]');
    const names = new Set();
    radios.forEach(function(radio) {
        names.add(radio.name);
    });
    return Array.from(names);
}

function checkAllRated() {
    const groupNames = getAllGroupNames();

    const allRated = groupNames.every(function(name) {
        return form.querySelector(`input[name="${name}"]:checked`) !== null;
    });

    Q2Button.disabled = !allRated;
}

form.addEventListener('change', checkAllRated);

checkAllRated();

});