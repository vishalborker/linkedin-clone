import React from 'react';

import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';
import { IMAGES } from '../../../constants/images';

import './Profile.scss';


function ProfileInfo() {
  return (
    <aside className="profile-info-container">
      <div className='user-info'>
        <div className='bg-img'>
          <img src={IMAGES.PROFILE_BG_IMAGE} alt='profile background' />
        </div>
        <div className='profile-img'>
          <img src={IMAGES.USER_AVATAR} alt={'User Profile'} />
        </div>

        <div className='user-professional-info'>
          <h3 className='heading'><NavLink to={'/profile/vishal-borker'}>Vishal Borker</NavLink></h3>
          <div className='sub-heading'>
          Associate Engineer | Srijan Technologies | (JavaScript | ReactJS | NodeJS | Angular | MongoDB | System Design | Microservices | Cloud )
          </div>
        </div>
      </div>

      <div className='view-info'>
        <ul className='view-info-list'>
          <li>
            <NavLink to={'/view-details'} className='views'>
              <span>Who viewed your profile</span>
              <span>256</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={'/impressions'} className='impressions'>
              <span>Impressions on your posts</span>
              <span>466</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='reactivate-premium-container'>
        <div>
          <span>Access exclusive tools & insights</span>
          <NavLink to={'/premium'} className='reactivate-premium'>
            <img src={IMAGES.PREMIUM_IMG} alt='Buy Premium plan' />
            <span>Reactivate Premium</span>
          </NavLink>
        </div>
      </div>

      <div className='my-items'>
        <NavLink to={'/my-items'} className='my-items-a'>
          <FontAwesomeIcon icon={faBookmark} />
          <span>My Items</span>
        </NavLink>
      </div>
    </aside>
  )
}

export default ProfileInfo