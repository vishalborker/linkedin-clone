import React from 'react'
import { LANDING_NAVBAR_LINKS } from '../../constants/navLinks'
import LandingNavbar from './LandingNavbar';

import LandingWelcome from './LandingWelcome';
import FindTheJob from './FindTheJob';
import PostAJob from './PostAJob';

import './landing.scss';

function Landing() {
  return (
    <main className='landing'>
        <LandingNavbar links={LANDING_NAVBAR_LINKS}/>
        <LandingWelcome />
        <FindTheJob />
        <PostAJob />
    </main>
  )
}

export default Landing;