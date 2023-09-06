import React from 'react'
// import Login from '../Login/Login'
import "../Home/home.scss"
import Sidebar from '../../components/Sidebar/Sidebar';
import Chat from "../../components/Chat/Chat";


function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
