export default function UserInput({ newTodo, setNewTodo, addTodo }){
    return(
        <div className="flex flex-col justify-center m-2">
        <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Add Task Here' className="mb-1 border-black border-solid rounded-lg p-2"/>
        <button className="font-bold leading-6 cursor-pointer rounded-sm bg-stone-300 hover:bg-stone-700 hover:text-white" onClick={addTodo}>Add</button>
        </div>
    )
}