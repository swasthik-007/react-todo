import { useState } from "react";

function AddTodo({addTodos}){
    const [TodoText,setTodoText]=useState('');

    return (
        <>
            <input 
            placeholder="Add your next Todo..."
            onChange={(e) => setTodoText(e.target.value)}
            value={TodoText}
            />
            <button onClick={() =>{
                addTodos(TodoText);
                setTodoText('');
            }}>Submit</button>
        </>
    )
}
export default AddTodo;