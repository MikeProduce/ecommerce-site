import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import ErrorPage from "./error-page";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import LoginUser from "../pages/login/loginPage";
import SignUp from "../pages/sign-up/SignUp";

// Define your routes and their associated components
export const router = createBrowserRouter([
    {
        // Set the path to the root URL
        path: "/",
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
                path: "/Login",
                element: <LoginUser />,
            },
            {
                path: "/Cart",
                element: <Cart />,
            },
            {
                path: "/SignUp",
                element: <SignUp />,
            },
        ],
    },
]);



export default router;
