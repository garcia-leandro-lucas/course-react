import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = ( iterationNumber = 100 ) => {

    for (let i = 0; i < iterationNumber; i++) {
        
        console.log("Ahi vamos...");
        
    }

    return `${iterationNumber} iteraciones realizadas.`;

}


export const MemoHook = () => {

   const {counter, increment} = useCounter(4000);
   const [show, setShow] = useState(true);

   const memorizeMessage = useMemo( () => heavyStuff(counter), [counter] );

   /* console.log(memorizeMessage); */

  return (
    
        <>
            <h1>MemoHook</h1>

            <h4>Counter: <small>{counter}</small></h4>
            <hr />

            <h4>{memorizeMessage}</h4>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >
                Show / Hide {JSON.stringify(show)}
            </button>
            
        </>

  )
}
