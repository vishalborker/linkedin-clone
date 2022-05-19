import React from 'react'
import { useSelector } from 'react-redux';
import { IMAGES } from '../../../constants/images'

import './CreatePost.scss';

function CreatePost() {
  const user = useSelector(state => state.user.user);
  return (
    <div className='post-container'>
        <div className='create-container'>
            <img className='profile-img' src={user.profileImg} alt='User Profile' />
            <button className='create-button'>Start a post</button>
        </div>
        <div className='options-container'>
            <button className='item-container photo-container'>
                <img src={IMAGES.POST_PHOTO} alt='Create Post' className='photo-img'/>
                <span>Photo</span>
            </button>

            <button className='item-container video-container'>
                <img src={IMAGES.POST_VIDEO} alt='Create Video Post' className='video-img'/>
                <span>Video</span>
            </button>

            <button className='item-container event-container'>
                <img src={IMAGES.POST_EVENT} alt='Create Event Post' className='event-img'/>
                <span>Event</span>
            </button>

            <button className='item-container article-container'>
                <img src={IMAGES.POST_ARTICLE} alt='Create Article Post' className='article-img'/>
                <span>Write Article</span>
            </button>
        </div>
    </div>
  )
}

export default CreatePost;