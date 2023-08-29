// App.js
import React from 'react';
import BoughtItem from './components/BoughtItem';
import AppWrapper from './components/AppWrapper';
import { Outlet } from 'react-router-dom';
import { Footer } from "../src/components/Footer"
import { Navbar } from "../src/components/Navbar";


function App() {


  return (
    <AppWrapper>
      <BoughtItem />
      <Navbar />
      <Outlet />
      <Footer />
    </AppWrapper>
  );
}

export default App;

