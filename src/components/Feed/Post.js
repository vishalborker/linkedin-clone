import React from 'react';
import { ENGAGEMENTS, IMAGES } from '../../constants/images';

import './Post.scss';

function Post({ data }) {
  return (
    <div className='content-container'>
        <div className='creator'>
            <div className='profile'>
                <img src='https://source.unsplash.com/random/300x300?profile' alt='Profile' />
            </div>
            <div className='creator-details'>
                <div className='creator-title'>
                    <h5>Tim Aussie</h5>
                    <span className='separator'>•</span>
                    <span className='following'>Following</span>
                </div>
                <div className='creator-subtitle'>
                    <span className='following'>Follow me for system design & book-writing tips | Author of System Design Interval how are you there</span>
                </div>
                <div className='timeline'>
                    <span className='time-posted'>3d</span>
                    <span className='separator'>•</span>
                    <span className='privacy'>
                        <img src={IMAGES.PRIVACY_PUBLIC} alt='Public privacy' />
                    </span>
                </div>
            </div>
        </div>
        <div className='post-content-container'>
            <p className='post-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        <div className='engagements-container'>
            <div className='engagements'>
                <div className='like-support-love'>
                    <span>
                        <img src={ENGAGEMENTS.Like} alt='Like' />
                        <img src={ENGAGEMENTS.Love} alt='Love' />
                        <img src={ENGAGEMENTS.Clap} alt='Clap' />
                    </span>
                    <span>Akshay Kumar and 1,013 others</span>
                </div>
                <div className='comment-share'>
                    <span className='comment'>309 comments</span>
                    <span className='separator'>•</span>
                    <span className='shares'>25 shares</span>
                </div>
            </div>

            <div className='button-container'>
                <button className='button-engagement'>
                    <img src={ENGAGEMENTS.MainLike} alt='Like the post' />
                    <span>Like</span>
                </button>
                <button className='button-engagement'>
                    <img src={ENGAGEMENTS.MainComment} alt='Comment on the post' />
                    <span>Comment</span>
                </button>
                <button className='button-engagement'>
                    <img src={ENGAGEMENTS.MainShare} alt='Share the post' />
                    <span>Share</span>
                </button>
                <button className='button-engagement'>
                    <img src={ENGAGEMENTS.MainSend} alt='Send the post' />
                    <span>Send</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Post;