const todoinput = document.querySelector(".todo-input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function setLocalstorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  tasks.forEach((task) => {
    resulttodo(task);
  });
}

function resulttodo(task) {
  const listitem = document.createElement("li");
  listitem.className = "list-item";
  listitem.innerHTML = `<span>${task}</span>
    <button type="button" class="edit-btn" onclick="Edit_todo(this)">Edit</button>
    <button type="button" class="remove-btn" onclick="Remove_todo(this)">Remove</button>`;
  list.appendChild(listitem);
}

btn.addEventListener("click", () => {
  const inputval = todoinput.value.trim();
  if (inputval) {
    tasks.push(inputval);
    setLocalstorage();
    resulttodo(inputval);
    todoinput.value = "";
  }
  console.log(tasks);
});

const Edit_todo = (elem) => {
    const editval = elem.previousElementSibling;
    if (editval.textContent.trim() !== "") {
      todoinput.value = editval.textContent;
      const taskIndex = tasks.indexOf(editval.textContent);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        setLocalstorage();
      }
      editval.parentElement.remove();
      console.log(taskIndex)
    }
  };


const Remove_todo = (elem) => {
    const taskval = elem.previousElementSibling.previousElementSibling.textContent;
  const taskIndex = tasks.indexOf(taskval);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    setLocalstorage();
  }
  elem.parentElement.remove();
  console.log(taskval)
}
 loadTasksFromLocalStorage();
