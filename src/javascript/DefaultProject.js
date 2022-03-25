import * as Controller from "./Controller";
import { TodosList } from "./TodosList";


export class DefaultProject {
  #projectElement;
  #todoList;

  constructor() {
    this.#projectElement = this.#createProjectElement("Default");
    this.#projectNumber = 0;
    this.todoList = new TodosList();

    localStorage.setItem("project-0");
  }

  addTodo() {

  }

  editTodo() {

  }

  completeTodo() {

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