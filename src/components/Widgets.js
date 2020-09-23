import React from "react";
import "../assets/css/widget.css";
import SidebarRow from './layout/SidebarRow';

function Widgets(props) {
  return (
    <div className="widgets">
        <div className="widgets__title">
          <h4>Sponsored</h4>
        </div>

      <div className="widgets__title">
        <h4>Your pages</h4>
        <SidebarRow src={"user.photoUrl"} title={"Apple"}/>
        <div className="widgets__pageRow">

        </div>
      </div>
    </div>
  );
}

export default Widgets;
