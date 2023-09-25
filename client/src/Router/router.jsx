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
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login-user",
                element: <LoginUser />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
        ],
    },
]);

