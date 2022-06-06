import React from 'react';
import PostFile from './PostFile';
import PostImage from './PostImage';
import PostVideo from './PostVideo';

function InteractiveContent( { image, video, file }) {
  return (
    <>
        {
            image ? <PostImage src={image} /> : null
        }

        {
            video ? <PostVideo src={video} /> : null
        }

        {
            file ? <PostFile src={file} /> : null
        }
    </>
  )
}

export default InteractiveContent;