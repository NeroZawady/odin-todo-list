let projectsList = document.querySelector(".projects-list");
let addProjectButton = document.querySelector(".projects-section__add-project-button");
let addProjectModal = document.querySelector(".projects-section .modal");
let addProjectForm = document.querySelector(".add-project-form");
let addProjectForm__input = document.querySelector('.add-project-form input');
let addProjectForm__cancel = document.querySelector('.add-project-form button[type="reset"]');

let addEvents = () => {
  // unhide form and focus on text input field when user clicks on "Add Project" button 
  addProjectButton.addEventListener("click", () => {
    addProjectModal.classList.toggle("hidden");
    addProjectForm__input.focus();
  });

  // hide and reset form when user clicks on the background when the form is displayed
  addProjectModal.addEventListener("click", () => {
    addProjectModal.classList.toggle("hidden");
    addProjectForm.reset();
    event.stopPropagation();
  });

  // hide and reset form when user clicks on "Cancel" button when form is displayed
  addProjectForm__cancel.addEventListener("click", () => {
    addProjectModal.classList.toggle("hidden");
    addProjectForm.reset();
  });

  // prevents clicks inside the form to propogate to the modal and trigger the on-background-click event
  addProjectForm.addEventListener("click", () => {event.stopPropagation()});

  // hide and reset form when user presses Escape key when form is displayed
  window.addEventListener("keyup", (e) => {
    if(e.key === "Escape" && !addProjectModal.classList.contains("hidden")) {
      addProjectModal.classList.toggle("hidden");
      addProjectForm.reset();
    }
  });

  addProjectForm.addEventListener("submit", processProjectForm);
};

let processProjectForm = () => {
    let project = document.createElement("div");
    project.classList.add("projects-list__project");
  
    let projectDelete = document.createElement("button");
    projectDelete.textContent = "X";
    projectDelete.classList.add("projects-list__delete-project-button");
    project.append(projectDelete);
  
    projectDelete.addEventListener("click", (element) => {
      let parent = element.target.parentElement;
      while(parent.lastChild) parent.removeChild(parent.lastChild);
      parent.remove();
    });

    let projectName = document.createElement("button");
    projectName.textContent = addProjectForm__input.value;
    projectName.classList.add("projects-list__project-name");
    project.append(projectName);
  
    projectsList.append(project);
  
    addProjectModal.classList.toggle("hidden");
    addProjectForm.reset();
    event.preventDefault();
}

export {addEvents, processProjectForm};