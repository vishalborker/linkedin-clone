import React from 'react';

import './ViewedProfileNotification.scss';

function ViewedProfileNotification({ author }) {
  return (
    <div>{author} has viewed your profile</div>
  )
}

export default ViewedProfileNotification