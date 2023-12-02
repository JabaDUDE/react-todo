//useState is used as props and passed down here form the parent App.jsx as well as the deleteTodo function
export default function ToDoList({ todos, deleteTodo, completedTodo }){
    return(
        <ul className="list-none max-w-5xl">
        {todos.map((todo, index) => (
          <li key={index} className="flex m-auto max-w-full">
            <h3 className="font-bold align-middle">{todo}</h3>
            <div className="m-2 flex items-center space-x-1.5">
            <span onClick={() => completedTodo(index)} 
              className="cursor-pointer">✔️</span>
            <span onClick={() => deleteTodo(index)} 
              className="cursor-pointer">🗑️</span>
           </div>
          </li>
        ))}
      </ul> 
    );
}