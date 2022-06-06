import React from 'react';

function AuthorProfile({ profileImg }) {
  return (
    <div className='profile'>
        <img src={profileImg} alt='Profile' />
    </div>
  )
}

export default AuthorProfile;