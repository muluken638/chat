import React from 'react'
import { FiMenu,FiUserPlus,FiVideo } from "react-icons/fi";
import Message from '../Message/Message';
import Messages from '../Messages/Messages';
import Input from '../Input/Input'
const Chat=() =>{
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Miller Lema</span>
        <div className="chatIcon">
          <FiVideo className="icon" />
          <FiUserPlus className="icon" />
          <FiMenu className="icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat
