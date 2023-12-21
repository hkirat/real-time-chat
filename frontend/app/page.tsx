import { ChatComponent } from '@/components/chatComponent';
import { SendButton } from '@/components/sendButton';

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col bg-slate-800 sm:min-w-full'>
      <div className='flex flex-grow bg-slate-900'>
        <div className='m-1 flex w-[50%] flex-col rounded-sm bg-slate-800'>
          <div className='rounded-[0.25rem_0.25rem_0_0] bg-slate-300 bg-opacity-20 p-2 text-white text-xl'>
            Chat
          </div>
          <div className='flex flex-col justify-end h-full'>
            <ChatComponent
              chatContent='this is the chat form one sender'
              upvoteCount={10}
              downvoteCount={10}
            />
            <ChatComponent
              chatContent='this is the chat from another sender'
              upvoteCount={10}
              downvoteCount={10}
            />
            <div className='w-full flex'>
              <textarea
                name='codearea'
                placeholder='Type here'
                className='border-box border-solid-white bg-slate-900 grow p-2 text-white placeholder:opacity-50 m-2 rounded-lg'
              ></textarea>
              <SendButton />
            </div>
          </div>
        </div>

        <div className='m-1 flex w-[50%] flex-col justify-normal rounded-sm'>
          <div className='rounded-[0.25rem_0.25rem_0_0] bg-slate-300 bg-opacity-20 p-2 text-white'>
            Popular Chats
          </div>

          <div className='flex flex-col justify-end h-full'>
            <ChatComponent
              chatContent='this is the chat form one sender'
              upvoteCount={10}
              downvoteCount={10}
            />
            <ChatComponent
              chatContent='this is the chat from another sender'
              upvoteCount={10}
              downvoteCount={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
