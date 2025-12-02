const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${text}</span>
    <button onclick="deleteTask(this)">X</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleComplete(el) {
  el.classList.toggle("completed");
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
