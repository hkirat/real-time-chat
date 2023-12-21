import React from 'react'

interface Props {
    user: string;
    message: string;
    time: string;
}

const Chats = (props: Props) => {
  return (
      <main className='relative w-full p-3 flex justify-between items-center border-b border-gray-200 bg-transparent'>
          <div className='flex flex-col gap-3'>
              <h3 className='text-gray-500'>{props.user}</h3> 
              <h2 className='text-white text-[1.2rem]'>{props.message}</h2> 
          </div>
          <div className='absolute top-1 right-2'>
              <h3 className='text-gray-300'>{props.time}</h3>
          </div>
    </main>
  )
}

export default Chats