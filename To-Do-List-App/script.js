const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", addTask);

function addTask() {

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);

  saveTasks();

  renderTasks();

  taskInput.value = "";
}

function renderTasks() {

  taskList.innerHTML = "";

  tasks.forEach((task) => {

    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.classList.add("task-text");

    if (task.completed) {
      span.classList.add("completed");
    }

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("task-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", () => {
      toggleComplete(task.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);
  });
}

function toggleComplete(id) {

  tasks = tasks.map((task) => {

    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed
      };
    }

    return task;
  });

  saveTasks();

  renderTasks();
}

function deleteTask(id) {

  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();

  renderTasks();
}

function saveTasks() {

  localStorage.setItem("tasks", JSON.stringify(tasks));
}