import React from 'react'
import { useSelector } from 'react-redux';

function CreatorTitle({ author, following, authorId }) {
  const user = useSelector(state => state.user.user);
  return (
    <div className='creator-title'>
        <h5>{author}</h5>
        {
          user.id === authorId ? null :
          <>
            <span className='separator'>•</span>
            <span className='following'>{following ? 'Following' : '1st'}</span>
          </>
        }
    </div>
  )
}

export default CreatorTitle