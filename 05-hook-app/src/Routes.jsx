import { createBrowserRouter, Navigate } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, MainApp, ErrorPage } from "./09-useContext/index";

export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        /* errorElement: <ErrorPage />, */
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "404",
                element: <ErrorPage />,
            },
            {
                path: "*",
                element: <Navigate to="404"/>
            }
        ]
    }
]);