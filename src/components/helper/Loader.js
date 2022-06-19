import React from 'react';
import { IMAGES } from '../../constants/images';

import './Loader.scss';

function Loader({ simple }) {
  if (simple) {
    return <div className='loader'></div>;
  }

  return (
    <div className='loader-container'>
      <img src={IMAGES.LINKEDIN_MAIN} alt='linkedin-main-logo' />
      <div className='loader2'></div>
    </div>
  )
}

export default Loader