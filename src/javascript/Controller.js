








// Update project number when deleting a project









import * as Model from "./Model.js";
import * as View from "./View.js";
import {Project} from "./Project.js";


let selectedProjectNumber = 0;
export let projectsListElement = document.querySelector(".projects-list");
export let todoListsElement = document.querySelector(".todo-lists");

export function initialize() {
  if(Model.projects.length === 0) {
    Model.addProject(new Project(0, "Default"));
    View.loadDefaultProject(Model.projects[0].name);
  } else {
    for(let project of Model.projects) {
      if(project.number === 0) {
        View.loadDefaultProject(project.name);
      } else {
        View.loadProject(project.name);
      }
      for(let todo of project.todos) {
        View.loadTodo(project.number, todo.name);
      }
    }
  }

  addEvents();
}

function addEvents() {
  let addProjectButton = document.querySelector(".projects-section__add-project-button");
  addProjectButton.addEventListener("click", () => View.openProjectForm());

  let cancelProjectButton = document.querySelector('.add-project-form button[type="reset"]');
  cancelProjectButton.addEventListener("click", () => View.closeProjectForm());

  let projectForm = document.querySelector(".add-project-form");
  projectForm.addEventListener("submit", () => processProjectForm());

  let deleteProjectButtons = document.querySelectorAll(".projects-list__delete-project-button");
  for(let deleteProjectButton of deleteProjectButtons)
    deleteProjectButton.addEventListener("click", (e) => deleteProject(e));
  
  let projectNameButtons = document.querySelectorAll(".projects-list__project-name");
  for(let projectNameButton of projectNameButtons)
    projectNameButton.addEventListener("click", (e) => selectProject(e));

}

function processProjectForm() {
  let projectName = document.querySelector(".add-project-form input").value;
  
  Model.addProject(new Project(Model.projects.length, projectName));
  View.loadProject(projectName);

  View.closeProjectForm();
  // event.preventDefault(); // CHECK - do I need this?
}

function deleteProject(e) {
  let projectElement = e.target.parentElement;
  let projectNumber = getProjectNumber(projectElement);

  if(projectNumber === selectedProjectNumber) selectedProjectNumber = 0;

  View.deleteProject(projectElement, projectNumber);
  Model.deleteProject(projectNumber);
}

function selectProject(e) {
  let projectsListElement = document.querySelector(".projects-list");
  let todoListsListElement = document.querySelector(".todo-lists");
  let projectElement = e.target.parentElement;

  let i;
  for(i = 0; i < projectsListElement.children.length; i++) {
    if(projectElement === projectsListElement.children[i]) break;
  }

  let projectTodos = todoListsListElement.children[i];
  projectsListElement.children[selectedProjectNumber].classList.remove("project--selected");
  projectElement.classList.add("project--selected");
  selectedProjectNumber = i;
  todoListsListElement.children[selectedProjectNumber].classList.remove("todo-lists__project-todo-list--selected");
  projectTodos.classList.add("todo-lists__project-todo-list--selected");
}

function getProjectNumber(projectElement) {
  let projectsListElement = document.querySelector(".projects-list");
  let projectNumber;

  for(projectNumber = 0; projectNumber < projectsListElement.children.length; projectNumber++) {
    if(projectElement === projectsListElement.children[projectNumber]) break;
  }

  return projectNumber;
}

function getProjectElement(projectNumber) {
  let projectsListElement = document.querySelector(".projects-list");
  return projectsListElement[projectNumber];
}

function getSelectedProjectElement() {
  return document.querySelector(".projects-list").children[selectedProjectNumber];
}
