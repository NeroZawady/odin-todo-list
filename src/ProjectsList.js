import { DefaultProject } from "./DefaultProject";
import { Project } from "./Project";

export class ProjectsList {
  #projectsListElement;
  #projects;
  #selectedProject;

  constructor() {
    this.#projectsListElement = document.querySelector(".projects-list");

    let numberOfProjects = JSON.parse(localStorage.getItem("numberOfProjects"));
    if(numberOfProjects === null) {
      this.#initializeNoStorage();
    } else {
      this.#initializeFromStorage(numberOfProjects);
      // if(numberOfProjects === 1) {
      //   this.#initializeFromStorage(numberOfProjects);
      // } else {
      //   this.#initializeFromStorage(numberOfProjects);
      // }
    }
  }

  #initializeNoStorage() {
    this.#projects = [new DefaultProject(this)];
    this.#selectedProject = this.#projects[0];
    localStorage.setItem("numberOfProjects", JSON.stringify(this.#projects.length));
  }

  #initializeFromStorage(numberOfProjects) {
    this.#projects = [new DefaultProject(this)];
    this.#selectedProject = this.#projects[0];

    let projectData;
    for(let i = 1; i < numberOfProjects; i++) {
      projectData = JSON.parse(localStorage.getItem("project" + i));
      this.#projects.push(new Project(this, projectData["projectNumber"], projectData["projectName"]));
    }
  }

  getProjectsListElement() {
    return this.#projectsListElement;
  }

  addProject(projectName) {
    this.#projects.push(new Project(this, this.#projects.length, projectName));
    localStorage.setItem("numberOfProjects", JSON.stringify(this.#projects.length));
  }

  setSelectedProject(newSelectedProject) {
    this.#selectedProject.deselectProject();
    this.#selectedProject = newSelectedProject;
    this.#selectedProject.selectProject();
  }

  getSelectedProject() {
    return this.#selectedProject;
  }

  removeProject(projectNumber) {
    if(this.#selectedProject.getProjectNumber() === projectNumber) {
      this.setSelectedProject(this.#projects[0]);
    }

    this.#projects.splice(projectNumber, 1);

    for(let i = projectNumber; i < this.#projects.length; i++) {
      this.#projects[i].setProjectNumber(i);
      this.#projects[i].getTodoList().setProjectNumber(i);
    }

    localStorage.setItem("numberOfProjects", JSON.stringify(this.#projects.length));
  }

  getNumberOfProjects() {
    return this.#projects.length;
  }
}