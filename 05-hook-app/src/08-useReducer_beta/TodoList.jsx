import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoItem } from './TodoItem';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Poder',
        done: false,
    },
];


export const TodoList = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState );

    return (
        <>
            <ul className='list-group'>
                {
                    todos.map( todo => (
                        /* Inicio: TodoItem */
                        <TodoItem
                            key={todo.id}
                            {...todo}
                        />
                        /* Fin: TodoItem */
                    ))
                }
            </ul>
        </>
    )
}
