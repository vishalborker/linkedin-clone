import React, { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import { faBriefcase, faCaretDown, faCertificate, faChartSimple, 
    faClose, faCommentDots, faEarthAmerica, faEllipsis, 
    faFileLines, faImage, faVideo 
} from '@fortawesome/free-solid-svg-icons';

import './CreatePost.scss';
import { createPost } from '../../../redux/ducks/posts';
import { NEW_POST_FIELDS } from '../../../constants/newPostFields';

function CreatePost({ closeCreatePost }) {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const postTextRef = useRef();

  const [postText, setPostText] = useState('');

  const getRequestBody = (post) => {
    const newPost = {
        ...NEW_POST_FIELDS,
        id: v4(),
        postedAt: '1m',
        contentText: post,
        video: null,
    };
    return newPost;
  }

  const create = (e) => {
    const newPost = getRequestBody(postText);
    dispatch(createPost(newPost));
    closeCreatePost();
  }

  useEffect(() => {
    postTextRef.current.focus();
  })

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
                       ref={postTextRef}
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
                        <button className='action-button image' data-tooltip='Add a photo'>
                            <FontAwesomeIcon icon={faImage} />
                        </button>

                        <button className='video action-button' data-tooltip='Add a video'>
                            <FontAwesomeIcon icon={faVideo} />
                        </button>

                        <button className='document action-button' data-tooltip='Add a document'>
                            <FontAwesomeIcon icon={faFileLines} />
                        </button>

                        <button className='hiring action-button' data-tooltip={`Share that you're hiring`}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </button>

                        <button className='celebrate action-button' data-tooltip='Celebrate a occassion'>
                            <FontAwesomeIcon icon={faCertificate} />
                        </button>

                        <button className='create-poll action-button' data-tooltip='Create a poll'>
                            <FontAwesomeIcon icon={faChartSimple} />
                        </button>

                        <button className='add-this action-button' data-tooltip='Add to your post'>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                    </div>
                    <div className='main-actions'>
                        <div className='privacy-chosen'>
                            <span className='privacy-option'>
                                <FontAwesomeIcon icon={faCommentDots} />
                                <span>Anyone</span>
                            </span>
                            <button disabled={!postText} className='post-button' onClick={(e) => create(e)}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CreatePost