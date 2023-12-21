"use client";

import React from 'react'
import ChatNav from './components/ChatNav'
import Chats from './components/Chats'
import InputBox from './components/InputBox'
import Voting from './components/Voting'

const Main = () => {

    const handleUpvote = () => {
        // do your thing
    }

    const handleDownvote = () => {
        // do your thing
    }

    return (
        <main className='xl:w-[600px] lg:w-[500px] w-[90vw] rounded-lg 
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
                <Chats
                    message='hiii'
                    user='saad'
                    time='9:56'
                />
                <Chats
                    message='hiii'
                    user='saad'
                    time='9:56'
                />
                <Chats
                    message='hiii'
                    user='saad'
                    time='9:56'
                />
                <Chats
                    message='hiii'
                    user='saad'
                    time='9:56'
                />
                <Chats
                    message='hiii'
                    user='saad'
                    time='9:56'
                />
                <Chats
                    message='hiii'
                    user='saad'
                    time='9:56'
                />
                <Chats
                    message='hiii'
                    user='saad'
                    time='9:56'
                />
                <Chats
                    message='hiii'
                    user='saad'
                    time='9:56'
                />
            </div>
            <InputBox />
        </main>
    )
}

export default Main