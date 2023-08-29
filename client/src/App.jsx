// App.js
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Footer from './components/Footer';
import BoughtItem from './components/BoughtItem';
import Routes from "./router/Routes";
import AppWrapper from './components/AppWrapper';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(Routes));

  return (
    <AppWrapper>
      <BoughtItem />
      <RouterProvider router={router} />
      <Footer />
    </AppWrapper>
  );
}

export default App;

