// routes.js
import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../src/Pages/home'
import Payment from '../src/Pages/Pay';
import ClothingPage from '../src/Pages/Clothing';
import OtherPage from '../src/Pages/Other';
import Electronics from '../src/Pages/Electronics';
import Navbar from '../src/components/Navbar';
import Login from '../src/Pages/Login/Login';
import SignUp from '../src/Pages/SignUp/SignUp';

export const Routes = (
    <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/Pay" element={<Payment />} />
        <Route path="/Clothing" element={<ClothingPage />} />
        <Route path="/Other" element={<OtherPage />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
    </Route>
);

export default Routes;
