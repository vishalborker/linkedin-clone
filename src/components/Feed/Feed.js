import React, { useEffect, useMemo, useRef, useState } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import './Feed.scss';
import CreatePost from '../Main/Post/CreatePost';
import Post from './Post';

function Feed() {
  useDocumentTitle('LinkedIn | Feed');
  const [data, setData] = useState([]);
  const ref = useRef(0);


  console.log('Feed Component loaded!!!!', ref.current)

  const memoizedArray = useMemo(() => {
    const arr = [];
    for(let i = 0; i< 50; i++)
      arr.push(i);
    return arr;
  }, []);

  useEffect(() => {
    ref.current++;

    setData(memoizedArray);
  }, [memoizedArray])

  return (
    <div>
      <CreatePost />

      <div className='main-feed'>
        {
          data.map(a => {
            return (
              <Post data={a} key={a}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Feed