document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

/**
 * Task form
 */
const taskForm = document.querySelector("#taskForm");
const account = document.querySelector('#account');

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = taskForm["title"].value;
  const description = taskForm["description"].value;
  const createdBy = account.value;
  console.log("datos  "+title+"  "+ description+"  "+ createdBy);
  App.createTask(title, description,createdBy);
});
