import React from 'react';
import "../Register/register.scss";
// import Avater from "..C:\Users\T\chatting\src\image\avater.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Miller Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="C:/Users/T/chatting/src/image/avater.png" alt="" />
            <span>Add Image </span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
}

export default Register
