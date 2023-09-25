
import { Link } from "react-router-dom"




export const LoginLink = () => (
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account? <Link to="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
    </p>
)
