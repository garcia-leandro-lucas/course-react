import { getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => { 

    test('should getUser debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);

        /* expect(testUser).toEqual(user); */
        expect(testUser).toStrictEqual(user);

    })

    test('getUsuarioActivo debe de retornar un objeto', () => { 

        const name = 'Lucas';

        const testgetUsuarioActivo = {
            uid: 'ABC567',
            username: name
        }

        const usuario = getUsuarioActivo(name);
        console.log(usuario);

        expect(testgetUsuarioActivo).toStrictEqual(usuario);

    })

})