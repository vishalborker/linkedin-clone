import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { IMAGES } from '../../constants/images';

import '../Navbar/Navbar.scss';

function LandingNavbar({ links }) {
  return (
    <nav className='navigation landing' role='navigation'>
      <div className='logo-search-container'>
        <NavLink to='/'><img src={IMAGES.LINKEDIN_MAIN} alt='Main LinkedIN logo'></img></NavLink>
      </div>
      <div className='nav-links'>
        <ul>
          {
            links.map(navLink => {
                return (
                    <li key={navLink.key}>
                        <NavLink to={navLink.href} key={navLink.key}>
                            <FontAwesomeIcon icon={navLink.icon} />
                            <span className='link-name'>{navLink.key}</span>
                        </NavLink>
                    </li>
                )
            })
          }

          <li className='join-now'>
            <NavLink to={'/signup'} key={'Join Now'}>
              <span className='link-name'>
                  <span>Join Now</span>
              </span>
            </NavLink>
          </li>

          <li className='sign-in'>
            <NavLink to={'/login'} key={'Sign in'}>
              <span className='link-name'>
                  <span>Sign in</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default LandingNavbar