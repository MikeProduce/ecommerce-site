import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Link to="/login-user">Login</Link>
      <Outlet />
    </>
  )
}
