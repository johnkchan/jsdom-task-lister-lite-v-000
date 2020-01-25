document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.querySelector("submit");
  let description = document.querySelector("new-task-description");
  let tasks = document.querySelector("tasks")
  
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    var task = description.value;
    tasks.innerHTML += `<div id="list-${task}"><li>${task}<button>X</button></div>`;
  })
});
