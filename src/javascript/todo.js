export class Todo {
  constructor(id, element, project, name, description, dueDate, priority) {
      this.id = id;
      this.element = element;
      this.project - project;
      this.name = name;
      this.description = description;
      this.dueDate = dueDate
      this.priority = priority;

      // localStorage.setItem(project.id + "-" + id, JSON.stringify(this));
  }

  completeTodo() {
      for(let child of this.element.children) {
          child.remove();
      }
      // localStorage.removeItem(this.project.id + "-" + this.id);
      this.element.remove();
  }

  editTodo(id, name, description, dueDate, priority) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.dueDate = dueDate
      this.priority = priority;
  }

  setId(id) {
      this.id = id;
  }
}

// export class Todo {
//   constructor(id, element, name, description, dueDate, priority) {
//     this.id = id;
//     this.element = element;
//     this.name = name;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;

//     localStorage.setItem(id, JSON.stringify(this));
//   }

//   changeTodo(name, description, dueDate, priority) {
//     this.name = name;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;

//     localStorage.setItem(id, JSON.stringify(this));
//   }

//   completeTodo() {
//     localStorage.removeItem(id);
//   }
// }