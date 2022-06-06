import React from 'react'
import { IMAGES } from '../../constants/images';

import './Timeline.scss';

function Timeline({ postedAt }) {
  return (
    <div className='timeline'>
        <span className='time-posted'>{postedAt}</span>
        <span className='separator'>•</span>
        <span className='privacy'>
            <img src={IMAGES.PRIVACY_PUBLIC} alt='Public privacy' />
        </span>
    </div>
  )
}

export default Timeline