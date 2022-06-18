import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import './NavigationLinks.scss';

function NavigationLinksBottom({ links }) {
  return (
    <div className='nav-links-login'>
        <ul>
        {
            links.map(navLink => {
                return (
                    <li key={navLink.key}>
                        <NavLink to={navLink.href} key={navLink.key}>
                            <FontAwesomeIcon icon={navLink.faIcon} />
                            <span className='link-name'>{navLink.key}</span>
                        </NavLink>
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default NavigationLinksBottom;