import { Outlet } from "react-router-dom";
import { NavBar } from "./pages/navigation-bar/navBar";


function App() {


  return (
    <>
      <div className="dark:bg-gray-700 bg-gray-200">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;

