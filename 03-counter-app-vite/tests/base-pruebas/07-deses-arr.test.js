import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'

describe('Pruebas en 07-deses-arr', () => { 
    test('Debe de retornar un string y un número', () => { 

        const [letter, numbers] = retornaArreglo();
       /*  console.log(retorno); */

        expect(letter).toBe('ABC');
        expect(numbers).toBe(123);

        console.log(typeof letter);
        console.log(typeof numbers);

        expect(typeof letter).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letter).toEqual( expect.any(String) );

    })
 })