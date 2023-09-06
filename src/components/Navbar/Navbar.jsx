import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Miller Chat</div>
      <div className="user">
        <img src="../marti.jpg" alt="name"  />
        <span>Marta Mulat</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar
