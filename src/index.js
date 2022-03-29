import normalize from "./normalize.css";
import { ProjectsList } from "./ProjectsList";
import style from "./style.css";

let projectsList = new ProjectsList();
initialize();

function initialize() {
  addEvents();
}

function addEvents() {
  let addProjectButton = document.querySelector(".projects-section__add-project-button");
  let addProjectModal = document.querySelector(".projects-section .modal");
  let addProjectForm = document.querySelector(".add-project-form");
  let addProjectCancelButton = document.querySelector(".add-project-form__cancel");
  let addProjectFormInput = document.querySelector(".add-project-form input");

  addProjectButton.addEventListener("click", () => {
    addProjectModal.classList.toggle("hidden");
    addProjectFormInput.focus();
  });

  addProjectModal.addEventListener("click", () => {
    addProjectModal.classList.toggle("hidden");
    addProjectForm.reset();
  });

  addProjectForm.addEventListener("submit", () => {
    event.preventDefault();
    let projectFormData = new FormData(addProjectForm);
    addProjectModal.classList.toggle("hidden");
    projectsList.addProject(projectFormData.get("name"));
    addProjectForm.reset();
  });
  
  addProjectForm.addEventListener("click", () => {
    event.stopPropagation();
  });

  addProjectCancelButton.addEventListener("click", () => {
    addProjectModal.classList.toggle("hidden");
  });


  let addTodoButton = document.querySelector(".todos-section__add-todo-button");
  let addTodoModal = document.querySelector(".todos-section .modal .add-todo-form").parentElement;
  let addTodoForm = document.querySelector(".add-todo-form");
  let addTodoCancelButton = document.querySelector(".add-todo-form__cancel");

  addTodoButton.addEventListener("click", () => {
    addTodoModal.classList.toggle("hidden");
    let addTodoFormInput = document.querySelector(".add-todo-form #name");
    addTodoFormInput.focus();
  });

  addTodoModal.addEventListener("click", () => {
    addTodoModal.classList.toggle("hidden");
    addTodoForm.reset();
  });

  addTodoForm.addEventListener("submit", () => {
    event.preventDefault();
    let todoFormData = new FormData(addTodoForm);
    addTodoModal.classList.toggle("hidden");
    projectsList.getSelectedProject().getTodoList().addTodo(todoFormData.get("name"), todoFormData.get("description"), todoFormData.get("dueDate"), todoFormData.get("priority"));
    addTodoForm.reset();
    event.preventDefault(); // CHECK - why do I need this?
  });
  
  addTodoForm.addEventListener("click", () => {
    event.stopPropagation();
  });

  addTodoCancelButton.addEventListener("click", () => {
    addTodoModal.classList.toggle("hidden");
  });


  let editTodoButton = document.querySelector(".todo__edit-todo-button");
  let editTodoModal = document.querySelector(".todos-section .modal .edit-todo-form").parentElement;
  let editTodoForm = document.querySelector(".todos-section .modal .edit-todo-form");
  let editTodoCancelButton = editTodoForm.querySelector(".edit-todo-form__cancel");

  editTodoModal.addEventListener("click", () => {
    editTodoModal.classList.toggle("hidden");
    editTodoForm.reset();
  });
  
  editTodoForm.addEventListener("submit", () => {
    event.preventDefault();
    let todoFormData = new FormData(editTodoForm);
    editTodoModal.classList.toggle("hidden");
    projectsList.getSelectedProject().getTodoList().getTodo(todoFormData.get("todoNumber")).editTodo(todoFormData.get("name"), todoFormData.get("description"), todoFormData.get("dueDate"), todoFormData.get("priority"));
    editTodoForm.reset();
    event.preventDefault(); // CHECK - why do I need this?
  });
  
  editTodoForm.addEventListener("click", () => {
    event.stopPropagation();
  });

  editTodoCancelButton.addEventListener("click", () => {
    editTodoModal.classList.toggle("hidden");
  });


  window.addEventListener("keyup", (key) => {
    if(key.code === "Escape") {
      if(!addProjectModal.classList.contains("hidden")) {
        addProjectModal.classList.toggle("hidden");
        addProjectForm.reset();
      } else if(!addTodoModal.classList.contains("hidden")) {
        addTodoModal.classList.toggle("hidden");
        addTodoForm.reset();
      } else if(!editTodoModal.classList.contains("hidden")) {
        editTodoModal.classList.toggle("hidden");
        editTodoForm.reset();
      }
    }
  });
}

export function createElement(tag, text, classes) {
  let element = document.createElement(tag);
  
  if(text !== null) element.innerHTML = text;

  if(classes !== null) {
    for(let c of classes) {
      element.classList.add(c);
    }
  }

  return element;
}