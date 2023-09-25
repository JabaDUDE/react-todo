import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount((count) => count + 1)
  }

  return (
    <>
      <h1>It Do Be Likie That Sometimes</h1>
      <div>
        <input type='text' placeholder='Add Task Here' />
        <button>Add</button>
      </div>
      <div>
        <h1>You pressed this button {count} times</h1>
        <button onClick={handleClick}>Press</button>
      </div>
    </>
  )
}

export default App
