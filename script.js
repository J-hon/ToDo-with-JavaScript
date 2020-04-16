{
    var items = [];
    
    var ToDo = (id, body) => {
        this.id = id;
        this.body = body;
    };

    var newItem = inputValue => {

        var todoListItem = inputValue.value;

        if (todoListItem.trim() !== "") {

            // create a new div element 
            var newDiv = document.querySelector('.todo-list');

            // and give it some content
            var newContent = `<li class="item"><div class="form-check"><label class="form-check-label"><input class="checkbox-${this.id}" type="checkbox">${todoListItem}<i class="input-helper"></i></label> </div><i class="remove mdi mdi-close-circle-outline"></i></li>`;

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
        newItem(entry);
        
        return newTodo;
    }
    
    let l;

    var init = () => {
        
        document.querySelector('.add').addEventListener('click', addItem);

        document.addEventListener('keypress', function(event) {

            if(event.keyCode === 13 || event.which === 13) {
                l =  addItem();
                console.log(l.id);
            
                let event1 = document.querySelector('.checkbox-' + l.id);
        
                if(event1) {
                   event1.addEventListener('change', function() {
                        console.log(event1);
                    });
                }
            }
            
        });
        
    }

    console.log('Application begun...');
    init();

}