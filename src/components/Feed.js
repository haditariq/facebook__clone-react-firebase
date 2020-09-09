import React from 'react';
import '../assets/css/feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

function Feed (props) {
  return (
    <div className={"feed"}>
      <StoryReel/>
      <MessageSender/>
    </div>
  );
}

export default Feed;
