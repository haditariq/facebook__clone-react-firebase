import React from 'react';
import '../../assets/css/sidebar.css'
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {ExpandMoreOutlined} from '@material-ui/icons';

function Sidebar (props) {
  return (
    <div className={'sidebar'}>
      <SidebarRow src={"user.photoUrl"} title={"Hadi Tariq"}/>
      <SidebarRow Icon={LocalHospitalIcon} title={"COVID-19 Information Center"}/>
      <SidebarRow Icon={EmojiFlagsIcon} title={"Pages"}/>
      <SidebarRow Icon={PeopleIcon} title={"People"}/>
      <SidebarRow Icon={ChatIcon} title={"Friends"}/>
      <SidebarRow Icon={StorefrontIcon} title={"Messenger"}/>
      <SidebarRow Icon={VideoLibraryIcon} title={"Videos"}/>
      <SidebarRow Icon={ExpandMoreOutlined} title={"Marketplace"}/>
    </div>
  );
}

export default Sidebar;

