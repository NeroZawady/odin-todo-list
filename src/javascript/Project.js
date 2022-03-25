import * as Controller from "./Controller";
import { TodosList } from "./TodosList";


export class Project {
  #projectElement;
  #projectNumber;
  #todoList;

  constructor(loadFromStorage, projectNumber, projectName) {
    loadFromStorage === true ? this.#initializeFromStorage() : this.initializeNoStorage();
    this.#projectElement = this.#createProjectElement(projectName);
    this.#projectNumber = projectNumber;
    this.todoList = new TodosList();

    localStorage.setItem("project-" + this.#projectNumber);
  }

  #initializeNoStorage() {
    
  }

  #initializeFromStorage() {
    
  }

  addTodo() {

  }

  editTodo() {

  }

  completeTodo() {

  }

  setProjectNumber(projectNumber) {
    this.#projectNumber = projectNumber;
  }

  #createProjectElement(projectName) {
    let projectElement = Controller.createElement("div", null, ["projects-list__project"]);
    let projectDeleteButtonElement = Controller.createElement("button", "X", ["projects-list__delete-project-button"]);
    let projectNameButtonElement = Controller.createElement("button", projectName, ["projects-list__project-name"]);

    projectElement.append(projectDeleteButtonElement);
    projectElement.append(projectNameButtonElement);
    this.#projectsList.getProjectsListElement().append(projectElement);

    return projectElement;
  }
}