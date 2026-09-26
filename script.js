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

const Q1Screen = document.getElementById('S1');
const Q2Screen = document.getElementById('S2');
const Q25Screen = document.getElementById('S25');
const Q3Screen = document.getElementById('S3');
const Q4Screen = document.getElementById('S4');
const Q5Screen = document.getElementById('S5');
const Q51Screen = document.getElementById('S51');
const Q52Screen = document.getElementById('S52');

const Question1 = document.getElementById('Q1');
const Question2 = document.getElementById('Q2');
const Question25 = document.getElementById('Q25');
const Question3 = document.getElementById('Q3');
const Question4 = document.getElementById('Q4');
const Question5 = document.getElementById('Q5');
const Question51 = document.getElementById('Q51');
const Question52 = document.getElementById('Q52');

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


function transition(hideEl, showEl, questionEl, options = {}) {
    const { addBgClass, removeBgClass, bgClass } = options;

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

    if (bgClass) {
        questionEl.classList.add(bgClass);
    }

    const deferredImages = showEl.querySelectorAll('img[data-src]');
    deferredImages.forEach(function(img) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });

    showEl.classList.add('Active');
    setTimeout(function() { showEl.classList.add('Show'); }, 2000);
}


Q1Button.addEventListener('click', function() {
    transition(introScreen, Q1Screen, Question1, { addBgClass: 'first', bgClass: 'Q1' });
});

Q2Button.addEventListener('click', function() {
    transition(Q1Screen, Q2Screen, Question2, { addBgClass: 'second', removeBgClass: 'first', bgClass: 'Q2'});
});

Q25Button.addEventListener('click', function() {
    transition(Q2Screen, Q25Screen, Question25, { bgClass: 'Q25'});
});

Q3Button.addEventListener('click', function() {
    transition(Q25Screen, Q3Screen, Question3, { addBgClass: 'third', removeBgClass: 'second', bgClass: 'Q3' });
});

Q4Button.addEventListener('click', function() {
    transition(Q3Screen, Q4Screen, Question4, { addBgClass: 'fourth', removeBgClass: 'third', bgClass: 'Q4' });
});

Q5Button.addEventListener('click', function() {
    transition(Q4Screen, Q5Screen, Question5, { addBgClass: 'fifth', removeBgClass: 'fourth', bgClass: 'Q5' });
});

Q51Button.addEventListener('click', function() {
    transition(Q5Screen, Q51Screen, Question51, {bgClass: 'Q51'});
});
   
Q52Button.addEventListener('click', function() {
    transition(Q51Screen, Q52Screen, Question52, {bgClass: 'Q52'});
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