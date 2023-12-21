"use client";

import React, { useState } from 'react'
import ChatNav from './components/ChatNav'
import Chats from './components/Chats'
import InputBox from './components/InputBox'
import Voting from './components/Voting'

const SomeVotes = () => {

    const [votes, setVotes] = useState(3);

    const handleUpvote = () => {
        // do your thing
    }

    const handleDownvote = () => {
        // do your thing
    }

    return (
        <main className='xl:w-[600px] lg:w-[500px] w-[90vw] rounded-lg 
         max-h-[83vh] h-[990px] relative border border-gray-700 bg-[#414040]'>
            <ChatNav title={`${votes} votes + `} />
            {
                votes >= 3 && (
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
                )
            }

        </main>
    )
}

export default SomeVotes