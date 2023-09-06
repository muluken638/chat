import React from 'react'

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img src="../marti.jpg" alt='name' />
        <div className="userChatInfo">
          <span>Meseret tamru</span>
          <p>Hello Love</p>
        </div>
      </div>

      <div className="userChat">
        <img src="../marti.jpg" alt='name'/>
        <div className="userChatInfo">
          <span>Meseret tamru</span>
          <p>I love You</p>
        </div>
      </div>

      <div className="userChat">
        <img src="../marti.jpg" alt='name' />
        <div className="userChatInfo">
          <span>Meseret tamru</span>
          <p>One love is .</p>
        </div>
      </div>
    </div>
  );
}

export default Chats
