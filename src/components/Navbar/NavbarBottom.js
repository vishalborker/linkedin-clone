import React from 'react';
import NavigationLinks from './NavigationLinks';
import { NAVLINKS } from '../../constants/navLinks';

import './NavbarBottom.scss';


function NavbarBottom() {
  return (
    <nav className='navigation-bottom' role='navigation'>
        <NavigationLinks links={NAVLINKS} desktop={false}/>
    </nav>
  )
}

export default NavbarBottom;