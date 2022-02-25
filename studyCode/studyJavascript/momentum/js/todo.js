const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");
let todoArray = [];
const TODOLIST_KEY = "todos";

function saveTodo(){
  //array 타입를 String 타입으로 바꿈
  //(3)['a', 'b', 'c'] 를 ["a","b","c"]
  const arrayJSON = JSON.stringify(todoArray); 
  localStorage.setItem(TODOLIST_KEY, arrayJSON);
}

function deleteTodo(event){
  const selectLi = event.target.parentElement;

  todoArray = todoArray.filter((element)=> {
    return element.id !== parseInt(selectLi.id);
  });

  saveTodo();
  selectLi.remove();
}

//리스트에 todo항목 추가하기
function paintTodo(newTodoObject){
  const asd = sessionStorage.getItem(ISLOGIN_KEY);

  if(asd === newTodoObject.user){
    const liElement = document.createElement("li");
    liElement.id = newTodoObject.id;

    const divElement = document.createElement("div");
    divElement.innerText = newTodoObject.text;
    
    const buttomElement = document.createElement("button");
    buttomElement.innerText = "❌";
    buttomElement.addEventListener("click", deleteTodo)

    liElement.appendChild(buttomElement);
    liElement.appendChild(divElement);
    todoList.appendChild(liElement);
  }
}

todoForm.addEventListener("submit", (event)=>{
  event.preventDefault();

  const userName = sessionStorage.getItem(ISLOGIN_KEY);
  const newTodo = todoInput.value;
  todoInput.value = '';

  const newTodoObject = {
    id: Date.now(),
    user: userName,
    text: newTodo
  };
  todoArray.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodo();
});

function initTodo(){
  document.querySelector("ul#todoList").innerHTML ="";
  const saveTodoList = localStorage.getItem(TODOLIST_KEY);

  if(saveTodoList !== null){
    const parsedTodos = JSON.parse(saveTodoList);
    todoArray = parsedTodos;
    parsedTodos.forEach(paintTodo);
  }
}
