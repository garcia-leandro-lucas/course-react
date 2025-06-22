import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( todo ) => {
        console.log([{
            id: 10,
            description: todo,
            done: false,
        }]);
    }

    return (
        <>

            <h1>Todo App 10, <small>Pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* Inicio TodoList */}
                        <TodoList />
                    {/* Fin TodoList */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* -Inicio: TodoAdd onNewTodo( todo ) */}
                        {/* { id: new Date() ..., description: '', done: false } */}
                        <TodoAdd onNewTodo={ value => handleNewTodo(value) }/>
                    {/* -Inicio: TodoAdd */}
                </div>
            </div>

        </>
    )
}
