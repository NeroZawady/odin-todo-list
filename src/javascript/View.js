import * as Controller from "./Controller.js";


let projectsListElement = document.querySelector(".projects-list");
let todoListsListElement = document.querySelector(".todo-lists");

export function loadTodo(projectId, todoName) {
  let projectTodos = todoListsListElement[projectId];

  let todo = createElement("div", null, ["project-todo"]);
  let todoNameElement = createElement("div", todoName, ["project-todo__todo-name"]);

  projectTodos.append(todo);
}

export function loadProject(projectName) {
  let projectContainer = createElement("div", null, ["projects-list__project"]);
  let projectDeleteButton = createElement("button", "X", ["projects-list__delete-project-button"]);
  let projectNameButton = createElement("button", projectName, ["projects-list__project-name"]);

  projectContainer.append(projectDeleteButton);
  projectContainer.append(projectNameButton);
  projectsListElement.append(projectContainer);

  let projectTodos = createElement("div", null, ["todo-lists__project-todos"]);
  todoListsListElement.append(projectTodos);
}

export function loadDefaultProject(projectName) {
  let projectContainer = createElement("div", null, ["projects-list__project", "project--selected"]);
  let projectDeleteButton = createElement("button", "X", ["projects-list__delete-project-button", "button--disabled"]);
  let projectNameButton = createElement("button", projectName, ["projects-list__project-name"]);

  projectContainer.append(projectDeleteButton);
  projectContainer.append(projectNameButton);
  projectsListElement.append(projectContainer);

  let projectTodos = createElement("div", null, ["todo-lists__project-todos", "todo-lists__project-todos--selected"]);
  todoListsListElement.append(projectTodos);
}

function createElement(tag, text, classes) {
  let element = document.createElement(tag);
  
  if(text !== null) element.innerHTML = text;

  if(classes !== null) {
    for(let c of classes) {
      element.classList.add(c);
    }
  }

  return element;
}

export function openProjectForm() {
  let projectForm = document.querySelector(".add-project-form");
  projectForm.parentElement.classList.remove("hidden");
  projectForm.querySelector("input").focus();
}

export function closeProjectForm() {
  let projectForm = document.querySelector(".add-project-form");
  projectForm.parentElement.classList.add("hidden");
  projectForm.reset();
}

export function deleteProject(projectContainer, projectId) {
  let projectTodos = todoListsListElement.children[projectId].remove();
  projectContainer.remove();
}
