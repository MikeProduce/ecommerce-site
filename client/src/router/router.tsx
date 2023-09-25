import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from "./error-page.tsx"
import Login from "../pages/login/loginPage.tsx"
import App from '../App.tsx';
import { ChatPage } from '../pages/chat-page/chat-page.tsx';
import { HeroPage } from '../pages/home/hero-page.tsx';
import { SignUp } from '../pages/sign-up/SignUp.tsx';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HeroPage />,
            },
            {
                path: "/login-user",
                element: <Login />,
            },
            {
                path: "/chat",
                element: <ChatPage />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
        ],
    }]);