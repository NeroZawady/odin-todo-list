import * as index from "./index";


export class Todo {
  #todoList;
  #todoElement;
  #todoNumber;
  #todoName;
  #todoDescription;
  #todoDueDate;
  #todoPriority;

  constructor(todoList, todoNumber, todoName, todoDescription, todoDueDate, todoPriority) {
    this.#todoList = todoList;
    this.#todoNumber = todoNumber;
    this.#todoName = todoName;
    this.#todoDescription = todoDescription;
    this.#todoDueDate = todoDueDate;
    this.#todoPriority = todoPriority;
    this.createTodoElement();
    this.addEvents();
    localStorage.setItem("project" + this.#todoList.getProject().getProjectNumber() + "-todo" + this.#todoNumber, JSON.stringify({
      todoNumber: this.#todoNumber,
      todoName: this.#todoName,
      todoDescription: this.#todoDescription,
      todoDueDate: this.#todoDueDate,
      todoPriority: this.#todoPriority,
    }));
  }

  createTodoElement() {
    this.#todoElement = index.createElement("div", null, ["todo"]);
    let todoCompleteButton = index.createElement("button", "&#x2713", ["todo__complete-todo-button"]);
    let todoNameElement = index.createElement("div", this.#todoName, ["todo__name"]);
    let todoDescriptionElement = index.createElement("div", this.#todoDescription, ["todo__description"]);
    let todoDueDateElement = index.createElement("div", this.#todoDueDate, ["todo__due-date"]);
    let todoPriorityElement = index.createElement("div", this.#todoPriority, ["todo__priority"]);
    let todoEditElement = index.createElement("button", "Edit", ["todo__edit-todo-button"]);

    this.#todoElement.append(todoCompleteButton, todoNameElement, todoDescriptionElement, todoDueDateElement, todoPriorityElement, todoEditElement);
    this.#todoList.getTodoListElement().append(this.#todoElement);
  }

  addEvents() {
    this.#todoElement.children[0].addEventListener("click", () => {
      if(this.#todoList.getNumberOfTodos() === this.#todoNumber + 1) localStorage.removeItem("project" + this.#todoList.getProject().getProjectNumber() + "-todo" + this.#todoNumber);
      this.#todoElement.remove();
      this.#todoList.removeTodo(this.#todoNumber);
    });
    
    let editTodoButton = document.querySelector(".todo__edit-todo-button");
    let editTodoModal = document.querySelector(".todos-section .modal .edit-todo-form").parentElement;
    editTodoButton.addEventListener("click", () => {
      editTodoModal.classList.toggle("hidden");
      let addTodoFormInput = document.querySelector(".edit-todo-form #name");
      addTodoFormInput.focus();
      document.querySelector('.edit-todo-form input[name="todoNumber"]').value = this.#todoNumber;
    });
  }

  setTodoNumber(newTodoNumber) {
    if(this.#todoList.getNumberOfTodos() === this.#todoNumber) localStorage.removeItem("project" + this.#todoList.getProject().getProjectNumber() + "-todo" + this.#todoNumber);
    this.#todoNumber = newTodoNumber;
    localStorage.setItem("project" + this.#todoList.getProject().getProjectNumber() + "-todo" + this.#todoNumber, JSON.stringify({
      todoNumber: this.#todoNumber,
      todoName: this.#todoName,
      todoDescription: this.#todoDescription,
      todoDueDate: this.#todoDueDate,
      todoPriority: this.#todoPriority,
    }));
  }

  editTodo(newTodoName, newTodoDescription, newTodoDueDate, newTodoPriority) {
    this.#todoName = newTodoName;
    this.#todoDescription = newTodoDescription;
    this.#todoDueDate = newTodoDueDate;
    this.#todoPriority = newTodoPriority;

    localStorage.setItem("project" + this.#todoList.getProject().getProjectNumber() + "-todo" + this.#todoNumber, JSON.stringify({
      todoNumber: this.#todoNumber,
      todoName: this.#todoName,
      todoDescription: this.#todoDescription,
      todoDueDate: this.#todoDueDate,
      todoPriority: this.#todoPriority,
    }));

    this.#todoElement.children[1].innerHTML = this.#todoName;
    this.#todoElement.children[2].innerHTML = this.#todoDescription;
    this.#todoElement.children[3].innerHTML = this.#todoDueDate;
    this.#todoElement.children[4].innerHTML = this.#todoPriority;
  }
}