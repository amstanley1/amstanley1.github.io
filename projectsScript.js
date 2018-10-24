setUpPage();
  
function setUpPage() {
    addProjectListeners();
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