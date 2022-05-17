import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IMAGES } from '../../../constants/images';

import './AdCampaign.scss';

function AdCampaign() {
  return (
    <aside className="ads">
      <div className='add-header'>
        <span>Ad</span>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div className='ad-content'>
        <div className='companies'>
          <img src={IMAGES.USER_AVATAR} alt='' />
          <img src={IMAGES.GOOGLE} alt='' />
        </div>
        <div className='sub-title'>
          Vishal, explore jobs at <em><b>Google</b></em> that match your skills
        </div>
        <button className='see-jobs'>See jobs</button>
      </div>
    </aside>
  )
}

export default AdCampaign