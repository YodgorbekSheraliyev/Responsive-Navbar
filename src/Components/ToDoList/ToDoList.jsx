import {useState} from 'react'

const ToDoList = () => {
    const [newToDo, setNewToDo] = useState('');
    const [todos, setToDos] = useState(() => {
        const storedItem = localStorage.getItem('todos');
        return storedItem ? JSON.parse(storedItem):[]
    })

    
    const handleToDoSubmit = (event) => {
        event.preventDefault();
        if(!newToDo.trim()) return alert('Ma\'lumot kiriting!');
        
        setToDos([...todos, {id: Date.now(), text: newToDo}]);
        setNewToDo('')
        
    }
    
    localStorage.setItem('todos', JSON.stringify(todos))

    const handleChangeInput = (e) =>{
         setNewToDo(e.target.value);
    }

    const handleDelete = (id) => {
        const updateToDos = todos.filter((todo) => todo.id !==id);
        setToDos(updateToDos);
    }
  return (
    <div>
        <h1>ToDoList</h1>
        <form onSubmit={handleToDoSubmit}>
            <input type="text" value={newToDo} onChange={handleChangeInput} />
            <button type="submit">Add To-Do</button>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.text}</span>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </form>
    </div>
  )
}

export default ToDoList