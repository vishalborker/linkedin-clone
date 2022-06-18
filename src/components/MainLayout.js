import React from 'react';
import Navbar from './Navbar/Navbar';
import NavbarBottom from './Navbar/NavbarBottom';

function MainLayout({ children }) {
  const MobileDevice = window.innerWidth <= 480;
  return (
    <>
        <Navbar />
        { children }
        { MobileDevice && <NavbarBottom /> }
    </>
  )
}

export default MainLayout;