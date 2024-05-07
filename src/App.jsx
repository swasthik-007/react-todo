import TodoList from './components/TodoList/TodoList'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import { useState } from 'react'

import TodoContext from './context/TodoContext'
function App() {
 
const [todos,setTodos]=useState([
  {id:1, text:'todo1',isFinished:true},
  {id:2, text:'todo2',isFinished:false},
]) ; 


  return (
    <>
      <TodoContext.Provider Value={{todos,setTodos}}>
      <AddTodo />
      <TodoList/>
      </TodoContext.Provider>
    </>
  )
}

export default App
