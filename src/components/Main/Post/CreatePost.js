import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import { faBriefcase, faCaretDown, faCertificate, faChartSimple, 
    faClose, faCommentDots, faEarthAmerica, faEllipsis, 
    faFileLines, faImage, faVideo 
} from '@fortawesome/free-solid-svg-icons';

import './CreatePost.scss';

function CreatePost({ closeCreatePost }) {
  const user = useSelector(state => state.user.user);

  const [postText, setPostText] = useState('');

  return (
    <>
        <div className='overlay' onClick={() => closeCreatePost()}></div>    
        <section className='create-post'>
            <div className='header'>
                <h1>Create a post</h1>
                <span className='close-icon' onClick={() => closeCreatePost()}><FontAwesomeIcon icon={faClose} /></span>
            </div>
            <div className='content'>
                <div className='profile'>
                    <img src={user.profileImg} alt='Profile' />
                    <div className='info'>
                        <h6>{user.username}</h6>
                        <div className='post-privacy'>
                            <FontAwesomeIcon icon={faEarthAmerica} />
                            <span>Anyone</span>
                            <FontAwesomeIcon icon={faCaretDown} />

                        </div>
                    </div>
                </div>

                <div className='edit-area'>
                    <textarea placeholder='What do want to talk about?'
                       className='post-text' value={postText}
                       onChange={(e) => setPostText(e.target.value)}
                    >

                    </textarea>
                </div>

                <div className='add-hashtag-container'>
                    <button className='hashtag'>Add hashtag</button>
                </div>
                <div className='action-container'>
                    <div className='upload-actions'>
                        <button className='image' data-tooltip='Add a photo'>
                            <FontAwesomeIcon icon={faImage} />
                        </button>

                        <button className='video' data-tooltip='Add a video'>
                            <FontAwesomeIcon icon={faVideo} />
                        </button>

                        <button className='document' data-tooltip='Add a document'>
                            <FontAwesomeIcon icon={faFileLines} />
                        </button>

                        <button className='hiring' data-tooltip={`Share that you're hiring`}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </button>

                        <button className='celebrate' data-tooltip='Celebrate a occassion'>
                            <FontAwesomeIcon icon={faCertificate} />
                        </button>

                        <button className='create-poll' data-tooltip='Create a poll'>
                            <FontAwesomeIcon icon={faChartSimple} />
                        </button>

                        <button className='add-this' data-tooltip='Add to your post'>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                    </div>
                    <div className='main-actions'>
                        <div className='privacy-chosen'>
                            <span className='privacy-option'>
                                <FontAwesomeIcon icon={faCommentDots} />
                                <span>Anyone</span>
                            </span>
                            <button disabled={!postText} className='post-button'>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CreatePost