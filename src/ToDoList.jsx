//useState is used as props and passed down here form the parent App.jsx as well as the deleteTodo function
export default function ToDoList({ todos, deleteTodo }){
    return(
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span onClick={() => deleteTodo(index)} className="cursor-pointer">🗑️</span>
          </li>
        ))}
      </ul> 
    );
}