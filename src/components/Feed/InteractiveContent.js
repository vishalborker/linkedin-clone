import React from 'react';
import PostImage from './PostImage';
import PostVideo from './PostVideo';

function InteractiveContent( { image, video }) {
  return (
    <>
        {
            image ? <PostImage src={image} /> : null
        }

        {
            video ? <PostVideo src={video} /> : null
        }
    </>
  )
}

export default InteractiveContent;