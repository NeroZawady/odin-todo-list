import { Project } from "./Project";
import { TodoList } from "./TodosList";


export class ProjectsList {
  #projectsListElement;
  #todoListsElement;
  #projects;
  #todoLists;

  constructor() {
    this.#projectsListElement = document.querySelector(".projects-list");
    this.#todoListsElement = document.querySelector(".todo-lists");
    this.#projects = [];
    this.#todoLists = [];
}

  addProject(projectName) {
    this.#projects.push(new Project(this, projectName, this.#projects.length));
    this.#todoLists.push(new TodoList())
  }

  removeProject(projectNumber) {
    this.#projects.splice(projectNumber, 1);

    for(i = projectNumber + 1; i < this.#projects.length; i++)
      this.#projects[i].setProjectNumber(i + 1);

    localStorage.setItem("projects", JSON.stringify(projects));
  }

  getNumberOfProjects() {
    return this.#projects.length;
  }

  getProjectsListElement() {
    return this.#projectsListElement;
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