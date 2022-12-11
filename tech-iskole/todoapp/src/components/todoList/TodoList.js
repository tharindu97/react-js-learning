import { useState } from 'react';
import TodoInput from '../todoInput/TodoInput';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.css';


function TodoList() {
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <h2>My Todos</h2>
            <TodoInput  todos={todos} setTodos={setTodos} />
            <div>
                {todos.map((item) => <TodoItem key={item.id}  todo={item}/>)}
            </div>
        </div>
    )
}

export default TodoList;