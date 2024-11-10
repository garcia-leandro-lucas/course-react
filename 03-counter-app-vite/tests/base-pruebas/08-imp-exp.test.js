import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un héroe por ID', () => { 

        const id = 3;
        const hero = getHeroeById(id);

       /*  console.log(hero); */

       expect(hero).toEqual({ id: 3, name: 'Superman', owner: 'DC' });

    })

    test('getHeroeById debe de retornar undefined si no existe el id', () => { 

        const id = 100;
        const hero = getHeroeById(id);

        /* console.log(hero); */

        // De esta manera evaluamos si un retorno es false, undefined falsy
        expect(hero).toBeFalsy();

    })

    // Tarea:
    // Debe de retornar un arregle con los héroes de DC
    // length === 3
    // toEqual all arreglo filtrado

    // debe de retornar un arreglo con los héroes de Marvel
    // length ===2

    test('getHeroesByOwner debe de retornar un arreglo dependiendo del owner pasado "DC"', () => { 

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        console.log(hero);

        expect(hero.length).toBe(3);
        expect(hero).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );

        expect(hero).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

    test('getHeroesByOwner debe de retornar un arreglo dependiendo del owner pasado "DC"', () => { 

        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        console.log(hero);

        expect(hero.length).toBe(2);
        expect(hero).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]
        );

        expect(hero).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

})