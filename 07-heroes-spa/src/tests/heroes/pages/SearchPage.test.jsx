import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../heroes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrarse correctamente con valores por defectos', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        //screen.debug();
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrarse Batman y el input con el valor del QueryString', () => {

        const { container } = render(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');
        
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const alertDanger = screen.getByLabelText('alert-danger');
        expect( alertDanger.style.display ).toBe('none');
        //console.log(alertDanger.style._values);
        
        screen.debug()

    });

    test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {

        render(
            <MemoryRouter initialEntries={ ['/search?q=batman123'] }>
                <SearchPage />
            </MemoryRouter>
        );

        //screen.debug();

        const alertDanger = screen.getByLabelText('alert-danger');
        expect( alertDanger.style.display ).toBe('');

    });

    test('Debe de llamar el navigate en la pantalla nueva /search?q=batman123', () => {

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue } } );

        const form = screen.getByRole( 'form' );
        fireEvent.submit(form);

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${superman}`);

    });

})