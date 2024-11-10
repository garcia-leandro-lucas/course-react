import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    // Funciones con argumentos
    (value) => {
      setCounter( (c) => c + value );
    }
    
    // Funciones sin argumentos
    /* () => {
      setCounter( (c) => c +1 );
    } */
    ,
    [],
  )

  useEffect(() => {
   /*  incrementFather(); */
  }, [incrementFather])
  
  

 /*  const incrementFather = () => {
    setCounter( counter + 1 );
  } */

  return (
    <>
        <div>CallBack Hook</div>
        <hr />
        <h1>useCallBack Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={ incrementFather } />

    </>
  )
}
