document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#create-task-form");
    const taskList = document.querySelector("#tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const taskInput = document.querySelector("#new-task-description");
      const taskDescription = taskInput.value;
  
      if (taskDescription.trim() !== "") {
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskDescription;
        taskList.appendChild(newTaskItem);
        taskInput.value = "";
      }
    });
  });