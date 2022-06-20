import React from 'react';
import { IMAGES } from '../../constants/images';

import './Loader.scss';

function Loader({ simple, center = false }) {
  if (simple) {
    return <div className={ `loader ${center ? 'center' : ''}` }></div>;
  }

  return (
    <div className='loader-container'>
      <img src={IMAGES.LINKEDIN_MAIN} alt='linkedin-main-logo' />
      <div className='loader'></div>
    </div>
  )
}

export default Loader