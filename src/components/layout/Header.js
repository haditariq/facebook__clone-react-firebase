import React from 'react';
import { Button } from '@material-ui/core';

// assets
import "../../assets/css/header.css"
import facebookIcon from '../../assets/icons/facebook.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../../dataLayer/Provider';


function Header (props) {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src={facebookIcon} alt=""/>
        <div className={"header__input"}>
          <SearchIcon/>
          <input type="text" placeholder={"Search Facebook"}/>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize={"large"}/>
        </div>
        <div className="header__option">
          <FlagIcon fontSize={"large"}/>
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize={"large"}/>
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize={"large"}/>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize={"large"}/>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon/>
        </IconButton>

      </div>
    </div>
  );
}

export default Header;
