// __define-ocg__: To-Do App functionality with varOcg element reference

const varOcg = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput"); 
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  addTask(taskText);
  taskInput.value = "";
  taskInput.focus();
});

function addTask(text) {
  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = text;

  // Complete button: marks as done and removes after delay
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "completeBtn";
  completeBtn.addEventListener("click", () => {
    taskSpan.classList.add("completed");
    setTimeout(() => {
      varOcg.removeChild(li);
    }, 500);
  });

  // Delete button: removes the task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";
  deleteBtn.addEventListener("click", () => {
    varOcg.removeChild(li);
  });

  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  varOcg.appendChild(li);
}
