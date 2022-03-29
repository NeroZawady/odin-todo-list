import * as index from "./index";
import { Todo } from "./Todo";


export class TodoList {
  #project;
  #todoListElement;
  #todos;

  constructor(project) {
    this.#project = project;
    this.createTodoListElement();
    let numberOfTodos = JSON.parse(localStorage.getItem("project" + this.#project.getProjectNumber() + "-numberOfTodos"));
    numberOfTodos === null ? this.#initializeNoStorage() : this.#initializeFromStorage(numberOfTodos);
  }

  #initializeNoStorage() {
    this.#todos = [];
  }

  #initializeFromStorage(numberOfTodos) {
    this.#todos = [];
    let todoData;
    for(let i = 0; i < numberOfTodos; i++) {
      todoData = JSON.parse(localStorage.getItem("project" + this.#project.getProjectNumber() + "-todo" + i));
      this.#todos.push(new Todo(this, todoData["todoNumber"], todoData["todoName"], todoData["todoDescription"], todoData["todoDueDate"], todoData["todoPriority"]));
    }
  }

  createTodoListElement() {
    let todoListsElement = document.querySelector(".todo-lists");

    this.#project.getProjectNumber() === 0 ? this.#todoListElement = index.createElement("div", null, ["todo-lists__project-todo-list"]):
    this.#todoListElement = index.createElement("div", null, ["todo-lists__project-todo-list", "hidden"]);

    todoListsElement.append(this.#todoListElement);
  }

  addTodo(todoName, todoDescription, todoDueDate, todoPriority) {
    this.#todos.push(new Todo(this, this.#todos.length, todoName, todoDescription, todoDueDate, todoPriority));
    localStorage.setItem("project" + this.#project.getProjectNumber() + "-numberOfTodos", JSON.stringify(this.#todos.length));
  }

  getProject() {
    return this.#project;
  }

  getNumberOfTodos() {
    return this.#todos.length;
  }

  getTodoListElement() {
    return this.#todoListElement;
  }

  deselectTodoList() {
    this.#todoListElement.classList.toggle("hidden");
  }

  selectTodoList() {
    this.#todoListElement.classList.toggle("hidden");
  }

  removeTodoList() {
    for(let i = 0; i < this.#todos.length; i++) {
      localStorage.removeItem("project" + this.#project.getProjectNumber() + "-todo" + i)
    }
    localStorage.removeItem("project" + this.#project.getProjectNumber() + "-numberOfTodos");
  }

  removeTodo(todoNumber) {
    this.#todos.splice(todoNumber, 1);

    for(let i = todoNumber; i < this.#todos.length; i++)
      this.#todos[i].setTodoNumber(i);

    localStorage.setItem("project" + this.#project.getProjectNumber() + "-numberOfTodos", JSON.stringify(this.#todos.length));
  }

  setProjectNumber(newProjectNumber) {
    if(this.#project.getProjectsList().getNumberOfProjects() === newProjectNumber + 1) localStorage.removeItem("project" + (newProjectNumber + 1) + "-numberOfTodos");
    localStorage.setItem("project" + newProjectNumber + "-numberOfTodos", JSON.stringify(this.#todos.length));

    let todoData;
    for(let i = 0; i < this.#todos.length; i++) {
      todoData = JSON.parse(localStorage.getItem("project" + (newProjectNumber + 1) + "-todo" + i));
      localStorage.setItem("project" + newProjectNumber + "-todo" + i, JSON.stringify(todoData));
      if(this.#project.getProjectsList().getNumberOfProjects() === newProjectNumber + 1) localStorage.removeItem("project" + (newProjectNumber + 1) + "-todo" + i);
    }
  }

  getTodo(todoNumber) {
    return this.#todos[todoNumber];
  }
}