import React from 'react';
import { NavLink } from 'react-router-dom';


import { NAVLINKS } from '../../constants/navLinks';

import Search from './Search';

import './Navbar.scss';
import NavigationLinks from './NavigationLinks';
import { IMAGES } from '../../constants/images';


function Navbar() {
  return (
    <nav className='navigation' role='navigation'>
        <div className='logo-search-container'>
          <NavLink to='/feed'><img src={IMAGES.LINKEDIN_MINI} alt='Mini LinkedIN logo'></img></NavLink>
          <Search />
        </div>
        <NavigationLinks links={NAVLINKS} />
    </nav>
  )
}

export default Navbar