// App.js
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Footer from './components/Footer';
import BoughtItem from './components/BoughtItem';
import Routes from '../router/Routes';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(Routes));

  return (
    <div className="w-screen bg-gray-900 w-full overflow-x-hidden">
      <BoughtItem />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

