import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";

export default function VeryImportantChats({ messages }) {
  const [veryImportantMessages, setVeryImportantMessages] = useState([]);

  useEffect(() => {
    const filteredMessages = messages.filter((message) => {
      return message.upvote >= 10;
    });
    setVeryImportantMessages(filteredMessages);
  }, []);

  return (
    <div className="__all_chats w-1/4 h-screen relative bg-black">
      <div className=" h-[30px] font-bold bg-red-900 flex justify-center items-center">
        Important Chats (10 or above upvotes)
      </div>
      <div className="__messages flex flex-col gap-2 p-2 overflow-auto h-[calc(100dvh-40px)]">
        {veryImportantMessages.map((messageItem) => {
          return (
            <MessageItem
              main={false}
              dismiss={true}
              upvotes={false}
              message={messageItem}
            />
          );
        })}
      </div>
    </div>
  );
}
