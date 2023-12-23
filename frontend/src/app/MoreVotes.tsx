"use client";

import React, { useState } from 'react'
import ChatNav from './components/ChatNav'
import Chats from './components/Chats'
import InputBox from './components/InputBox'
import Voting from './components/Voting'
import { useRecoilValue } from 'recoil';
import { chatState } from './atoms/chats';


const MoreVotes = () => {
    const chats = useRecoilValue(chatState);

    return (
        <main className='xl:w-[600px] lg:w-[500px] w-[90vw] rounded-lg 
         max-h-[83vh] h-[990px] relative border border-gray-700 bg-[#414040]'>
            <ChatNav title="Higher Priority Chats" />
            {
                <div className='max-h-[630px] bg-[#414040] overflow-y-scroll' style={{ overflowAnchor: 'none' }}>
                    {chats.map((chat) => {
                        if (chat.upvotes >= 5) {
                            return (
                                <Chats
                                    id={chat.id}
                                    message={chat.message}
                                    upvotes={chat.upvotes}
                                    downvotes={chat.downvotes}
                                    time={new Date().toLocaleTimeString()}
                                />
                            )
                        }
                    })}
                </div>
            }

        </main>
    )
}

export default MoreVotes