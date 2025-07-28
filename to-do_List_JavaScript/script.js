let todo=[];
const todoInput=document.getElementById("todoInput");
const todoList=document.getElementById("todoList"); 
const todoCount=document.getElementById("todoCount");
const addButton=document.getElementById("addButton");
const deleteButton=document.getElementById("deleteButton");

//Initialize
document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addTask); // parantez YOK
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  deleteButton.addEventListener("click", deleteAllTasks); // parantez YOK

  displayTask();
});

function addTask() {
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    todo.push({ text: newTask, disabled: false });
    todoInput.value = "";
    displayTask();
  }
}

function deleteAllTasks(){
    todo=[];
    displayTask();
}

function displayTask(){
    todoList.innerHTML="";

    todo.forEach(function(item){
        const li=document.createElement("li");
        li.textContent=item.text;
        todoList.appendChild(li);
    });
    todoCount.textContent= `All : ${todo.length}`;
}
