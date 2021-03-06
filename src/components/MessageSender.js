import React, { useState } from "react";
import "../assets/css/messageSender.css";
import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useStateValue } from "../dataLayer/Provider";
import db from "../config/firebase";
import firebase from "firebase";

function MessageSender(props) {
  const [input, setInput] = useState("");
  const [imageUrl, setImageURl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = async e => {
    e.preventDefault();
    let addPost = db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl
    });

    console.log(addPost)
    setImageURl("");
    setInput("");
  };

  return (
    <div className={"messageSender"}>
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form action="">
          <input
            value={input}
            type="text"
            placeholder={`What's on your mind, ${user.displayName}?`}
            className={"messageSender__input"}
            onChange={e => setInput(e.target.value)}
          />
          <input
            value={imageUrl}
            type="text"
            placeholder={"image URL (Optional)"}
            onChange={e => setImageURl(e.target.value)}
          />
          <button onClick={handleSubmit} type={"submit"}>
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <EmojiEmotionsIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
