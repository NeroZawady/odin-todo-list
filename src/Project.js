import * as index from "./index";
import { TodoList } from "./TodoList";


export class Project {
  #projectsList;
  #projectElement;
  #projectNumber;
  #projectName;
  #todoList;

  constructor(projectsList, projectNumber, projectName) {
    this.#projectsList = projectsList;
    this.#projectNumber = projectNumber;
    this.#projectName = projectName;
    this.createProjectElement();
    this.#todoList = new TodoList(this);
    this.#addEvents();
    localStorage.setItem("project" + this.#projectNumber, JSON.stringify({
      projectNumber: this.#projectNumber,
      projectName: this.#projectName,
    }));
  }

  getTodoList() {
    return this.#todoList;
  }

  createProjectElement() {
    let projectElement = index.createElement("div", null, ["projects-list__project"]);
    let projectDeleteButtonElement = index.createElement("button", "X", ["projects-list__delete-project-button"]);
    let projectNameButtonElement = index.createElement("button", this.#projectName, ["projects-list__project-name"]);

    projectElement.append(projectDeleteButtonElement);
    projectElement.append(projectNameButtonElement);
    this.#projectsList.getProjectsListElement().append(projectElement);

    this.#projectElement =  projectElement;
  }

  #addEvents() {
    this.#projectElement.children[1].addEventListener("click", () => {
      this.#projectsList.setSelectedProject(this)
    });

    this.#projectElement.children[0].addEventListener("click", () => {
      if(this.#projectsList.getNumberOfProjects() === this.#projectNumber + 1) localStorage.removeItem("project" + this.#projectNumber);
      this.#projectElement.remove();
      this.#todoList.getTodoListElement().remove();
      this.#todoList.removeTodoList();
      this.#projectsList.removeProject(this.#projectNumber);
    });
  }

  selectProject() {
    this.#projectElement.classList.toggle("project--selected");
    this.#todoList.selectTodoList();
  }

  deselectProject() {
    this.#projectElement.classList.toggle("project--selected");
    this.#todoList.deselectTodoList();
  }

  setProjectNumber(newProjectNumber) {
    if(this.#projectsList.getNumberOfProjects() === this.#projectNumber) localStorage.removeItem("project" + this.#projectNumber);
    this.#projectNumber = newProjectNumber;
    localStorage.setItem("project" + this.#projectNumber, JSON.stringify({
      projectNumber: this.#projectNumber,
      projectName: this.#projectName,
    }));
  }

  getProjectNumber() {
    return this.#projectNumber;
  }

  getProjectsList() {
    return this.#projectsList;
  }
}