"use client";

import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";

const InputBox = () => {
    const [message, setMessage] = useState("hii !");

    const send = () => {
        // send logic
    }

  return (
      <main className='p-2 border-t border-gray-900 flex'>
          <input type='text' value={message} className='p-2 w-full flex-1 text-gray-800' />
          <button className='p-1' onClick={send} >
              <IoSend className='text-[2rem] text-primary' />
          </button>
    </main>
  )
}

export default InputBox