import React, { useCallback, useEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import FeedPost from './FeedPost';
import StartAPost from '../Main/Post/StartAPost';
import { useDispatch, useSelector } from 'react-redux';

import { GET_POSTS } from '../../redux/ducks/posts';

import './Feed.scss';

function Feed() {
  useDocumentTitle('LinkedIn | Feed');
  const dispatch = useDispatch();

  // const [posts, setPosts] = useState([]);

  const getPosts = useCallback(() => dispatch({type: GET_POSTS}), [dispatch]);
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    getPosts();
  }, [getPosts])
  
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