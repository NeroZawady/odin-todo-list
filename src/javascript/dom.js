import {Todo} from "./todo";
import {Project, DefaultProject} from "./project";


let projects = JSON.parse(localStorage.getItem("projects"));
let projectsListDOM = document.querySelector(".projects-list");


let initialize = () => {
  if(projects === null) {
    projects = [];
    projects.push(new DefaultProject(0, "Default"));
    // addDefaultProject();
  } else {
    // loadDefaultProject(projects[0]);
    // for(let i = 1; i < projects.length; i++) {
    //   loadProject(projects[i]);
    // }
    for(project of projects) {
      project.loadProject();
    }
  }  
  localStorage.setItem("projects", JSON.stringify(projects));
  console.log(projects);
  addEvents();
}

let loadProject = (project) => {
  let projectContainer = document.createElement("div");
  projectContainer.classList.add("projects-list__project");

  let projectDelete = document.createElement("button");
  projectDelete.classList.add("projects-list__delete-project-button")
  projectDelete.textContent = "X";
  projectContainer.append(projectDelete);

  let projectButton = document.createElement("button");
  projectButton.classList.add("projects-list__project-name")
  projectButton.textContent = project.name;
  projectContainer.append(projectButton);

  project.element = projectContainer;
  projectsListDOM.append(projectContainer);
}

let loadDefaultProject = (project) => {
  let projectContainer = document.createElement("div");
  projectContainer.classList.add("projects-list__project", "project--selected");

  let projectDelete = document.createElement("button");
  projectDelete.classList.add("projects-list__delete-project-button", "button--disabled");
  projectDelete.textContent = "X";
  projectContainer.append(projectDelete);

  let projectButton = document.createElement("button");
  projectButton.classList.add("projects-list__project-name");
  projectButton.textContent = "Default";
  projectContainer.append(projectButton);

  project.element = projectContainer;
  projectsListDOM.append(projectContainer);
}

let addDefaultProject = () => {
  let projectContainer = document.createElement("div");
  projectContainer.classList.add("projects-list__project", "project--selected");

  let projectDelete = document.createElement("button");
  projectDelete.classList.add("projects-list__delete-project-button", "button--disabled");
  projectDelete.textContent = "X";
  projectContainer.append(projectDelete);

  let projectButton = document.createElement("button");
  projectButton.classList.add("projects-list__project-name");
  projectButton.textContent = "Default";
  projectContainer.append(projectButton);

  projects.push(new Project(0, projectContainer, projectButton.textContent));
  projectsListDOM.append(projectContainer);
}



let openedModal = null;
let defaultProject;
let selectedProject;

let addProjectButton = document.querySelector(".projects-section__add-project-button");
let addProjectModal = document.querySelector(".projects-section .modal");
let addProjectForm = document.querySelector(".add-project-form");
let addProjectForm__input = document.querySelector('.add-project-form input');
let addProjectForm__cancel = document.querySelector('.add-project-form button[type="reset"]');
let addTodoButton = document.querySelector(".todos-section__add-todo-button");

let todosListDOM = document.querySelector(".todos-list");
let addTodoModal = document.querySelector(".todos-section .modal");
let addTodoForm = document.querySelector(".add-todo-form");

let addEvents = () => {
  defaultProject = projectsListDOM.children[0]; // document.querySelector('#default').parentElement;
  selectedProject = defaultProject;

  // unhide form and focus on text input field when user clicks on "Add Project" button
  addProjectButton.addEventListener("click", () => {
    openedModal = addProjectModal;
    addProjectModal.classList.toggle("hidden");
    addProjectForm__input.focus();
  });

  // hide and reset form when user clicks on the background when the form is displayed
  addProjectModal.addEventListener("click", () => {
    addProjectModal.classList.toggle("hidden");
    addProjectForm.reset();
    openedModal = null;
    event.stopPropagation();
  });

  // hide and reset form when user clicks on "Cancel" button when form is displayed
  addProjectForm__cancel.addEventListener("click", () => {
    addProjectModal.classList.toggle("hidden");
    addProjectForm.reset();
    openedModal = null;
  });

  // prevents clicks inside the form to propogate to the modal and trigger the on-background-click event
  addProjectForm.addEventListener("click", () => {event.stopPropagation()});

  // hide and reset form when user presses Escape key when form is displayed
  window.addEventListener("keyup", (e) => {
    // if((e.key === "Escape" && !addProjectModal.classList.contains("hidden")) || (e.key === "Escape" && !addTodoModal.classList.contains("hidden"))) {
    if(e.key === "Escape" && openedModal !== null) {
      openedModal.classList.toggle("hidden");
      openedModal.children[0].reset();
      openedModal = null;
    }
  });

  addProjectForm.addEventListener("submit", processProjectForm);


  defaultProject.children[1].addEventListener("click", () => {
    if(selectedProject !== defaultProject) {
      defaultProject.classList.add("project--selected");
      selectedProject.classList.remove("project--selected");
      selectedProject = defaultProject;
    }
  });

  addTodoButton.addEventListener("click", () => {
    openedModal = addTodoModal;
    addTodoModal.classList.toggle("hidden");
    // addProjectForm__input.focus();
  });

  addTodoForm.addEventListener("submit", () => {
    let todo = document.createElement("div");
    todo.classList.add("todos-list__todo");

    let todoName = document.createElement("div");
    todoName.classList.add("todos-list__todo-name");
    todoName.textContent = document.querySelector('.add-todo-form input[name="name"').value;
    todo.append(todoName);
    
    todosListDOM.append(todo);
    event.preventDefault();
  });
};



























































// import {Project} from "./project";


// let projects = [];
// let openedModal = null;
// let defaultProject = document.querySelector('#default').parentElement;
// let selectedProject = defaultProject;

// let projectsListDOM = document.querySelector(".projects-list");
// let addProjectButton = document.querySelector(".projects-section__add-project-button");
// let addProjectModal = document.querySelector(".projects-section .modal");
// let addProjectForm = document.querySelector(".add-project-form");
// let addProjectForm__input = document.querySelector('.add-project-form input');
// let addProjectForm__cancel = document.querySelector('.add-project-form button[type="reset"]');
// let addTodoButton = document.querySelector(".todos-section__add-todo-button");

// let todosListDOM = document.querySelector(".todos-list");
// let addTodoModal = document.querySelector(".todos-section .modal");
// let addTodoForm = document.querySelector(".add-todo-form");


// let initialize = () => {
//   projects.push(new Project(0, "Default"));
//   addEvents();
// }

// let addDefaultProject = () => {
//   projects.push(new Project(0, "Default"));

//   let project = document.createElement("div");
//   project.classList.add("projects-list__project");
//   project.classList.add("project--selected");

//   let projectDelete = document.createElement("button");
//   projectDelete.textContent = "X";
//   projectDelete.classList.add("projects-list__delete-project-button");
//   projectDelete.classList.add("button--disabled");
//   project.append(projectDelete);

//   let projectName = document.createElement("button");
//   projectName.textContent = "Default";
//   projectName.classList.add("projects-list__project-name");
//   project.append(projectName);

//   defaultProject = project;
//   selectedProject = defaultProject;

//   project.lastChild.addEventListener("click", () => {
//     if(selectedProject !== project) {
//       project.classList.add("project--selected");
//       selectedProject.classList.remove("project--selected");
//       selectedProject = project;
//     }
//   });

//   projectsListDOM.append(project);
// }

// let addEvents = () => {
//   // unhide form and focus on text input field when user clicks on "Add Project" button 
//   addProjectButton.addEventListener("click", () => {
//     openedModal = addProjectModal;
//     addProjectModal.classList.toggle("hidden");
//     addProjectForm__input.focus();
//   });

//   // hide and reset form when user clicks on the background when the form is displayed
//   addProjectModal.addEventListener("click", () => {
//     addProjectModal.classList.toggle("hidden");
//     addProjectForm.reset();
//     openedModal = null;
//     event.stopPropagation();
//   });

//   // hide and reset form when user clicks on "Cancel" button when form is displayed
//   addProjectForm__cancel.addEventListener("click", () => {
//     addProjectModal.classList.toggle("hidden");
//     addProjectForm.reset();
//     openedModal = null;
//   });

//   // prevents clicks inside the form to propogate to the modal and trigger the on-background-click event
//   addProjectForm.addEventListener("click", () => {event.stopPropagation()});

//   // hide and reset form when user presses Escape key when form is displayed
//   window.addEventListener("keyup", (e) => {
//     // if((e.key === "Escape" && !addProjectModal.classList.contains("hidden")) || (e.key === "Escape" && !addTodoModal.classList.contains("hidden"))) {
//     if(e.key === "Escape" && openedModal !== null) {
//       openedModal.classList.toggle("hidden");
//       openedModal.children[0].reset();
//       openedModal = null;
//     }
//   });

//   addProjectForm.addEventListener("submit", processProjectForm);


//   defaultProject.children[1].addEventListener("click", () => {
//     if(selectedProject !== defaultProject) {
//       defaultProject.classList.add("project--selected");
//       selectedProject.classList.remove("project--selected");
//       selectedProject = defaultProject;
//     }
//   });

//   addTodoButton.addEventListener("click", () => {
//     openedModal = addTodoModal;
//     addTodoModal.classList.toggle("hidden");
//     // addProjectForm__input.focus();
//   });

//   addTodoForm.addEventListener("submit", () => {
//     let todo = document.createElement("div");
//     todo.classList.add("todos-list__todo");

//     let todoName = document.createElement("div");
//     todoName.classList.add("todos-list__todo-name");
//     todoName.textContent = document.querySelector('.add-todo-form input[name="name"').value;
//     todo.append(todoName);
    
//     todosListDOM.append(todo);
//     event.preventDefault();
//   });
// };


let processProjectForm = () => {
  projects.push(new Project(projects.length, projectName.textContent));

  // let projectContainer = document.createElement("div");
  // projectContainer.classList.add("projects-list__project");

  // let projectDelete = document.createElement("button");
  // projectDelete.classList.add("projects-list__delete-project-button");
  // projectDelete.textContent = "X";
  // projectContainer.append(projectDelete);

  // let projectName = document.createElement("button"); 
  // projectName.classList.add("projects-list__project-name");
  // projectName.textContent = addProjectForm__input.value;
  // projectContainer.append(projectName);

  // projectsListDOM.append(projectContainer);

  projectDelete.addEventListener("click", (element) => {
    projects.splice(projects.indexOf(projectContainer), 1);
    let parent = element.target.parentElement;
    while(parent.lastChild) parent.removeChild(parent.lastChild);

    if(selectedProject === projectContainer) {
      defaultProject.classList.add("project--selected");
      selectedProject = defaultProject;
    }

    parent.remove();
  });

  projectContainer.lastChild.addEventListener("click", () => {
    if(selectedProject !== projectContainer) {
      projectContainer.classList.add("project--selected");
      selectedProject.classList.remove("project--selected");
      selectedProject = projectContainer;
    }
  });

  localStorage.setItem("projects", JSON.stringify(projects));

  addProjectModal.classList.toggle("hidden");
  addProjectForm.reset();
  event.preventDefault();
}


export {initialize};