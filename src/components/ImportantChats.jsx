import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";

export default function ImportantChats({ messages }) {
  const [importantMessages, setImportantMessages] = useState([]);

  useEffect(() => {
    const filteredMessages = messages.filter((message) => {
      return message.upvote >= 3 && message.upvote < 10;
    });
    setImportantMessages(filteredMessages);
  }, []);

  return (
    <div className="__all_chats w-1/4 border-r-2 h-screen relative bg-black">
      <div className=" h-[30px] font-bold bg-green-900 flex justify-center items-center">
        Important Chats (3 to 9 upvotes)
      </div>
      <div className="__messages flex flex-col gap-2 p-2 overflow-auto h-[calc(100dvh-40px)]">
        {importantMessages.map((messageItem) => {
          return (
            <MessageItem
            main={false}
              dismiss={false}
              upvotes={false}
              message={messageItem}
            />
          );
        })}
      </div>
    </div>
  );
}
