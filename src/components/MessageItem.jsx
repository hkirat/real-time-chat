import React from "react";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";

export default function MessageItem({ message, upvotes, dismiss, main }) {
  return (
    <div
      className={`__message_item ${
        main ? "bg-blue-500" : "bg-gray-700"
      } p-2 gap-2 rounded flex justify-between`}
    >
      <div className="__left flex gap-1">
        <img
          className=" w-6 h-6 rounded-full"
          src={message?.userAvatar}
          alt=""
        />
        <p className=" break-words break-all">{message?.text}</p>
      </div>
      <div className="__right flex items-start flex-nowrap gap-1 flex-col">
        {upvotes && (
          <>
            <div className="flex">
              <button className="__upvote text-lg">
                <BiSolidUpvote />
              </button>
              <button className="__downvote text-lg">
                <BiSolidDownvote />
              </button>
            </div>
          </>
        )}
        {dismiss && (
          <>
            <button className="bg-red-700 rounded p-3 py-1">Dismiss</button>
          </>
        )}

        <div className="__upvote_count flex justify-center items-center w-full">
          <p
            className={`text-center ${
              main ? "bg-blue-700" : "bg-gray-900"
            } p-2 font-bold py-1 rounded`}
          >
            {message.upvote}
          </p>
        </div>
      </div>
    </div>
  );
}
