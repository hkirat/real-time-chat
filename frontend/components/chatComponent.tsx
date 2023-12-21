interface ChatComponentProps {
  chatContent: string;
  upvoteCount?: number;
  downvoteCount?: number;
}

export const ChatComponent = ({
  chatContent,
  upvoteCount = 0,
  downvoteCount = 0,
}: ChatComponentProps) => {
  return (
    <>
      <div className='text-[#28A0F1] border-[0.125em] border-[#28A0F1] border-solid rounded-lg p-4 m-4'>
        {chatContent}
      </div>
      <div className='w-full bg-transparent flex justify-end'>
        <button className='m-1 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              className='text-white m-2 p-2'
            />
          </svg>
          <h4>{upvoteCount}</h4>
        </button>
        <button className='m-1 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              className='text-white'
            />
          </svg>
          <h4>{downvoteCount}</h4>
        </button>
      </div>
    </>
  );
};
