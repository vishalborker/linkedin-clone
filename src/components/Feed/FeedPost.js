import React from 'react';
import ActionButton from './ActionButton';
import AuthorProfile from './AuthorProfile';
import CommentShare from './CommentShare';
import CreatorTitle from './CreatorTitle';
import Engagements from './Engagements';

import './FeedPost.scss';
import FollowButton from './FollowButton';
import InteractiveContent from './Interactive/InteractiveContent';
import PostContent from './PostContent';
import Subtitle from './Subtitle';
import Timeline from './Timeline';

function FeedPost({ data }) {
  return (
    <div className='content-container'>
        <div className='creator'>
            <AuthorProfile profileImg={data.profileImg} />
            <div className='creator-details'>
                <CreatorTitle author={data.author} following={data.following} authorId={data.authorId} />
                <Subtitle subtitle={data.subtitle} />
                <Timeline postedAt={data.postedAt} />
            </div>
            { !data.following && <FollowButton /> }
        </div>
        <div className='post-content-container'>
            <PostContent contentText={data.contentText} />
            <InteractiveContent image={data.image} video={data.video} file={data.file} />
        </div>
        <div className='engagements-container'>
            <div className='engagements'>
                <Engagements data={data.interaction} />
                <CommentShare comments={data.comments} shares={data.shares} />
            </div>
            <ActionButton />
        </div>
    </div>
  )
}

export default FeedPost;