import React, { useState } from "react";

// assets
import "../../assets/css/header.css";
import facebookIcon from "../../assets/icons/facebook.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontOutlined from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";

import { useStateValue } from "../../dataLayer/Provider";

function Header({ showSidebar }) {
  const [{ user }, dispatch] = useStateValue();
  const [showLargeSearchBar, setShowLargeSearchBar] = useState(false);
  const [sideBarShow, setSideBarShow] = useState(true);

  const onClickHamburg = () => {
    setSideBarShow(!sideBarShow);
    showSidebar(sideBarShow);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={facebookIcon} alt="" />
        <div className={"header__input"}>
          <SearchIcon />
          <input type="text" placeholder={"Search Facebook"} />
        </div>

        {!showLargeSearchBar ? (
          <>
            <IconButton
              className={"header__smallSearch"}
              onClick={() => setShowLargeSearchBar(!showLargeSearchBar)}
            >
              <SearchIcon />
            </IconButton>

            <IconButton onClick={onClickHamburg}>
              {sideBarShow ? (
                <MenuIcon className={"header__leftHamburg"} />
              ) : (
                <CloseIcon className={"header__leftHamburg"} />
              )}
            </IconButton>
          </>
        ) : (
          <div className={"header__inputMDContainer"}>
            <div className={"header__input header__inputMD"}>
              <input type="text" placeholder={"Search Facebook"} />
            </div>

            <div className={"header__smallArrowBack"}>
              <IconButton
                onClick={() => setShowLargeSearchBar(!showLargeSearchBar)}
              >
                <ArrowBackIcon />
              </IconButton>
            </div>
          </div>
        )}
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize={"large"} />
        </div>
        <div className="header__option">
          <FlagIcon fontSize={"large"} />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize={"large"} />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize={"large"} />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize={"large"} />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
