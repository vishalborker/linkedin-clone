import React, { useCallback, useEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import FeedPost from './FeedPost';
import StartAPost from '../Main/Post/StartAPost';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../redux/ducks/posts';

import './Feed.scss';

function Feed() {
  useDocumentTitle('LinkedIn | Feed');
  const dispatch = useDispatch();
  const getPostsCb = useCallback(() => dispatch(getPosts()), [dispatch]);
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    getPostsCb();
  }, [getPostsCb])
  
  return (
    <div>
      <StartAPost />

      <div className='main-feed'>
        {
          posts && posts.map(data => {
            return (
              <FeedPost data={data} key={data.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Feed