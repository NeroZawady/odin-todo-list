import * as index from "./index";
import { TodoList } from "./TodoList";


export class DefaultProject {
  #projectsList;
  #projectElement;
  #todoList;
  // #projectNumber;
  // #projectName;

  constructor(projectsList) {
    this.#projectsList = projectsList;
    this.createProjectElement();
    this.#todoList = new TodoList(this);
    this.#addEvents();
  }

  getTodoList() {
    return this.#todoList;
  }

  createProjectElement() {
    let projectElement = index.createElement("div", null, ["projects-list__project", "project--selected"]);
    let projectDeleteButtonElement = index.createElement("button", "X", ["projects-list__delete-project-button", "button--disabled"]);
    let projectNameButtonElement = index.createElement("button", "Default", ["projects-list__project-name"]);

    projectElement.append(projectDeleteButtonElement);
    projectElement.append(projectNameButtonElement);
    this.#projectsList.getProjectsListElement().append(projectElement);

    this.#projectElement =  projectElement;
  }

  #addEvents() {
    this.#projectElement.children[1].addEventListener("click", () => {
      this.#projectsList.setSelectedProject(this)
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

  getProjectNumber() {
    return 0;
  }
}