import React from 'react';

function PostFile({ src }) {
  return (
    <iframe width="100%" height="315" src={src} 
      title="LinkedIN file reader" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    ></iframe>
  )
}

export default PostFile;