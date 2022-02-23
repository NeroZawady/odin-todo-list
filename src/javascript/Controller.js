import * as Model from "./Model.js";
import * as View from "./View.js";
import {Project} from "./Project.js";


let selectedProjectId = 0;

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
  
  Model.addProject(new Project(Model.getNumberOfProjects(), projectName));
  View.loadProject(projectName);

  View.closeProjectForm();
  // event.preventDefault(); // CHECK - do I need this?
}

function deleteProject(e) {
  let projectContainer = e.target.parentElement;
  let projectId = getProjectId(projectContainer);

  if(projectId === selectedProjectId) selectedProjectId = 0;

  View.deleteProject(projectContainer, projectId);
  Model.deleteProject(projectId);
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
  projectsListElement.children[selectedProjectId].classList.remove("project--selected");
  projectContainer.classList.add("project--selected");
  selectedProjectId = i;
  todoListsListElement.children[selectedProjectId].classList.remove("todo-lists__project-todos--selected");
  projectTodos.classList.add("todo-lists__project-todos--selected");
}

function getProjectId(projectContainer) {
  let projectsListElement = document.querySelector(".projects-list");
  let projectId;

  for(projectId = 0; projectId < projectsListElement.children.length; projectId++) {
    if(projectContainer === projectsListElement.children[projectId]) break;
  }

  return projectId;
}

function getProjectContainer(projectId) {
  let projectsListElement = document.querySelector(".projects-list");
  return projectsListElement[projectId];
}

function getSelectedProjectContainer() {
  return document.querySelector(".projects-list").children[selectedProjectId];
}
