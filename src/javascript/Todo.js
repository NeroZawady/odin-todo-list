export class Todo {
  #todoList;
  #todoElement;
  #todoNumber;

  constructor(number, name, description, dueDate, priority) {
    this.number = number;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

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