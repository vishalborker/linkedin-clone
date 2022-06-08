import React from 'react';

import './ViewedProfileNotification.scss';

function ViewedProfileNotification({ author }) {
  return (
    <div className='viewed-notification'>
      <div><b>{author}</b> has viewed your profile</div>
      <button className='see-all-views'>See All Views</button>
    </div>
  )
}

export default ViewedProfileNotification