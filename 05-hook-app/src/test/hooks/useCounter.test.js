import { renderHook } from "@testing-library/react"
import { useCounter } from "../../hooks/useCounter";
import { act } from "react";

describe('Pruebas en el useCounter', () => { 
    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;
        // console.log(result);

        expect(counter).toBe(10);
        expect(increment).toEqual( expect.any(Function) );
        expect(decrement).toEqual( expect.any(Function) );
        expect(reset).toEqual( expect.any(Function) );

    });

    test('Debe de generar el counter con el valor de 100', () => {

        const initialValue = 100;
        const {result} = renderHook( () => useCounter(initialValue) );
        const {counter} = result.current;
        // console.log(counter);

        expect( counter ).toBe(100);
    });

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;
        
        act(() => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(103);
    });

    test('Debe de decrement el contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;
        
        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(97);
    });

    test('Debe establecer el valor predefenido del contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, reset } = result.current;
        
        act(() => {
            decrement();
            reset();
        });

        expect(result.current.counter).toBe(result.current.counter);
    });

})