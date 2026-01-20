const addBtn = document.querySelector(".add-button");
const showPromptBtn = document.querySelector(".add-icon");
const closePromptBtn = document.querySelector(".fa-close");
const promptBox = document.querySelector(".prompt-box");

setInterval(() => {
  const tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    task.addEventListener("click", toggleTaskStatus);
  });
}, 1000);

setInterval(() => {
  const completeBtn = document.querySelectorAll(".fa-check");
  completeBtn.forEach((task) => {
    task.addEventListener("click", toggleTaskStatus);
  });
});

setInterval(() => {
  const deleteIcon = document.querySelectorAll(".fa-trash-o");
  deleteIcon.forEach((icon) => {
    icon.addEventListener("click", deleteTask);
  });
});

function addToList() {
  const taskInput = promptBox.querySelector("input").value;
  if (taskInput === "") {
    alert("Please enter a task description.");
    return;
  } else {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const deleteIcon = document.createElement("i");
    const completeBtn = document.createElement("i");
    completeBtn.classList.add("fa", "fa-check");
    deleteIcon.classList.add("fa", "fa-trash-o");

    ul.appendChild(li);
    li.textContent = taskInput;
    li.appendChild(deleteIcon);
    li.appendChild(completeBtn);

    completeBtn.addEventListener('click', ()=>{
        li.classList.toggle('stroked')
    });

    promptBox.querySelector("input").value = "";
    closePrompt();
  }
}



function deleteTask(event) {
  if (event.target.classList.contains("fa-trash-o")) {
    const li = event.target.parentElement;
    li.remove();
  }
}

function showPrompt() {
  promptBox.style.display = "flex";
}
function closePrompt() {
  promptBox.style.display = "none";
}
addBtn.addEventListener("click", addToList);
closePromptBtn.addEventListener("click", closePrompt);
showPromptBtn.addEventListener("click", showPrompt);