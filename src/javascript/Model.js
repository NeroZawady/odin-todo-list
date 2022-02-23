import * as Controller from "./Controller.js";


let projects = (JSON.parse(localStorage.getItem("projects")) === null) ? [] : JSON.parse(localStorage.getItem("projects"));
let selectedProjectId = 0;

export function getProjects() {
  return projects;
}

export function addProject(defaultProject) {
  projects.push(defaultProject);
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function getNumberOfProjects() {
  return projects.length;
}

export function setSelectedProjectId(projectId) {
  selectedProjectId = projectId;
}

export function getSelectedProjectId() {
  return selectedProjectId;
}

export function deleteProject(projectIndex) {
  projects.splice(projectIndex, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
}