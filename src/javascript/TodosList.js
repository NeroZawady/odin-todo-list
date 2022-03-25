import * as Controller from "./Controller";
import { Todo } from "./Todo";


export class TodoList {
  #todoListElement;
  #todos;

  constructor(projectNumber) {
    this.#todoListElement = this.#createTodoListElement();
    this.#todos = [];

    localStorage.setItem("project-" + projectNumber + "-todoList");
  }

  addTodo(name, description, dueDate, priority) {
    this.list.push(new Todo(this.list.length, name, description, dueDate, priority))
  }

  completeTodo(todoNumber) {
    
  }

  #createTodoListElement() {
    let todoListElement = Controller.createElement("div", null, ["todo-lists__project-todo-list"]);
    Controller.todoListsElement.append(todoListElement);
  }
}