import React from 'react'

interface Props {
    title: string
}

const ChatNav = (props: Props) => {
    return (
        <main className='w-full p-2 text-gray-100 bg-chatPrimary'>
            <h1 className='text-center text-2xl font-semibold'>
                {props.title}
            </h1>
        </main>
    )
}

export default ChatNav