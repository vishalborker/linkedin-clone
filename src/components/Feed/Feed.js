import React, { useEffect, useMemo, useState } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import './Feed.scss';
import CreatePost from '../Main/Post/CreatePost';
import Post from './Post';

function Feed() {
  useDocumentTitle('LinkedIn | Feed');
  // let arr = [1,2,3,4,5,6,7,8,9,10,11];
  const [data, setData] = useState([]);

  const memoizedArray = useMemo(() => {
    const arr = [];
    for(let i = 0; i< 2; i++)
      arr.push(i);
    return arr;
  }, []);

  useEffect(() => {
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