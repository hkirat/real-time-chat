import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import MessageItem from "./MessageItem";

export default function AllChats({ messages }) {
  const [msgText, setMsgText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert(msgText);
      setMsgText("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="__all_chats w-1/2 border-r-2 h-screen relative bg-black">
      <div className=" h-[30px] font-bold bg-gray-800 flex justify-center items-center">
        Main Chat
      </div>
      <div className="__messages flex flex-col gap-2 p-2 overflow-auto h-[calc(100dvh-40px)] pb-[40px]">
        {messages.map((messageItem) => {
          return (
            <MessageItem
              main={true}
              dismiss={false}
              upvotes={true}
              message={messageItem}
            />
          );
        })}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full absolute bottom-0 shadow-lg"
      >
        <input
          className="w-[80%] h-[40px] px-2 outline-none bg-gray-700 text-white"
          type="text"
          placeholder="Type Message..."
          value={msgText}
          required
          onChange={(e) => setMsgText(e.target.value)}
        />
        <button className="w-[20%] h-[40px] bg-blue-600 flex justify-center items-center">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}
