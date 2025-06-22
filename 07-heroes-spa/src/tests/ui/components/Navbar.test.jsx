
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../auth";
import { Navbar } from "../../../ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true,
        use: {
            name: 'Leandro García'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );


    test('Debe de mostrar el nombre del usuario', () => {
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getByText('Leandro García')).toBeTruthy();


    });

    test('Debe de llamar el logout y navigate cuando se hace click en el botón', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true});

    });

})