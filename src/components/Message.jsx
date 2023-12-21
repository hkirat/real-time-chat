// src/components/Message.js
import React, { useContext } from "react";
// import { ChatContext } from '../context/ChatContext';

const Message = ({ message }) => {
  // const { upvoteMessage } = useContext(ChatContext);

  const handleUpvote = () => {
    // upvoteMessage(message.id);
  };

  return (
    <div className="border rounded p-4 m-4">
      <p className="text-gray-800">{message?.content}</p>
      <button
        onClick={handleUpvote}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 focus:outline-none hover:bg-blue-600"
      >
        Upvote
      </button>
      <span className="ml-2">{message?.upvotes} Upvotes</span>
    </div>
  );
};

export default Message;
