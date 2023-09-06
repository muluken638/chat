import React from 'react'
import {  FiImage, FiPaperclip } from "react-icons/fi";

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something here ...' />
      <div className="send">
        <FiPaperclip className='imge'/>
     
        <input type="file" style={{display:'none'}} id='file' />
        <label htmlFor='file'>
          <FiImage className='imge'/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
