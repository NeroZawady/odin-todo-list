import { TodosList } from "./TodosList";


export class Project {
  #projectsList;
  #projectElement;
  #projectNumber;
  #todoList;
  #todo;

  constructor(projectsList, projectName, projectNumber) {
    this.#projectsList = projectsList;
    this.#projectElement = this.#createProjectElement(projectName);
    this.#projectNumber = projectNumber;
    this.todoList = new TodosList();
  }

  setProjectNumber(projectNumber) {
    this.#projectNumber = projectNumber;
  }

  #createProjectElement(projectName) {
    let projectElement = this.#createElement("div", null, ["projects-list__project"]);
    let projectDeleteButtonElement = this.#createElement("button", "X", ["projects-list__delete-project-button"]);
    let projectNameButtonElement = this.#createElement("button", projectName, ["projects-list__project-name"]);

    projectElement.append(projectDeleteButtonElement);
    projectElement.append(projectNameButtonElement);
    this.#projectsList.getProjectsListElement().append(projectElement);

    return projectElement;
    let projectTodos = this.#createElement("div", null, ["todo-lists__project-todo-list"]);
    todoListsListElement.append(projectTodos);
  }

  #createElement(tag, text, classes) {
    let element = document.createElement(tag);
    
    if(text !== null) element.innerHTML = text;
  
    if(classes !== null) {
      for(let c of classes) {
        element.classList.add(c);
      }
    }
  
    return element;
  }
}