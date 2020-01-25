document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form");
  let description = document.querySelector("#new-task-description");
  let tasks = document.querySelector("tasks")
  
  form.addEventListener("submit", () => {
    var task = document.createElement("li");
    tasks.appendChild(task);
  })
});
