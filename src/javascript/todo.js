export class Todo {
  constructor(id, element, name, description, dueDate, priority) {
    this.id = id;
    this.element = element;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    localStorage.setItem(id, JSON.stringify(this));
  }

  changeTodo(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    localStorage.setItem(id, JSON.stringify(this));
  }

  completeTodo() {
    localStorage.removeItem(id);
  }
}