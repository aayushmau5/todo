//DOM Selectors
const addBtn = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

//Events
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',checkDelete);

//Functions

function addTodo(event) {
    //Prevent Default Behaviour
    event.preventDefault();
    //Make div element
    const todoDiv = document.createElement('div');
    //Add class to div
    todoDiv.classList.add('todo');
    //Make li element
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-item');
    //Take the input value and insert inside li
    if(todoInput.value == '') {return;}
    todoLi.innerText = todoInput.value
    //Add todoLi inside div
    todoDiv.appendChild(todoLi);
    //Make the complete-btn
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    todoDiv.appendChild(completeBtn);
    //Make the trash-btn
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
    todoDiv.appendChild(trashBtn);
    //Add todoDiv inside ul tag
    todoList.appendChild(todoDiv);
    todoInput.value = '';
}

function checkDelete(event) {
    const item = event.target;
    //For check button
    if(item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('completed');
    }
    //For delete button
    if(item.classList[0] === 'trash-btn') {
        item.parentElement.remove();
    }
}