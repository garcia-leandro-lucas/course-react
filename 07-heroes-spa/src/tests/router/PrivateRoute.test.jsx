import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../auth';
import { PrivateRoute } from '../../router/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en el <PrivateRoute />', () => {

    test('Debe de mostrar el children si esta autenticado', () => {
    
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Leandro'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    
    })

})