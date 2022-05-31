import React from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMAGES } from '../../../constants/images';
import Loader from '../../helper/Loader';

import './AdCampaign.scss';

function AdCampaign({user}) {
  return (
    <aside className="ads">
      {
        !user ? <Loader /> : 
        <>
          <div className='add-header'>
            <span>Ad</span>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <div className='ad-content'>
            <div className='companies'>
              <img src={user.profileImg} alt='Profile' />
              <img src='https://source.unsplash.com/random/300x300?company-logo' alt='company' />
            </div>
            <div className='sub-title'>
              {user.username}, explore jobs at <em><b>Brand</b></em> that match your skills
            </div>
            <button className='see-jobs'>See jobs</button>
          </div>        
        </>
    }
    </aside>
  )
}

export default AdCampaign