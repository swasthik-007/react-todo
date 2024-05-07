import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){
    const {todos,setTodos} = useContext(TodoContext)
    const [TodoText,setTodoText]=useState('');
    

    function addTodo(TodoText){
        let nextId =todos.length +1;
        setTodos([...todos,{id:nextId,text:TodoText,isFinished :false}]);
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