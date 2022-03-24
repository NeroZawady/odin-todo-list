import { Todo } from "./Todo";


export class TodoList {
  #todoListElement
  #todo;

  constructor() {
    this.#todoListElement = this.#createTodoListElement();
    this.#todo = [];
  }

  addTodo(name, description, dueDate, priority) {
    this.list.push(new Todo(this.list.length, name, description, dueDate, priority))
  }

  completeTodo(todoNumber) {
    
  }

  #createTodoListElement() {
    let 
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