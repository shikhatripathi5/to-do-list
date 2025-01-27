const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const body = document.body;

let isDarkMode = false;

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.setAttribute("draggable", "true");
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value = ""; 
        saveData();
        addDragEventListeners(); // Re-add drag events after adding task
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    addDragEventListeners(); // Re-add drag events on page reload
}

function addDragEventListeners() {
    const items = document.querySelectorAll("#list-container li");
    items.forEach(item => {
        item.addEventListener("dragstart", onDragStart);
        item.addEventListener("dragover", onDragOver);
        item.addEventListener("drop", onDrop);
        item.addEventListener("dragend", onDragEnd);
    });
}

function onDragStart(e) {
    e.dataTransfer.setData("text", e.target.innerHTML);
    e.target.classList.add("dragging");
}

function onDragOver(e) {
    e.preventDefault();
    let draggingItem = document.querySelector(".dragging");
    let target = e.target;
    if (target && target !== draggingItem && target.nodeName === "LI") {
        target.classList.add("drag-over");
    }
}

function onDrop(e) {
    e.preventDefault();
    let draggingItem = document.querySelector(".dragging");
    let target = e.target;
    if (target && target !== draggingItem && target.nodeName === "LI") {
        listContainer.insertBefore(draggingItem, target);
    }
}

function onDragEnd(e) {
    const items = document.querySelectorAll("#list-container li");
    items.forEach(item => {
        item.classList.remove("dragging", "drag-over");
    });
    saveData();
}

function clearAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        listContainer.innerHTML = "";
        saveData();
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    body.classList.toggle("dark-mode", isDarkMode);
    saveDarkMode();
}

function loadDarkMode() {
    if (localStorage.getItem("darkMode") === "true") {
        isDarkMode = true;
        body.classList.add("dark-mode");
    }
}

function saveDarkMode() {
    localStorage.setItem("darkMode", isDarkMode);
}

showTask();
loadDarkMode();
