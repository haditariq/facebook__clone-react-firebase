import React from "react";
import "../assets/css/post.css";
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ profilePic, image, username, timestamp, message }) {
  console.log(profilePic, image, username, timestamp, message)
  return <div className={"post"}>
    <div className="post__top">
      <Avatar src={profilePic} className={"post__avatar"}/>
      <div className="post__topInfo">
        <h3>{username}</h3>
        {/*TODO: make the date work*/}
        {/*<p>{new Date(timestamp?.toDate().toUTCString())}</p>*/}
        {/*<p>{new Date()}</p>*/}
      </div>
    </div>
    <div className="post_bottom">
      <p>{message}</p>
    </div>

    <div className="post__image">
      <img src={image} alt=""/>
    </div>

    <div className="post__options">
      <div className="post__option">
        <ThumbUpIcon/>
        <p>Like</p>
      </div>
      <div className="post__option">
        <ChatBubbleOutlineIcon/>
        <p>Comment</p>
      </div>
      <div className="post__option">
        <NearMeIcon/>
        <p>Share</p>
      </div>
      <div className="post__option">
        <AccountCircleIcon/>
        <ExpandMoreIcon/>
      </div>
    </div>
  </div>;
}

export default Post;