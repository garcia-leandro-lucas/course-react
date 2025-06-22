import { types } from "../../../auth/types/types"

describe('Pruebas de "Types.js"', () => { 

    test('Debe de regresar estos types', () => {

        console.log(types);

        expect(types).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout',
        });

    })

})