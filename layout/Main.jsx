import React from 'react';
import Navbar from '../src/Pages/Shared/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../src/Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <>
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Footer></Footer>
            </>
        </div>
    );
};

export default Main;