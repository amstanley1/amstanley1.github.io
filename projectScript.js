setUpPage();
  
function setUpPage() {
    addModalEventListeners();
    addNavEventListeners();
    addProjectListeners();
}

function addNavEventListeners() {

    const nav = document.querySelector('nav');

    const navClickHandler = function() {
      this.classList.toggle('open');
      event.stopPropagation();
    };

    nav.addEventListener('click', navClickHandler);

    const bodyClickHandler = function() {
      nav.classList.remove('open');
    };

    document.body.addEventListener('click', bodyClickHandler);
  }


// Modal can be opened
function addModalEventListeners() {

const modalTriggerElement = document.querySelector('#modal-trigger');

const modalTriggerClickHandler = function() {
  document.body.classList.add('modal-open');
};

modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

// Modal can be closed
const modalCloseButton = document.querySelector('#modal button');

const modalCloseButtonClickHandler = function() {
  document.body.classList.remove('modal-open');
};

modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
}



// Resizing the window resets open/closed product details
// Resizing the window resets nav visibility
function addWindowEventListeners() {

const windowResizeHandler = function() {

  const nav = document.querySelector('nav');
  nav.classList.remove('open');

  
  
  
};

window.addEventListener('resize', windowResizeHandler); 
}

function addProjectListeners() {
const descriptionButtons = document.querySelectorAll('.showDescription');

for (let i = 0; i < descriptionButtons.length; i++) {
 descriptionButtons[i].addEventListener('click', function() {
    let projectDescriptions = document.querySelectorAll('p.projectDescription');
    projectDescriptions[i].classList.toggle('openDescription');
    projectDescriptions[i].classList.toggle('closeDescription');
    if (descriptionButtons[i].innerText === "Hide Description") {
      descriptionButtons[i].innerText = "Show Description";
     } else {
      descriptionButtons[i].innerText = "Hide Description";
     }
    
  
  });
};

};

function addModalEventListeners() {

const modalTriggerElement = document.querySelector('#modal-trigger');

const modalTriggerClickHandler = function() {
  document.body.classList.add('modal-open');
};

modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

// Modal can be closed
const modalCloseButton = document.querySelector('#modal button');

const modalCloseButtonClickHandler = function() {
  document.body.classList.remove('modal-open');
};

modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
}