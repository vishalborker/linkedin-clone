import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

function NavigationLinks({ links }) {
  return (
    <div className='nav-links'>
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

            <li>
                <NavLink to={'/profile'} key='Me'>
                <img src={IMAGES.USER_AVATAR} alt="User Profile" className='profile-image' />
                <span className='link-name'>
                    <span>Me</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
                </NavLink>
            </li>

            <li>
                <NavLink to={'/work'} key={'Work'}>
                <img src={IMAGES.WORK_IMAGE} alt="Work" className='work-image'/>
                <span className='link-name'>
                    <span>Work</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
                </NavLink>
            </li>
    
        </ul>
    </div>
  )
}

export default NavigationLinks