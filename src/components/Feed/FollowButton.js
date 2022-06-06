import React from 'react';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FollowButton.scss';

function FollowButton() {
  return (
    <button className='follow-button'>
        <FontAwesomeIcon icon={faPlus} />
        <span>Follow</span>
    </button>
  )
}

export default FollowButton