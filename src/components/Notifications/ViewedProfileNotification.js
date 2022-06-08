import React from 'react';

import './ViewedProfileNotification.scss';

function ViewedProfileNotification({ author }) {
  return (
    <div><b>{author}</b> has viewed your profile</div>
  )
}

export default ViewedProfileNotification