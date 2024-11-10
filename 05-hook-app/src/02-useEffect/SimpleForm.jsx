import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Leandro',
        email: 'leandrolucas@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        /* console.log(e.target.name); */
        const {name, value} = target;
        console.log({name, value});

        setFormState({
            ...formState,
            [name]: value
        });
    }


    useEffect( () => {
        /* console.log('El UseEffect Called!'); */
    }, [] );

    useEffect( () => {
        /* console.log('El formState change!'); */
    }, [formState] );

    useEffect( () => {
        /* console.log('El Email change!'); */
    }, [email] );

    /* useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third]) */
    


    return (
        <>

            <h1>Simple Form</h1>
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

            {
                (username === 'Leandro2') && <Message/>
            }
            

        </>
    )
}
