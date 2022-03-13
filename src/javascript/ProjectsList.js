import { Project } from "./Project";

let projectsList = (() => {
  initialize();

  function initialize() {
    let projects = JSON.parse(localStorage.getItem("projects"));

    if(projects === null) {
      createDefaultProject();
    }
    let projectsListElement = document.querySelector(".projects-list");
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

  function createDefaultProject() {
    let projectElement = createElement("div", null, ["projects-list__project", "project--selected"]);
    let projectDeleteButton = createElement("button", "X", ["projects-list__delete-project-button", "button--disabled"]);
    let projectNameButton = createElement("button", projectName, ["projects-list__project-name"]);

    projectElement.append(projectDeleteButton);
    projectElement.append(projectNameButton);
    projectsListElement.append(projectElement);

    let projectTodos = createElement("div", null, ["todo-lists__project-todos", "todo-lists__project-todos--selected"]);
    todoListsListElement.append(projectTodos);
  }

})();