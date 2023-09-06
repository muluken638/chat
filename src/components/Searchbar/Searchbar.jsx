import React from 'react'

function Searchbar() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user...' />
      </div>
      <div className="userChat">
        <img src="../marti.jpg" />
        <div className="userChatInfo">
            <span>Meseret tamru</span>

        </div>
      </div>
    </div>
  );
}

export default Searchbar
