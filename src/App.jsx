import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import UserInput from './UserInput'

function App() {
  
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  // const listItems = todos.map(function(todo){
  //   <ToDoList item={todo} />
  // })

  //initial state of newToDo is an empty string, so this function checks to make sure it's not just an empty string after trimming white space from both sides of input, then updates todos when the user hits the Add button. The newToDo is the 'e.target.value' of the input.
  const addTodo = () => {
    if(newTodo.trim() !== ''){
      setTodos([...todos, newTodo])
      setNewTodo('')
    }
  }
  // '_' in the filter function is a placeholder since it's not actually beingused to update the todos
  //function takes the index of the todo that is being 'deleted' and creates an updated todo list
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
  }

  return (
    <>
      <h1 className="font-bold text-red-700">To Do List</h1>
      <div>
        <UserInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      </div>
      <div>
        <ToDoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App
