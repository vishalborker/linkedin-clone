import React from 'react';
import { NAVLINKS } from '../../constants/navLinks';

import './NavbarBottom.scss';
import NavigationLinksBottom from './NavigationLinksBottom';

// only shown on mobile device
function NavbarBottom() {
  return (
    <nav className='navigation-bottom' role='navigation'>
        <NavigationLinksBottom links={NAVLINKS} />
    </nav>
  )
}

export default NavbarBottom;