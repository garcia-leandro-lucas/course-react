import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action);
    }

    const todosCount = (todos) => {
        return todos.length;
    }

    const pendingTodoCount = (todos) => {
        return todos.filter( todo => !todo.done ).length;
    }

    return {
        todos,
        // Para regresar todosCount o pendingTodoCount, puedo crear una función y retornarlos en el hook o bien, asignar la lógica directamente como se ve a continuación:
        // todosCount: todos.length
        // pendingTodoCount: todos.filter( todo => !todo.done ).length
        todosCount,
        pendingTodoCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
