export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(name, description, dueDate, priority) {
    this.todos.push(new Todo(name, description, dueDate, priority));
  }
}