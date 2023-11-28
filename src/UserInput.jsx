export default function UserInput({ newTodo, setNewTodo, addTodo}){
    return(
        <div>
        <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Add Task Here' />
        <button className="text-red" onClick={addTodo}>Add</button>
        </div>
    )
}