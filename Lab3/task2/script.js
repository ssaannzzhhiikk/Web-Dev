const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") return;

  const li = document.createElement("li");

  const leftDiv = document.createElement("div");
  leftDiv.className = "left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("span");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "🗑";

  checkbox.addEventListener("change", function() {
    span.classList.toggle("done");
  });

  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
}
