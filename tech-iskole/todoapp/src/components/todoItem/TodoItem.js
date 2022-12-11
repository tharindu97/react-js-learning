import './TodoItem.css';

function TodoItem({todo}) {
    return (
        <div>
            <h2>{todo.name}</h2>
        </div>
    )
}

export default TodoItem;