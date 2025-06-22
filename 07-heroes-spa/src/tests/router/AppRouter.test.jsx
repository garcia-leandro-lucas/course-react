import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../auth';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../router/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
    test('Debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false,  
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //screen.debug();

        expect(screen.getAllByText('Login').length).toBe(2);

    });

    test('Debe de mostrar el componente de Marvel si est autenticado', () => {

        const contextValue = {
            logged: true,  
            user:{
                id: 'ABC',
                name:'Leandro Garcia'
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //screen.debug();

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

    })
})