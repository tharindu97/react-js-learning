import { useState } from 'react';
import './TodoInput.css';

function TodoInput({ todos, setTodos }) {
    const [todo, setTodo] = useState("");

    const handleClick = () => {
        const newTodo = {
            id: 1,
            name: todo,
            isCompleted: false
        }
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo("");
    }

    return (
        <div>
           <input 
            type="text" 
            value={todo} 
            onChange={(event) => {
                setTodo(event.target.value);
            }}    
           />
           <button 
            onClick={handleClick}
           > ADD TODO </button>
        </div>
    )
}

export default TodoInput;