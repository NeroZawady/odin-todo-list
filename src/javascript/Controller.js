import * as Model from "./Model.js";
import * as View from "./View.js";
import {Project} from "./Project.js";


export function initialize() {
  if(Model.getProjects().length === 0) {
    Model.addProject(new Project(0, "Default"));
    View.loadDefaultProject(Model.getProjects()[0].name);
  } else {
    for(let project of Model.getProjects()) {
      if(project.id === 0) {
        View.loadDefaultProject(project.name);
      } else {
        View.loadProject(project.name);
      }
      for(let todo of project.todos) {
        View.loadTodo(project.id, todo.name);
      }
    }
  }

  addEvents();
}

function addEvents() {
  let addProjectButton = document.querySelector(".projects-section__add-project-button");
  addProjectButton.addEventListener("click", () => openProjectForm());

  let cancelProjectButton = document.querySelector('.add-project-form button[type="reset"]');
  cancelProjectButton.addEventListener("click", () => closeProjectForm());

  let projectForm = document.querySelector(".add-project-form");
  projectForm.addEventListener("submit", () => processForm());

  let deleteProjectButtons = document.querySelectorAll(".projects-list__delete-project-button");
  for(let deleteProjectButton of deleteProjectButtons)
    deleteProjectButton.addEventListener("click", (e) => deleteProject(e));
  
  let projectNameButtons = document.querySelectorAll(".projects-list__project-name");
  for(let projectNameButton of projectNameButtons)
    projectNameButton.addEventListener("click", (e) => selectProject(e));

}

function openProjectForm() {
  let projectForm = document.querySelector(".add-project-form");
  projectForm.parentElement.classList.remove("hidden");
  projectForm.querySelector("input").focus();
}

function closeProjectForm() {
  let projectForm = document.querySelector(".add-project-form");
  projectForm.parentElement.classList.add("hidden");
  projectForm.reset();
}

function processForm() {
  let projectForm = document.querySelector(".add-project-form");
  let projectName = projectForm.querySelector("input").value;

  Model.addProject(new Project(Model.getNumberOfProjects(), projectName));
  View.loadProject(projectName);

  projectForm.parentElement.classList.add("hidden");
  projectForm.reset();
  event.preventDefault();
}

function deleteProject(e) {
  let projectsListElement = document.querySelector(".projects-list");
  let todoListsListElement = document.querySelector(".todo-lists");
  let projectContainer = e.target.parentElement;
  let i;

  for(i = 0; i < projectsListElement.children.length; i++) {
    if(projectContainer === projectsListElement.children[i]) break;
  }

  let projectTodos = todoListsListElement.children[i];
  projectTodos.remove();
  projectContainer.remove();
  Model.deleteProject(i);
}

function selectProject(e) {
  let projectsListElement = document.querySelector(".projects-list");
  let todoListsListElement = document.querySelector(".todo-lists");
  let projectContainer = e.target.parentElement;
  let i;

  for(i = 0; i < projectsListElement.children.length; i++) {
    if(projectContainer === projectsListElement.children[i]) break;
  }

  let projectTodos = todoListsListElement.children[i];
  projectsListElement.children[Model.getSelectedProjectId()].classList.remove("project--selected");
  projectContainer.classList.add("project--selected");
  Model.setSelectedProjectId(i);
  todoListsListElement.children[Model.getSelectedProjectId()].classList.remove("todo-lists__project-todos--selected");
  projectTodos.classList.add("todo-lists__project-todos--selected");

}