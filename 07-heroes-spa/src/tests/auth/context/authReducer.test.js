import { authReducer, types } from '../../../auth';


describe('Pruebas en authReducer', () => {

    const initialState = {
        logged: false,
        user: 'Leandro'
    }

    const actionLogin = {
        type: types.login,
        payload: {
            name: 'Leandro',
            id: '123'
        }
    }

    const actionLogout = {
        type: types.logout,
        payload: {
            name: 'Leandro',
            id: '123'
        }
    }

    test('Debe de retornar el estado por defecto', () => {

        const newState = authReducer(initialState, {});
        //console.log(newState);
        expect(newState).toBe(initialState);

    });

    test('Debe de (login) llamar el login autenticar y establecer el user', () => {

        const newState = authReducer(initialState, types);
        expect(types.login).toBe('[Auth] Login');

        const action = {
            type: types.login,
            payload: {
                name: 'Leandro',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
        
    });

    test('Debe de (logout) borrar el name del usuario y logged en false', () => {

        const newState = authReducer(initialState, types);
        expect(types.logout).toBe('[Auth] Logout');

        const state = {
            logged: true,
            user: {
                name: 'Leandro',
                id: '123'
            }
        }

        const action = {
            type: types.logout
        }

        const newStateLogout = authReducer(state, action);

        expect(newStateLogout).toEqual({
            logged: false
        });

    })

})