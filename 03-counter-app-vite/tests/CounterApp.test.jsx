// Tarea
// Prueba en el <CounterApp />

// test: debe de hacer match con el snapshot
// test: debe de mostrar el valor inicial de 100 <CounterApp value={100}></CounterApp>

import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp.jsx', () => { 

    const valueNumber = 100;

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render( <CounterApp value={valueNumber} /> );
        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar el valor inicial de 100', () => { 

        render( <CounterApp value={ valueNumber } /> );
        expect( screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
        /* console.log(typeof screen.getByRole('heading', {level: 2}).innerHTML);
        expect(parseInt()).toContainEqual(valueNumber); */
        /* expect( screen.getBy ) */
        /* let valueh2 = screen.getByRole('heading', { level: 2 }).innerHTML; */
        /* console.log(typeof valueh2);
        console.log(valueNumber); */
       /*  expect( valueNumber.toString() ).toBe(valueh2); */
        

    })

    test('Debe de incrementar con el boton +1', () => { 

        render( <CounterApp value={ valueNumber } /> );
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('101')).toBeTruthy();

    })

    test('Debe de incrementar con el boton -1', () => { 

        render( <CounterApp value={ valueNumber } /> );
        fireEvent.click( screen.getByText('-1') );
       /*  screen.debug() */
        expect(screen.getByText('99')).toBeTruthy();

    })

    test('Debe de incrementar con el boton reset', () => { 

        render( <CounterApp value={ valueNumber } /> );
        /* fireEvent.click( screen.getByText('Reset') ); */
       /*  screen.debug() */
        /* expect(screen.getByText('10')).toBeTruthy(); */

        /* screen.getByRole('button', {name: 'btn-reset'}); */
        
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) );
        expect(screen.getByText('100')).toBeTruthy();

    })

})