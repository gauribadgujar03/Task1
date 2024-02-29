document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText !=="") {
      const newTask = document.createElement("li");
      newTask.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "deleteBtn";

      deleteBtn.addEventListener("click", function() {
        newTask.remove();
      });

      newTask.appendChild(deleteBtn);
      taskList.appendChild(newTask);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  });
});