function AddTodo() {

    let task = document.getElementById('input');
    
    
    const todos = document.getElementById('todos');
    const div = document.createElement('div')
    const todo = document.createElement('input');
    
    const editTodo = document.createElement('button');
    const deleteTodo = document.createElement('button');
    todo.style.fontSize = '20px';
    todo.style.font = 'bold'
    todo.disabled = true;
    deleteTodo.addEventListener('click', () => {
        div.remove()
    })
    editTodo.addEventListener('click',() => {
        todo.disabled = false;
        todo.focus();
        editTodo.disabled = true;
        
        const update = document.createElement('button');
        update.innerHTML = 'Update';
        div.appendChild(update);
        update.addEventListener('click', () => {
            todo.disabled = true;
            update.remove()
            editTodo.disabled = false;
        })
        
        
       
    } )
    editTodo.innerHTML = 'Edit';
    deleteTodo.innerHTML= 'Delete'
    
      
    todo.value = task.value;
 
    
    div.appendChild(todo);
    div.appendChild(editTodo);
    div.appendChild(deleteTodo)
    if (task.value) {
        todos.appendChild(div);
    } 
    else {
        alert('Please enter something niggs')
    }
    task.value = '';
    
    


    


    
    
    
    
}

