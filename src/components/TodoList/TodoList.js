import styles from './TodoList.module.scss'
import Todo from '../Todo/Todo'
 
export default function TodoList ({ 
    newTodo, 
    createTodo, 
    setNewTodo, 
    todos,
    completedTodos,
    moveToCompleted,
    deleteTodo
}){
    return(
        <div className={styles.todolist}>
            Would you like to add some todosfoyou:
            <input 
            className={styles.input}
            type="text" 
            value={newTodo.title} 
            onChange={(e) => {
                setNewTodo({...newTodo, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createTodo()
            }}
            />
             <h3>Todosfoyou🧾: </h3>
        {todos.map(todo => (
            <Todo 
                key={todo._id} 
                todo={todo}
                buttonAction={moveToCompleted}
                buttonText={'Complete'}
            />
        ))}
        <h4>Completed Todosfoyou👍: </h4>
        {completedTodos.map(todo =>(
            <Todo
                key={todo._id}
                todo={todo}
                buttonAction={deleteTodo}
                buttonText={'Delete'}
            />
        ))}
        </div>
    )
}