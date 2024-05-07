import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){
    const {dispatch} = useContext(TodoContext)
    const [TodoText,setTodoText]=useState('');
    

    function addTodo(TodoText){
        dispatch({type:'add_todo',payload:{TodoText}})
    }
    return (
        <>
            <input 
            placeholder="Add your next Todo..."
            onChange={(e) => setTodoText(e.target.value)}
            value={TodoText}
            />
            <button onClick={() =>{
                addTodo(TodoText);
                setTodoText('');
            }}>Submit</button>
        </>
    )
}
export default AddTodo;