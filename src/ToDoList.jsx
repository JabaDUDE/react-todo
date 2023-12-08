//useState is used as props and passed down here form the parent App.jsx as well as the deleteTodo function
export default function ToDoList({ todos, deleteTodo, completedTodo }){
    return(
        <ul className="list-none max-w-full">
        {todos.map((todo) => (
          <li key={todo.id} className="flex m-auto justify-between">
            <div>
              <h3 className="font-bold align-middle">{todo.task}</h3>
            </div>
            <div className="m-2 flex items-center space-x-1.5">
              <span onClick={() => completedTodo()} 
                className="cursor-pointer">✔️</span>
              <span onClick={() => deleteTodo(todo.id)} 
                className="cursor-pointer">🗑️</span>
           </div>
          </li>
        ))}
      </ul> 
    );
}