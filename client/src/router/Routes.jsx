// routes.js
import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Pages/home'
import Cart from '../Pages/cart/Cart';
import ClothingPage from '../Pages/Clothing';
import OtherPage from '../Pages/Other';
import Electronics from '../Pages/Electronics';
import Navbar from '../components/Navbar';
import Login from '../Pages/login/Login';
import SignUp from '../Pages/sign-up/SignUp';

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
