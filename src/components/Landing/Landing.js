import React from 'react'
import { LANDING_NAVBAR_LINKS } from '../../constants/navLinks'
import LandingNavbar from './LandingNavbar';

import './landing.scss';
// import LandingLogin from './LandingLogin';
// import { LANDING_PAGE_IMAGES } from '../../constants/images';
import LandingWelcome from './LandingWelcome';
import FindTheJob from './FindTheJob';

function Landing() {
  return (
    <main className='landing'>
        <LandingNavbar links={LANDING_NAVBAR_LINKS}/>
        <LandingWelcome />
        <FindTheJob />
    </main>
  )
}

export default Landing