* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.container {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, hsl(177, 91%, 56%), #f711be);
    padding: 10px;
}

.todo-app {
    width: 100%;
    max-width: 540px;
    background: #e2a5f6;
    margin: 100px auto 20px;
    padding: 40px 30px 70px;
    border-radius: 10px;
    transition: background-color 0.3s;
}

.todo-app h2 {
    color: #FFD700;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.todo-app h2 img {
    width: 30px;
    margin-left: 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.dark-mode-toggle {
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #edeef0;
    border-radius: 30px;
    margin-bottom: 25px;
}

input {
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;
    background: transparent;
    padding: 10px;
}

button {
    border: none;
    outline: none;
    padding: 16px;
    background: cyan;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 40px;
    transition: background 0.3s;
}

button:hover {
    background: #e03e3e;
}

ul li {
    list-style: none;
    font-size: 17px;
    padding: 12px 8px 12px 50px;
    user-select: none;
    position: relative;
    transition: background 0.3s;
    margin-bottom: 5px;
    cursor: pointer; /* Hand cursor */
}

ul li:hover {
    background: #f0f0f0;
}

ul li::before {
    content: '';
    position: absolute;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-black_simple.svg/1200px-Circle-_black_simple.svg.png);
    background-size: cover;
    background-position: center;
    top: 12px;
    left: 8px;
}

ul li.checked {
    color: #555;
    text-decoration: line-through;
}

ul li.checked::before {
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Checked.svg/1024px-Checked.svg.png);
}

ul li span {
    position: absolute;
    right: 0;
    top: 5px;
    width: 40px;
    height: 40px;
    font-size: 22px;
    color: #555;
    line-height: 40px;
    text-align: center;
}
.dark-mode ul li span {
    color: #fff; /* White color for X button in dark mode */
}
ul li span:hover {
    background: #edeef0;
}

ul li.dragging {
    opacity: 0.5;
}

ul li.drag-over {
    background: #ddd;
}

ul li[draggable="true"]:not(.dragging) {
    cursor: pointer; /* Hand cursor */
}

ul li[draggable="true"] {
    cursor: grab;
}

ul li[draggable="true"]:active {
    cursor: grabbing; /* Grabbing when active */
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.dark-mode {
    background-color: #333;
    color: #fff;
}

.dark-mode .todo-app {
    background-color: #444;
    color: #fff;
}

.dark-mode input {
    background-color: #555;
    color: #fff;
    border-color: #666;
}

.dark-mode button {
    background: #e03e3e;
}

.dark-mode ul li {
    background: #555;
}

.dark-mode ul li.checked {
    color: #ddd;
    text-decoration: line-through;
}
