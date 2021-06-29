const form = document.getElementById('form')  //form
const inputEls = document.getElementById('input')  //input
const todoUl = document.getElementById('todos')  //List
const addBtn = document.getElementById('add')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    add();
})

function add() {
    let todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;

        //Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.id = 'delete';
        deleteBtn.innerHTML = '<i class="fas fa-2x fa-times">'
        todoEl.appendChild(deleteBtn);
        //Toggle completeness of the todo items
        todoEl.addEventListener('click', function () {
            todoEl.classList.toggle('completed');

        })

        //Delete the elements
        deleteBtn.addEventListener('click', function () {
            todoEl.remove();
        })

        todoUl.appendChild(todoEl);
        input.value = '';
    }
}

addBtn.addEventListener('click', function () {
    add();
})
