import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp.jsx', () => { 

    const title = "Hola, soy un title por fuera del test";
    const subTitle = "Hola, soy un Subtitle por fuera del test";

    test('Debe de hacer match con snapshot', () => { 


        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar el mensaje "Hola Soy Goku', () => { 

        render( <FirstApp title={ title } />);

        // Para negar el toBeTruthy() hacemos un .not
        /* expect( screen.getByText(title) ).not.toBeTruthy(); */

        expect( screen.getByText(title) ).toBeTruthy();

    })


    test('Debe de mostrar el titulo en un h1', () => { 

        render( <FirstApp title={ title } />);
        expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(title);

    });

    test('Debe de mostrar el subtitulo enviado por propds', () => { 

        render( 
        <FirstApp 
            title={ title } 
            subTitle={subTitle}
        />);

        expect( screen.getAllByText(subTitle).length ).toBe(2);

    })



 })