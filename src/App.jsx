import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import UserInput from './UserInput'

function App() {
  
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  //initial state of newToDo is an empty string, so this function checks to make sure it's not just an empty string after trimming white space from both sides of input, then updates todos when the user hits the Add button. The newToDo is the 'e.target.value' of the input.
  const addTodo = () => {
    let id = todos.length + 1
    if(newTodo.trim() !== ''){
      setTodos((oldTodos) => [...oldTodos, {
        id: id,
        task: newTodo,
        completed: false
      }])
      setNewTodo('')
    }
  }
  // if(newTodo.trim() !== ''){
  //   setTodos([...todos, newTodo])
  //   setNewTodo('')
  // }
  // '_' in the filter function is a placeholder since it's not actually beingused to update the todos
  //function takes the index of the todo that is being 'deleted' and creates an updated todo list
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
  }

  //This function should move the todo that is marked 'completed' to a separate list to be grayed out.
  //TODO: complete this function
  const completedTodo= (index) => {

  }

  return (
    <div className="flex flex-col justify-center m-auto max-w-7xl">
    <div className="flex justify-center">
      <h1 className="font-bold tracking-wide text-5xl m-1.5">To Do List</h1>
    </div>
      <div>
        <UserInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      </div>
      <div className="max-w-6xl">
        <ToDoList todos={todos} deleteTodo={deleteTodo} completedTodo={completedTodo} />
        </div>
    </div>
  )
}

export default App
