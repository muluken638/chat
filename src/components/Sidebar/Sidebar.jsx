import React from 'react'
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'
import Chats from '../Chats/Chats'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Searchbar/>
      <Chats/>
    </div>
  )
}

export default Sidebar
