import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    // Acá se debería usar los hooks ya creados. E implementarlos para no repetir código. Ya que hay un hook para el uso de formularios.
    const {description, onInputChange, onResetForm } = useForm({
        description:''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();

    }

    return (
        // Como solo se va regresar un nodo padre, No hace falta usar fragmentos.
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder='¿Qué hay que hacer?'
                className='form-control'
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >Agregar</button>
        </form>
    )
}
