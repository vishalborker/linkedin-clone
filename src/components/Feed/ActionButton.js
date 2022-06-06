import React from 'react';
import { ENGAGEMENTS } from '../../constants/images';

import './ActionButton.scss';

function ActionButton() {
  return (
    <div className='button-container'>
        <button className='button-engagement'>
            <img src={ENGAGEMENTS.MainLike} alt='Like the post' />
            <span>Like</span>
        </button>
        <button className='button-engagement'>
            <img src={ENGAGEMENTS.MainComment} alt='Comment on the post' />
            <span>Comment</span>
        </button>
        <button className='button-engagement'>
            <img src={ENGAGEMENTS.MainShare} alt='Share the post' />
            <span>Share</span>
        </button>
        <button className='button-engagement'>
            <img src={ENGAGEMENTS.MainSend} alt='Send the post' />
            <span>Send</span>
        </button>
    </div>
  )
}

export default ActionButton