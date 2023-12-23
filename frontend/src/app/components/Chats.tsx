import React from 'react'
import { useRecoilState } from 'recoil';
import { chatState } from '../atoms/chats';

interface Props {
    id: number;
    message: string;
    time: string;
    upvotes: number;
    downvotes: number;
}

const Chats = (props: Props) => {
    
    const [chatstate, setChatstate] = useRecoilState(chatState); 

    const upVote = () => {
        setChatstate((prev) => prev.map(chat => 
            chat.id === props.id ? { ...chat, upvotes: chat.upvotes + 1 } : chat
        ));
    }

    const downVote = () => {
        setChatstate((prev) => prev.map(chat => 
            chat.id === props.id ? { ...chat, downvotes: chat.downvotes + 1 } : chat
        ));
    }

    return (
        <main className='relative w-full p-3 flex justify-between items-center border-b border-gray-200 bg-transparent'>
            <div className='flex flex-col gap-3'>
                <h3 className='text-gray-500'>{"saad"}</h3>
                <h2 className='text-white text-[1.2rem]'>{props.message}</h2>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-gray-300'>{props.time}</h3>
                <div className="text-white flex items-center gap-2">
                    <button onClick={upVote}>
                        <span className='m-auto text-xl text-white'>⬆️</span>
                    </button>
                    {props.upvotes}
                    <button onClick={downVote}>
                        <span className='m-auto text-xl text-white'>⬇️</span>
                    </button>
                    {props.downvotes}
                </div>
            </div>
        </main>
    )
}

export default Chats