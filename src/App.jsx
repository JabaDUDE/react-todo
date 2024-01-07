import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import UserInput from './UserInput'
import CompletedList from './CompletedList'

function App() {
  
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  //useState for completed tasks
  const [completedtodos, setCompletedtodos] = useState([])

  //initial state of newToDo is an empty string, so this function checks to make sure it's not just an empty string after trimming white space from both sides of input, then updates todos when the user hits the Add button. The newToDo is the 'e.target.value' of the input.
  const addTodo = () => {
    let id = Math.floor(Math.random() * 1000)
    if(newTodo.trim() !== ''){
      setTodos((oldTodos) => [...oldTodos, {
        id: id,
        task: newTodo,
        completed: false
      }])
      setNewTodo('')
    }
    console.log(todos);
  }


  //function takes the id of the todo that is being 'deleted' and creates an updated todo list
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((el) => el.id !== id)
    setTodos(updatedTodos)
  }

  //This function should move the todo that is marked 'completed' to a separate list to be grayed out.
  
  export const completedTodo= (id) => {
  
    deleteTodo(id)

    const updatedTodos = todos.filter((el) => el.id == id)
    //change completed boolean to true
    const completedTodo = {
        id: updatedTodos[0].id,
        task: updatedTodos[0].task,
        completed: true
    }
    console.log(completedtodos, completedTodo, id);
    setCompletedtodos((oldList) => [...oldList, completedTodo])
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
        <ToDoList todos={todos} deleteTodo={deleteTodo} completedTodo={completedTodo}/>
      <CompletedList completedtodos={completedtodos} />
        </div>

    </div>
  )
}

export default App
