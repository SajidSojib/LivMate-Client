import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/footer/Footer';
const MainLayout = () => {
    return (
      <div className="bg-theme text-primary">
        {/* bg-gradient-to-l from-[#090979] via-[#00D4FF] to-[#00D4FF] */}
        <div className="bg-neutral">
          <Navbar></Navbar>
        </div>
        <div className='min-h-[calc(100vh-463px)]'>
          <Outlet></Outlet>
        </div>
        <div className="bg-neutral">
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MainLayout;