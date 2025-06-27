import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/footer/Footer';
import { Suspense } from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigation } from 'react-router';

const MainLayout = () => {
  const navi=useNavigation();
  const isLoading=navi.state==='loading';
  useEffect(() => {
    AOS.init({ duration: 1000, anchorPlacement: "top-center" });
  }, []);
    return (
      <div className="bg-theme poppins-regular text-primary">
        {/* bg-gradient-to-l from-[#090979] via-[#00D4FF] to-[#00D4FF] */}
        <div className="bg-neutral">
          <Navbar></Navbar>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="poppins-regular min-h-[calc(100vh-463px)]">
            <Outlet></Outlet>
          </div>
        )}

        <div className="poppins-regular bg-neutral">
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MainLayout;