import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CreatePost from './CreatePost';

import PostOptions from './PostOptions';

import './StartAPost.scss';

function StartAPost() {
  
  const user = useSelector(state => state.user.user);
  const [showStartShow, setShowStartShow ] = useState(false);

  const startPost = () => {
    setShowStartShow(true);
  }

  const stopPost = () => {
    setShowStartShow(false);
  }

  return (
    <>    
        <div className='post-container'>
            <div className='create-container'>
                <img className='profile-img' src={user.profileImg} alt='User Profile' />
                <button className='create-button' onClick={ () => startPost() }>Start a post</button>
            </div>
            <PostOptions />
        </div>
        {
            showStartShow ? <CreatePost closeCreatePost={() => stopPost()}/> : null
        }
    </>
  )
}

export default StartAPost;