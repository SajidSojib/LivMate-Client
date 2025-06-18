import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/footer/Footer';
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;