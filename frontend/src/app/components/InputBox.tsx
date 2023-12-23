"use client";

import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { useRecoilState } from 'recoil';
import { chatState } from '../atoms/chats';

const InputBox = () => {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useRecoilState(chatState);
    

    const send = () => {
        setChats((prev: any) => [...prev, {
            id: prev?.length + 1,
            message: message,
            upvotes: 0,
            downvotes: 0
        }]);
        console.log("chat s; ", chats);
    }

    return (
        <main className='absolute bottom-1 w-full p-2 border-t border-gray-900 flex'>
            <input type='text' onChange={(e) => setMessage(e.target.value)} value={message} className='p-2 w-full flex-1 text-gray-800' />
            <button className='p-1' onClick={send} >
                <IoSend className='text-[2rem] text-primary' />
            </button>
        </main>
    )
}

export default InputBox