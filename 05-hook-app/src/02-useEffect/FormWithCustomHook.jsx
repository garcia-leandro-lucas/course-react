import { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    /* const {username, email, password} = formState; */

    return (
        <>

            <h1>Formulario Form With Custom Hook</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="User Name"
                name="username"
                value={username}
                onChange={ onInputChange }
            />
            <br />
            <input 
                type="email"
                className="form-control"
                placeholder="leandro@gmail.com"
                name="email"
                value={email}
                onChange={ onInputChange }
            />
            <br />
            <input 
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={ onInputChange }
            />
            <br />
            <button onClick={onResetForm} className='btn btn-primary'>Borrar</button>

            {
                (username === 'Leandro2') && <Message/>
            }
            

        </>
    )
}
