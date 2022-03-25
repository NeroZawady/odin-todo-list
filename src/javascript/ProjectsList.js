import { DefaultProject } from "./DefaultProject";
import { Project } from "./Project";


export class ProjectsList {
  #projects;

  constructor() {
    let numberOfProjects = JSON.parse(localStorage.getItem("numberOfProjects"));
    numberOfProjects === null ? this.#initializeNoStorage() : this.#initializeFromStorage(numberOfProjects);
  }

  #initializeNoStorage() {
    this.#projects = [];
    this.#addDefaultProject();
  }

  #initializeFromStorage(numberOfProjects) {
    // this.projects = JSON.parse(localStorage.getItem("projects"));
    this.#projects.push(new DefaultProject());

    for(i = 1; i < numberOfProjects; i++) {
      this.#projects.push(new Project(this.#projects.length, projectName));
    }
  }
  
  #addDefaultProject() {
    this.#projects.push(new DefaultProject());
    localStorage.setItem("numberOfProjects", 1);
    // localStorage.setItem("projects", this.#projects);
  }

  addProject(projectName) {
    this.#projects.push(new Project(this.#projects.length, projectName));
    localStorage.setItem("numberOfProjects", this.#projects.length + 1);
    // localStorage.setItem("projects", this.#projects);
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
}