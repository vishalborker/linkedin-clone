import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { IMAGES } from '../../constants/images';
import { useSelector } from 'react-redux';
import ProfilePopUp from './ProfilePopUp';

import './NavigationLinks.scss';

function NavigationLinks({ links }) {
  const user = useSelector(state => state.user.user);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

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
            <li className='profile'>
                <div className='profile-option' onClick={() => setShowProfileDropdown(show => !show)}>
                    <img src={user.profileImg} alt="User Profile" className='profile-image' />
                    <span className='link-name'>
                        <span>Me</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                </div>

                {
                    !showProfileDropdown ? null : <ProfilePopUp visitedLink={() => setShowProfileDropdown(false)}/>
                } 
            </li>

            <li className='work'>
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