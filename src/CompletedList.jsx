export default function CompletedList({ completedtodos }){
    
    return(
        <>
            <h3>Completed Tasks</h3>
            <ul className="list-none">
             {!completedtodos ? <li>"You're all caught up!"</li> : completedtodos.map((todo) => (
                 <li key={todo.id} >
                     <h3>{todo.task}</h3>
                </li>
                ))}
            </ul>
        </>
    )
}