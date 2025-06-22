import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../09-useContext/Navbar";
import { MainApp } from "../../09-useContext/MainApp";

describe('Debe de mostrar <NavBar />', () => {

    test('Debe de mostrar el Home Page', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        /* screen.debug(); */
        expect(screen.getByText('Home')).toBeTruthy();

    });

    test('Debe de mostrar el Login Page', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        /* screen.debug(); */
        expect(screen.getByText('Login')).toBeTruthy();

    });

    test('Debe de mostrar el About Page', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );

        /* screen.debug(); */
        expect(screen.getByText('About')).toBeTruthy();

    });

})