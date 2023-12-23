"use client";

import React from 'react'
import ChatNav from './components/ChatNav'
import Chats from './components/Chats'
import InputBox from './components/InputBox'
import Voting from './components/Voting'
import { useRecoilState } from 'recoil';
import { chatState } from './atoms/chats';
import { randomUUID } from 'crypto';

const Main = () => {

    const [chats, setChats] = useRecoilState(chatState);

    console.log("chats : ", chats);

    const handleUpvote = () => {
        // do your thing
    }

    const handleDownvote = () => {
        // do your thing
    }

    return (
        <main className='xl:w-[600px] lg:w-[500px] md:w-[220px] w-[90vw] rounded-lg 
         max-h-[83vh] h-[990px] relative border border-gray-700 bg-[#414040]'>
            <ChatNav title='Chat' />
            <Voting
                id={1}
                content={"is this good ? "}
                upvotes={10}
                downvotes={1}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
            />
            <div className='max-h-[630px] bg-[#414040] overflow-y-scroll' style={{ overflowAnchor: 'none' }}>
                {chats.map((chat) => (
                    <Chats
                        key={Math.random()}
                        id={chat.id}
                        message={chat.message}
                        time={new Date().toLocaleTimeString()}
                        upvotes={chat.upvotes}
                        downvotes={chat.downvotes}
                    />
                ))}
            </div>
            <InputBox />
        </main>
    )
}

export default Main