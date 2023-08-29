import { Link } from "react-router-dom"


export const SignUpLink = () => (
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{' '}
        <Link
            to="/SignUp"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
            Sign up
        </Link>
    </p>
)
