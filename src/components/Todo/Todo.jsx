import { useState } from "react";

function Todo({finishTodo,editTodo,deleteTodo,text,isFinished}){
    
    const [isEditing,setisEditing]=useState(false);
    const [TodoText,setTodoText]=useState(text);
    
    
    return(
        <div>
            <input type="checkbox" checked={isFinished}  onChange={()=>finishTodo(!isFinished)}/>
            {isEditing? <input value={TodoText} onChange={(e)=> setTodoText(e.target.value)}/>  :<span>  {TodoText}  </span>}
            <button onClick={() => {
            setisEditing(!isEditing);
            editTodo(TodoText);
        }}> {isEditing? 'Save':'Edit'}   </button>
            <button onClick={deleteTodo}> Delete </button> 
        </div>
    )
    
    }

    export default Todo;