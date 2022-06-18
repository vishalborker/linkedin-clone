import React from 'react';

function LiveNotification({author, post}) {
  return (
    <div><b>{author}</b> was live {post}</div>
  )
}

export default LiveNotification;