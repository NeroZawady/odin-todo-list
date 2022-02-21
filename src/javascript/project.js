export class Project {
  constructor(id, name, element) {
    this.id = id;
    this.name = name;
    this.element = element;
    this.todos = [];

    localStorage.setItem(id, JSON.stringify(this));
  }

  addTodo(name, description, dueDate, priority) {
    this.todos.push(new Todo(id + "_todo_" + todos.length, name, description, dueDate, priority));
  }

  completeTodo(todo) {

    for(todo of todos) {
      todo.id = this.id + "_todo_" + todos.indexOf(todo);
    }
  }

  changeTodo() {

  }
}