// External Packages
import { createBrowserRouter } from "react-router-dom";

// Local Modules
import App from "../App";
import ErrorPage from "./Error-Page";
import Login from "../pages/Login";



// Create a browser router instance with the given routes
export const router = createBrowserRouter([
    {
        // Set the path to the root URL
        path: "/",
        // Use the App component as the root element of the router
        element: <App />,
        // Use the ErrorPage component to display any errors that occur
        errorElement: <ErrorPage />,
        // Define the child routes for the root URL
        children: [
            {
                path: "/login-user",
                element: <Login />,
            }
        ],
    },
]);

export default router;
