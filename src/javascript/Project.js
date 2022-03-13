export class Project {
  constructor(id, name, isDefaultProject) {
    this.id = id;
    this.name = name;
    this.todos = [];
    this.todosElement;

    
    let projectElement = document.createElement("div");
    projectElement.classList.add("projects-list__project", "project--selected");

    let projectDeleteButton = document.createElement("button");
    projectDeleteButton.textContent = "X";
    projectDeleteButton.classList.add("projects-list__delete-project-button", "button--disabled");

    let projectNameButton = document.createElement("button");
    projectNameButton.textContent = name;
    projectNameButton.classList.add("projects-list__project-name");


    if(isDefaultProject) {
      projectElement.classList.add("project--selected");
      projectDeleteButton.classList.add("button--disabled");
    }


    projectElement.append(projectDeleteButton);
    projectElement.append(projectNameButton);
    document.querySelector(".projects-list").append(projectElement);

    this.element = projectElement;

    
    let projectTodos = document.createElement("div");
    projectTodos.classList.add("todo-lists__project-todos", "todo-lists__project-todos--selected");
    if(isDefaultProject) projectTodos.classList.add("todo-lists__project-todos--selected");
    document.querySelector(".todo-lists").append(projectTodos);

    this.todosElement = projectTodos;

    setEvents();
  }

  setEvents() {
    let addProjectButton = document.querySelector(".projects-section__add-project-button");
    this.element.children[0].addEventListener("click", () => {
      
    });

    let cancelProjectButton = document.querySelector('.add-project-form button[type="reset"]');
    cancelProjectButton.addEventListener("click", () => View.closeProjectForm());

    let projectForm = document.querySelector(".add-project-form");
    projectForm.addEventListener("submit", () => processProjectForm());

    let deleteProjectButtons = document.querySelectorAll(".projects-list__delete-project-button");
    for(let deleteProjectButton of deleteProjectButtons)
      deleteProjectButton.addEventListener("click", (e) => deleteProject(e));
    
    let projectNameButtons = document.querySelectorAll(".projects-list__project-name");
    for(let projectNameButton of projectNameButtons)
      projectNameButton.addEventListener("click", (e) => selectProject(e));
  }
}