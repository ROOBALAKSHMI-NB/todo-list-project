function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");

    // Create a text node for the task
    const taskText = document.createTextNode(taskValue);
    li.appendChild(taskText);

    // Add a button to mark the task as complete
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
