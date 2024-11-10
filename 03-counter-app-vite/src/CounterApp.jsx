import {useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = (e) => {
       setCounter((count) => count + 1)
    } 

    const handleTakeOut = (e) => {
        setCounter((count) => count - 1)
    } 

    const reset = (e) => {
        setCounter((count) => count = value)
    } 

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={handleTakeOut}>-1</button>
            <button aria-label="btn-reset" onClick={reset}>Reset</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number
};

