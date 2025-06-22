import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoItem } from './TodoItem';

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {



    return (
        // Como solo se va regresar un nodo padre, No hace falta usar fragmentos.
        <ul className='list-group'>
            {
                todos.map( todo => (
                    /* Inicio: TodoItem */
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo = {onToggleTodo}
                    />
                    /* Fin: TodoItem */
                ))
            }
        </ul>
    )
}
