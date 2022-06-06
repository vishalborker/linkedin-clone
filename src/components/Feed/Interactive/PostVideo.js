import React from 'react';

function PostVideo({ src }) {
  return (
    <iframe width="100%" height="315" src={src} 
      title="LinkedIN video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    ></iframe>
  )
}

export default PostVideo;