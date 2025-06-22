import { useState } from "react"

export const TodoAdd = ({onNewTodo}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        /* console.log(event.target.value) */
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        /* console.log(event.target) */
        event.preventDefault();
        onNewTodo(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit} aria-label='form'>
                <input 
                    type="text"
                    placeholder='¿Qué hay que hacer?'
                    className='form-control'
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1'
                    onClick={onSubmit}
                >Agregar</button>
            </form>
        </>
    )
}
