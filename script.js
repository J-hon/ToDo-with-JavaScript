{
    var items = [];
    class ToDo {
        constructor(id, body) {
            this.id = id;
            this.body = body;
        }  
    }

    var newItem = (inputValue, id) => {

        var todoListItem = inputValue.value;

        if (todoListItem.trim() !== "") {

            // create a new div element 
            var newDiv = document.querySelector('.todo-list');

            // and give it some content
            var newContent = `<li class="item"><div class="form-check"><label class="form-check-label"><input class="checkbox-${id}" type="checkbox">${todoListItem}<i class="input-helper"></i></label> </div><i class="remove mdi mdi-close-circle-outline" id="remove-${id}"></i></li>`;

            // add the text node to the newly created div
            newDiv.insertAdjacentHTML('beforeend', newContent);
            inputValue.value = "";
            inputValue.focus();
        }
    }
    
    var addItem = () => {
        
        var entry = document.querySelector('.todo-list-input');
        var id = (items.length - 1) + 1;
        var newTodo = new ToDo(id, entry.value);
        
        items.push(newTodo);
        newItem(entry, newTodo.id);
        
        return newTodo;
    }

    function completedToDo(toDo) {
        let checkToDo = document.querySelector('.checkbox-' + toDo.id);

        if(checkToDo) {
            
            checkToDo.addEventListener('change', function() {
                checkToDo.parentNode.parentNode.parentNode.classList.toggle('completed');
            });
        }
    }

    function deleteToDo(toDo) {
        let removeToDo = document.querySelector('#remove-' + toDo.id);

        if(removeToDo) {
            removeToDo.addEventListener('click', function(e) {
                var n = e.target.parentNode;
                console.log(n);
                n.remove(n);
            });
        }
    }

    var init = () => {
        document.querySelector('.todo-list-input').focus();
        
        document.querySelector('.add').addEventListener('click', addItem);

        document.addEventListener('keypress', function(event) {

            if(event.keyCode === 13 || event.which === 13) {
                let item =  addItem();
            
                completedToDo(item);
                
                deleteToDo(item);
            }
            
        });
        
    }

    console.log('Application begun...');
    init();

}