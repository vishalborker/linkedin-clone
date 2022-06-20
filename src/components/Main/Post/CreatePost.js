import React, { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import { faCaretDown, 
    faClose, faCommentDots, faEarthAmerica
} from '@fortawesome/free-solid-svg-icons';

import './CreatePost.scss';
import { createPost } from '../../../redux/ducks/posts';
import { NEW_POST_FIELDS } from '../../../constants/newPostFields';
import UploadOptions from './UploadOptions';
import AddHashtag from './AddHashtag';

function CreatePost({ closeCreatePost }) {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const postTextRef = useRef();

  const [postText, setPostText] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const newPost = getRequestBody(postText);

    dispatch(createPost(newPost));

    setTimeout(() => {
        closeCreatePost();
    }, 1000);
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
                <AddHashtag />
                <div className='action-container'>
                    <UploadOptions />
                    <div className='main-actions'>
                        <div className='privacy-chosen'>
                            <span className='privacy-option'>
                                <FontAwesomeIcon icon={faCommentDots} />
                                <span>Anyone</span>
                            </span>
                            <button disabled={!postText || loading} className='post-button' onClick={(e) => create(e)}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CreatePost