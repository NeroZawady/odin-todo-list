export let projects = JSON.parse(localStorage.getItem("projects"));
if(projects === null) projects = [];

export function addProject(project) {
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function deleteProject(projectNumber) {
  projects.splice(projectNumber, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
}