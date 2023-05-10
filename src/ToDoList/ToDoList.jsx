import {useState} from 'react'

const ToDoList = () => {
    const [editingTodo, setEditingTodo] = useState(null)
    const [newToDo, setNewToDo] = useState('');
    const [todos, setToDos] = useState(() => {
        const storedItem = localStorage.getItem('todos');
        return storedItem ? JSON.parse(storedItem):[]
    })


    const handleToDoSubmit = (event) => {
        event.preventDefault();
        if(!newToDo.trim()) return alert('Ma\'lumot kiriting!');

        if(editingTodo !== null){
        const updateTodo = todos.map((todo) => {
             todo.id === editingTodo ? {...todo, text:newToDo}: todo;
        });
        setToDos(updateTodo);
        setEditingTodo(null);
        // setNewToDo('');
        }else {
        setToDos([...todos, {id: Date.now(), text: newToDo}]);
        setNewToDo('')
        }

    }

    localStorage.setItem('todos', JSON.stringify(todos))

    const handleChangeInput = (e) =>{
         setNewToDo(e.target.value);
    }

    const handleDelete = (id) => {
        const updateToDos = todos.filter((todo) => todo.id !==id);
        setToDos(updateToDos);
    }
    const handleEdit = (id) => {
        const editTodo = todos.map((todo) => todo.id === id);
        setEditingTodo(id)
        setToDos(editTodo);
        setNewToDo(editTodo.text)
    }
  return (
    <div>
        <h1>ToDoList</h1>
        <form onSubmit={handleToDoSubmit}>
            <input type="text" value={newToDo} onChange={handleChangeInput} />
            <button type="submit">Add To-Do</button>
        </form>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.text}</span>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            <button onClick={() => handleEdit(todo.id)}>Edit</button>
                        </li>
                    ))
                }
            </ul>
    </div>
  )
}

export default ToDoList