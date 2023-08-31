import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home/Home';
import Cart from '../pages/cart/Cart';
import Clothing from '../pages/Clothing';
import Other from '../pages/Other';
import Electronics from '../pages/Electronics';
import LoginUser from "../login/LoginRoute";
import SignUp from '../pages/sign-up/SignUp';
import App from '../App';
import ErrorPage from './error-page';

// Define your routes and their associated components
export const router = createBrowserRouter([
    {
        // Set the path to the root URL
        path: '/',
        // Use the App component as the root element of the router
        element: <App />,

        errorElement: <ErrorPage />,
        // Define the child routes for the root URL
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/Cart',
                element: <Cart />,
            },
            {
                path: '/Clothing',
                element: <Clothing />,
            },
            {
                path: '/Other',
                element: <Other />,
            },
            {
                path: '/Electronics',
                element: <Electronics />,
            },
            {
                path: '/SignUp',
                element: <SignUp />,
            },
            {
                path: '/Login',
                element: <LoginUser />,
            },
        ],
    },
]);



export default router;
