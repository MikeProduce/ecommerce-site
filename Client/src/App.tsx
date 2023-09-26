import { Outlet } from "react-router-dom";
import { Navbar } from "./navigation/Navbar";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  )
}
