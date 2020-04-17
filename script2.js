const items = [];

function addItem() {
    let toDoTask = document.getElementById('user-task');
    if (toDoTask.value === '') return alert('Enter a task');
    const id = (items.length - 1) + 1;
    // const newTodo = new ToDo(id, entry.value);
    const newTodo = {
        id: id,
        body: toDoTask.value,
    };

    items.push(newTodo);

    // create a new div element
    const newDiv = document.querySelector('.todo-list');

    // and give it some content
    const newContent = `<li class="item" id="todo-${id}"><div class="form-check"><label class="form-check-label"><input onclick="completedToDo(id)" id="todo-${id}" class="checkbox-${id}" type="checkbox">${toDoTask.value}<i class="input-helper"></i></label> </div><i class="remove mdi mdi-close-circle-outline" onclick="deleteToDo(id);" id="remove-${id}"></i></li>`;

    // add the text node to the newly created div
    newDiv.insertAdjacentHTML('beforeend', newContent);
    toDoTask.value = '';
    toDoTask.focus();

    // return newTodo;
}

function completedToDo(id) {
    const todoId = id.split('-');
    let checkToDo = document.querySelector(`.checkbox-${todoId[1]}`);

    if(checkToDo) {
        checkToDo.parentNode.parentNode.parentNode.classList.toggle('completed');
    }
}

function deleteToDo(id) {
    const todoId = id.split('-');
    let removeToDo = document.querySelector('#remove-' + todoId[1]);

    if(removeToDo) {
        document.getElementById(`todo-${todoId[1]}`).remove();
    }
}



const init = () => {
    document.querySelector('.todo-list-input').focus();

    // document.querySelector('.add').addEventListener('click', addItem);

    document.addEventListener('keypress', function(event) {

        if(event.keyCode === 13 || event.which === 13) {
            addItem();
        }

    });

};

console.log('Application begun...');
init();
