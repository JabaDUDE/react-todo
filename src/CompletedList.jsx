export default function CompletedList({ completedtodos }){
    
    return(
        <>
            <h3>Completed Tasks</h3>
            <ul className="list-none">
                {completedtodos.map((todo) => (
                <li key={todo.id} >
                    <h3 className="line-through text-slate-700">{todo.task}</h3>
                </li>
                ))}
            </ul>
        </>
    )
}