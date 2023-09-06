import React from 'react'
import "../Register/register.scss";
function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Miller Chat</span>
        <span className="title">Login</span>
        <form action="">
    
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
        <p>Don't you have an account? Register</p>
      </div>
    </div>
  );
}

export default Login
