import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError() as Error & { statusText?: string };

    // Check if error is an instance of Error
    if (error instanceof Error) {
        console.error(error);

        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        );
    }

    // Handle the case when error is not an instance of Error
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}
