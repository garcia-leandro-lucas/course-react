import { useState } from 'react';

export const CounterApp = () => {

    const [ state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    });

    const {counter1, counter2, counter3} = state;

  return (
    <>
        <h1>Counter1: {counter1} </h1>
        <h1>Counter2: {counter2} </h1>
        <h1>Counter3: {counter3} </h1>
        <hr />

        {/* Version 1 Mejorada */}
        <button 
        className="btn"
        onClick={ () => setCounter({
            ...state,
            counter1: counter1 + 1
        }) }
        > +1 </button>

        {/* Version 2 No usar cuando tengan muchas propiedades */}
        {/* <button 
        className="btn"
        onClick={ () => setCounter({
            counter1: counter1 + 1,
            counter2: counter2,
            counter3: counter3
        }) }
        > +1 </button> */}
    </>
  )
}
