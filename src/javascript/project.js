export class Project {
  constructor(id, name) {
      this.id = id;
      this.name = name;
      this.todos = [];

      let projectContainer = document.createElement("div");
      projectContainer.classList.add("projects-list__project");
  
      let projectDelete = document.createElement("button");
      projectDelete.classList.add("projects-list__delete-project-button")
      projectDelete.textContent = "X";
      projectContainer.append(projectDelete);
  
      let projectButton = document.createElement("button");
      projectButton.classList.add("projects-list__project-name")
      projectButton.textContent = this.name;
      projectContainer.append(projectButton);

      this.element = projectContainer;
    
      this.element.children[0].addEventListener("click", () => this.deleteProject());
      this.element.children[-1].addEventListener("click", () => this.selectProject());

      projectsListDOM.append(projectContainer);

      localStorage.setItem(id, JSON.stringify(this));
  }

  selectProject() {
    if(selectedProject !== this.element) {
      this.element.classList.add("project--selected");
      selectedProject.classList.remove("project--selected");
      selectedProject = this.element;
    }
  }

  deleteProject() {
    projects.splice(id, 1);
    projectsListDOM.splice(id, 1);
    
    for(let child of this.element.children) child.remove();

    if(selectedProject === this.element) {
      defaultProject.classList.add("project--selected");
      selectedProject = defaultProject;
    }

    this.element.remove();
  }

  loadProject() {
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projects-list__project");

    let projectDelete = document.createElement("button");
    projectDelete.classList.add("projects-list__delete-project-button")
    projectDelete.textContent = "X";
    projectContainer.append(projectDelete);

    let projectButton = document.createElement("button");
    projectButton.classList.add("projects-list__project-name")
    projectButton.textContent = this.name;
    projectContainer.append(projectButton);

    this.element = projectContainer;
    projectsListDOM.append(projectContainer);
  }

  addTodo(id, element, name, description, dueDate, priority) {
      this.todos.push(new Todo(this.todos.length, element, this, name, description, dueDate, priority))

      localStorage.setItem(id, JSON.stringify(this));
  }

  completeTodo(id, element) {
      this.todos[id].completeTodo(element);
      this.todos.splice(id, 1);

      for(let i = id; i < this.todos.length; i++) {
          this.todos[i].setId(i);
      }

      localStorage.setItem(id, JSON.stringify(this));
  }

  editTodo(id, name, description, dueDate, priority) {
      this.todos[id].editTodo(id, name, description, dueDate, priority)
      localStorage.setItem(id, JSON.stringify(this));
  }
}

export class DefaultProject {
  constructor(id, name) {
      this.id = id;
      this.name = name;
      this.todos = [];


      let projectContainer = document.createElement("div");
      projectContainer.classList.add("projects-list__project", "project--selected");
  
      let projectDelete = document.createElement("button");
      projectDelete.classList.add("projects-list__delete-project-button", "button--disabled");
      projectDelete.textContent = "X";
      projectContainer.append(projectDelete);
  
      let projectButton = document.createElement("button");
      projectButton.classList.add("projects-list__project-name");
      projectButton.textContent = this.name;
      projectContainer.append(projectButton);
  
      this.element = projectContainer;
      projectsListDOM.append(projectContainer);

      localStorage.setItem(id, JSON.stringify(this));
  }

  loadProject(projectsListDOM) {
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projects-list__project", "project--selected");

    let projectDelete = document.createElement("button");
    projectDelete.classList.add("projects-list__delete-project-button", "button--disabled");
    projectDelete.textContent = "X";
    projectContainer.append(projectDelete);

    let projectButton = document.createElement("button");
    projectButton.classList.add("projects-list__project-name");
    projectButton.textContent = this.name;
    projectContainer.append(projectButton);

    this.element = projectContainer;
    projectsListDOM.append(projectContainer);
  }
}