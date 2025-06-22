import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from '../../09-useContext/LoginPage';
import { UserContext } from "../../09-useContext/context/UserContext";

describe('Pruebas en <LoginPage />', () => {

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        //console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toBe('null');

        

    });

    test('Debe de llamar el setUser cuando se hace click en el botón', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonEstablecerUser = screen.getByLabelText('button-establecer-usuario');
        fireEvent.click(buttonEstablecerUser);

        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith({"email": "leandro@gmail.com", "id": 123, "name": "Leandro"});

    })

})