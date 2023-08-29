import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../Pages/home';
import { Cart } from '../Pages/cart/Cart';
import { Clothing } from '../Pages/Clothing';
import { Other } from '../Pages/Other';
import { Electronics } from '../Pages/Electronics';
import { Login } from '../Pages/login/Login';
import { SignUp } from '../Pages/sign-up/SignUp';
import App from '../App';

// Define your routes and their associated components
export const router = createBrowserRouter([
    {
        // Set the path to the root URL
        path: '/',
        // Use the App component as the root element of the router
        element: <App />,
        // Define the child routes for the root URL
        children: [
            {
                index: true,
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
                path: '/Login',
                element: <Login />,
            },
            {
                path: '/SignUp',
                element: <SignUp />,
            },
        ],
    },
]);

// Create a browser router instance with the given routes


export default router;
