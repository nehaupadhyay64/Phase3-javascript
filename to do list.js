let tasks = []; 

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let task = {
        text: taskText,
        done: false
    };

    tasks.push(task);
    taskInput.value = "";
    showTasks();
}

function showTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerText = task.text;

        if (task.done) {
            span.classList.add("done");
        }

        span.onclick = function () {
            task.done = !task.done;
            showTasks();
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function () {
            tasks.splice(index, 1);
            showTasks();
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
