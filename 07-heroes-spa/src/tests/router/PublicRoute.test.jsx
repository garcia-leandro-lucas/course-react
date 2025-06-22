import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../router/PublicRoute';
import { AuthContext } from '../../auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => { 

    test('Debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Pública')).toBeTruthy();

    })

    test('Debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Strike',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Página Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Página Marvel')).toBeTruthy();

    })

})