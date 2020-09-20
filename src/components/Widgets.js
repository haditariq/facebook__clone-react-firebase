import React from "react";
import "../assets/css/widget.css";

function Widgets(props) {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLogicFab-105051560838745%2F&tabs=timeline&width=340&height=1500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=289293738967003"
        width="340"
        height="100%"
        style={{border:"none",overflow:"hidden"}}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;