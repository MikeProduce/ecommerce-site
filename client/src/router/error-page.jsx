import { useRouteError, Link } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-center mb-8">
                We're sorry, but the page you are looking for does not exist. Let's go
                back to the homepage.
            </p>
            <Link
                className="inline-block bg-blue-500 text-white rounded-lg py-3 px-6 text-lg font-semibold shadow hover:shadow-md transition duration-300 ease-in-out"
                to={"/"}
            >
                Go to Homepage
            </Link>
        </div>
    );
}

export default ErrorPage;
