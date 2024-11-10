import { usContext } from '../../src/base-pruebas/06-deses-obj';



describe('Pruebas en 06-deses-obj', () => { 

    test('usContext debe de retornar un objeto', () => { 

        const testUserContext = {
            clave: 'ABC123',
            edad: 35
        };


        const testusContext = {
            
            nombreClave: testUserContext.clave,
            anios: testUserContext.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        
        }

        const usContexts = usContext(testUserContext);

        expect(testusContext).toStrictEqual(usContexts);

    })

})