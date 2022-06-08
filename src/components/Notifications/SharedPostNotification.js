import React from 'react';

import './SharedPostNotification.scss';

function SharedPostNotification({ author }) {
  return (
    <div><b>{author}</b> shared a post</div>
  )
}

export default SharedPostNotification;