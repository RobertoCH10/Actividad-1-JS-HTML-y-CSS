function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("pending-tasks");
  
    if (taskInput.value.trim() !== "") {
      var newTask = document.createElement("li");
      newTask.className = "task-item";
  
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onchange = completed;
  
      var span = document.createElement("span");
      span.textContent = taskInput.value;
  
      var actionsDiv = document.createElement("div");
      actionsDiv.className = "actions";
  
      var editButton = document.createElement("button");
      editButton.textContent = "Editar";
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.onclick = deleteTask;
  
      actionsDiv.appendChild(editButton);
      actionsDiv.appendChild(deleteButton);
  
      newTask.appendChild(checkbox);
      newTask.appendChild(span);
      newTask.appendChild(actionsDiv);
  
      taskList.appendChild(newTask);
  
      taskInput.value = "";
    }
  }
  
  function completed(event) {
    var checkbox = event.target;
    var taskItem = checkbox.parentNode;
    var taskText = taskItem.querySelector("span");
    var completedTasks = document.getElementById("completed-tasks");
    var pendingTasks = document.getElementById("pending-tasks");
  
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
      taskItem.removeChild(taskItem.querySelector(".actions")); // Remover los botones del elemento
      completedTasks.appendChild(taskItem);
    } else {
      taskText.style.textDecoration = "none";
      pendingTasks.appendChild(taskItem);
      taskItem.appendChild(taskItem.querySelector(".actions")); // Restaurar los botones del elemento
    }
  }
  
  
  function deleteTask(event) {
    var taskItem = event.target.parentNode.parentNode;
    var taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
  }
  function clearCompletedTasks() {
  var completedTasks = document.getElementById("completed-tasks");
  completedTasks.innerHTML = "";
}

  