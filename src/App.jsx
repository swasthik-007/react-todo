import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
 
const todos=[
  {id:1, text:'todo1',isFinished:true},
  {id:2, text:'todo2',isFinished:false},
]  

  return (
    <>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
