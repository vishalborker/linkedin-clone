import React from 'react'

function CommentShare({ comments, shares }) {
  return (
    <div className='comment-share'>
        {
          comments.length ? 
            <>        
              <span className='comment'>{comments.length} comments</span>
              <span className='separator'>•</span>
            </>
          : null
        }
        { shares > 0 ? <span className='shares'>{shares} shares</span> : null}
    </div>
  )
}

export default CommentShare