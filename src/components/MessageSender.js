import React from "react";
import "../assets/css/messageSender.css";
import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function MessageSender(props) {

  const handleSubmit = e => {
    e.preventDefault();
    alert("click")
  };

  return (
    <div className={"messageSender"}>
      <div className="messageSender__top">
        <Avatar />
        <form action="">
          <input
            type="text"
            placeholder={"What's on your mind"}
            className={"messageSender__input"}
          />
          <input type="text" placeholder={"image URL (Optional)"} />
          <button onClick={handleSubmit} type={"submit"}>
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{color:"red"}}/>
          <h3>Live video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{color:"green"}}/>
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <EmojiEmotionsIcon style={{color:"orange"}}/>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
