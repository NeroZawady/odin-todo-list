import * as Controller from "./Controller";


export class Todo {
  #todoList;
  #todoElement;
  #todoNumber;

  constructor(number, name, description, dueDate, priority) {
    this.number = number;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

  }
}