import React, { useEffect, useMemo, useState } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import './Feed.scss';
import FeedPost from './FeedPost';
import StartAPost from '../Main/Post/StartAPost';

function Feed() {
  useDocumentTitle('LinkedIn | Feed');
  const [data, setData] = useState([]);
  const memoizedArray = useMemo(() => {
    const arr = [];
    for(let i = 0; i< 50; i++)
      arr.push(i);
    return arr;
  }, []);

  useEffect(() => {
    setData(memoizedArray);
  }, [memoizedArray])

  return (
    <div>
      <StartAPost />

      <div className='main-feed'>
        {
          data.map(a => {
            return (
              <FeedPost data={a} key={a}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Feed