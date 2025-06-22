
// Acá el componente puede recibir cada una de las propiedades "({id, description, done, ..etc})", pero sería mejor recibir todo el "todo" en caso de que
// a futuro haya mas propiedades.
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span
                className={`align-self-center ${todo.done ?'text-decoration-line-through':''}`}
                onClick={ () => onToggleTodo(todo.id) }
                aria-label="span"
                >
            { todo.description }</span>
            <button 
                className='btn btn-danger'
                onClick={ () => onDeleteTodo( todo.id ) }
                aria-label="button-delete"
            >Borrar</button>
        </li>
    )
}
