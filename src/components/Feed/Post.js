import React from 'react';
import { ENGAGEMENTS } from '../../constants/images';

import './Post.scss';

function Post({ data}) {
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
                    <span className='following'>Aussie</span>
                </div>
                <div className='timeline'>
                    <span className='time-posted'>3d</span>
                    <span className='seperator'>.</span>
                    <span className='privacy'>Public</span>
                </div>
            </div>
        </div>
        <div className='post-content-container'>
            <p className='post-content' style={{'whiteSpace': 'pre-wrap'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                \n It has survived not only five centuries, 
                \n but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        <div className='engagements-container'>
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
                <span className='seperator'>.</span>
                <span className='shares'>25 shares</span>
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