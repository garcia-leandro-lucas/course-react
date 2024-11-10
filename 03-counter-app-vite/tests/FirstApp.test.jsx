import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp.jsx', () => { 

    /* test('Debe de hacer match con el snapshot', () => { 

        const title = "Hola soy Leandro"
        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot();

    }); */

    test('Debe de mostrar el titulo en un h1', () => { 

        const title = "Hola soy Leandro"
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> );

        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector( 'h1' );
        console.log(h1.innerHTML);

        // En este  caso el .toBe puede tirar un error si en el elemento hay un espacio que afecta el diseño en el string.
       /*  expect(h1.innerHTML).toBe(title); */

       // Con la siguiente linea evitamos este conflicto de error por espacios ajustados.
        /* expect(h1.innerHTML).toContain(title); */


        expect( getByTestId('test-title').innerHTML ).toContain(title);

    })

    test('Debe de mostrar el subtitulo enviado por props', () => { 

        const title = "Hola soy Leandro"
        const subTitle = "Soy un subtitulo"
        const { getByText, getAllByText } = render( 
            <FirstApp 
                title={title}
                subTitle={subTitle} 
            /> 
        );

        /* expect( getByText(subTitle) ).toBeTruthy(); */
        expect( getAllByText(subTitle).length ).toBe(2);


    })

 })