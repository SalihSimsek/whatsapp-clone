import React from "react";
import "./Sidebar.css";
import SidebarChat from '../SidebarChat/SidebarChat'

//Icons
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar className="avatar" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon className="icon" />
          </IconButton>
          <IconButton>
            <ChatIcon className="icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon" />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
