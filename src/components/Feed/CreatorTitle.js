import React from 'react'

function CreatorTitle({ author, following }) {
  return (
    <div className='creator-title'>
        <h5>{author}</h5>
        <span className='separator'>•</span>
        <span className='following'>{following ? 'Following' : '1st'}</span>
    </div>
  )
}

export default CreatorTitle