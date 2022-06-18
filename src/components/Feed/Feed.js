import React, { useCallback, useEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import FeedPost from './FeedPost';
import AdCampaign from '../Main/Ads/AdCampaign';
import StartAPost from '../Main/Post/StartAPost';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../redux/ducks/posts';

import './Feed.scss';

function Feed() {
  useDocumentTitle('LinkedIn | Feed');
  const dispatch = useDispatch();
  const getPostsCb = useCallback(() => dispatch(getPosts()), [dispatch]);
  const posts = useSelector(state => state.posts.posts);
  const user = useSelector(state => state.user.user);
  const MobileDevice = window.innerWidth <= 480;

  useEffect(() => {
    getPostsCb();
  }, [getPostsCb]);
  
  return (
    <>
      <StartAPost />
      <section className='main-feed'>
        {
          posts && posts.map(data => {
            return (
              <FeedPost data={data} key={data.id}/>
            )
          })
        }
      </section>
      { posts && MobileDevice && <AdCampaign user={user} /> }
    </>
  )
}

export default Feed