'use client'
import { useState } from 'react';
import {
  IconMessageCircle,
  IconThumbUp,
  IconThumbDown,
  IconMoon,
  IconSun,
} from '@tabler/icons-react';

interface Chat {
  message: string;
  votes: number;
}

export default function Home() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [newChat, setNewChat] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSendChat = () => {
    if (newChat.trim()) {
      setChats([{ message: newChat, votes: 0 }, ...chats]); // Prepend new chat
      setNewChat('');
    }
  };

  const updateVotes = (index: number, delta: number) => {
    const updatedChats = [...chats];
    updatedChats[index].votes += delta;
    setChats(updatedChats);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <main className="dark:bg-gray-800 dark:text-white flex min-h-screen flex-row items-start justify-between p-24 bg-gray-100">
        <button onClick={toggleDarkMode} className="absolute top-5 right-5 p-2">
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>

        <section className="w-1/3 p-4 overflow-auto">
          <h2 className="text-lg font-bold mb-4">All Chats</h2>
          {chats.map((chat, index) => (
            <div key={index} className="mb-2 flex items-center">
              <p className="flex-grow">{chat.message}</p>
              <button className="mr-2" onClick={() => updateVotes(index, 1)}>
                <IconThumbUp />
                <span className="ml-1">{chat.votes >= 0 ? chat.votes : 0}</span>
              </button>
              <button onClick={() => updateVotes(index, -1)}>
                <IconThumbDown />
                <span className="ml-1">{chat.votes < 0 ? chat.votes : 0}</span>
              </button>
            </div>
          ))}
        </section>

        <section className="w-1/3 p-4 overflow-auto">
          <h2 className="text-lg font-bold mb-4">
            Chats with more than 3 votes
          </h2>
          {chats
            .filter((chat) => chat.votes > 3)
            .map((chat, index) => (
              <p key={index} className="p-2">
                {chat.message} ({chat.votes} votes)
              </p>
            ))}
        </section>

        <section className="w-1/3 p-4 overflow-auto">
          <h2 className="text-lg font-bold mb-4">
            Chats with more than 10 votes
          </h2>
          {chats
            .filter((chat) => chat.votes > 10)
            .map((chat, index) => (
              <p key={index} className="p-2">
                {chat.message} ({chat.votes} votes)
              </p>
            ))}
        </section>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex">
          <input
            className="dark:bg-gray-700 dark:border-gray-600 mr-2 p-2 border-2 border-gray-300 flex-grow"
            type="text"
            value={newChat}
            onChange={(e) => setNewChat(e.target.value)}
            placeholder="Type your message here"
          />
          <button
            className="p-2 bg-gray-200 dark:bg-gray-600"
            onClick={handleSendChat}
          >
            <IconMessageCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
