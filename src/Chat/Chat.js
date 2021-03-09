import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
const Chat = () => {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    console.log('sended')
  }

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined className="icon" />
          </IconButton>
          <IconButton>
            <AttachFile className="icon" />
          </IconButton>
          <IconButton>
            <MoreVert className="icon" />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Salih</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_receiver">
          <span className="chat_name">Salih</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon className="icon"/>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic className="icon" />
      </div>
    </div>
  );
};

export default Chat;
