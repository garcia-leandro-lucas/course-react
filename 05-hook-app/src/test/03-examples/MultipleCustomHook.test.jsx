import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHook } from '../../03-examples/MultipleCustomHook'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en MultipleCustomHook', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    } );

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHook />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de Pokemon'));

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        const prevButton = screen.getByRole('button', {name: 'Anterior'});
        console.log(nextButton.disabled);
        
        expect(nextButton.disabled).toBeFalsy();
        expect(prevButton.disabled).toBeFalsy();

        screen.debug();

    });

    test('Debe de mostrar el componente un pokemon', () => {

        useFetch.mockReturnValue({
            data: {
              name: "Charmander",
              id: 2,
              sprites: {
                back_default: "back_default",
                back_shiny: "back_shiny",
                front_default: "front_default",
                front_shiny: "front_shiny",
              },
            },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHook />);
        expect(screen.getByText(`#2 - Charmander`)).toBeTruthy();
        screen.debug();
    });

    test('Debe de llamar a la función de increment', () => {

        useFetch.mockReturnValue({
            data: {
              name: "Charmander",
              id: 2,
              sprites: {
                back_default: "back_default",
                back_shiny: "back_shiny",
                front_default: "front_default",
                front_shiny: "front_shiny",
              },
            },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHook />);

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();


    })

})