// routes.js
import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../src/Pages/home'
import Cart from '../src/Pages/cart/Cart';
import ClothingPage from '../src/Pages/Clothing';
import OtherPage from '../src/Pages/Other';
import Electronics from '../src/Pages/Electronics';
import Navbar from '../src/components/Navbar';
import Login from '../src/Pages/login/Login';
import SignUp from '../src/Pages/sign-up/SignUp';

export const Routes = (
    <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Clothing" element={<ClothingPage />} />
        <Route path="/Other" element={<OtherPage />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
    </Route>
);

export default Routes;
