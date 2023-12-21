import React, { useEffect, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

type chatBubble = {
    user: string;
    message: string;
    timestamp: Date;
    upvotes: number;
};

const ChatBubble = () => {
    const { user, message, timestamp, upvotes } = {
        user: "Alice",
        message: "Hello, everyone!",
        timestamp: "06-11-2023",
        upvotes: 15,
    };
    return (
        <>
            <div className="w-full flex-[18]">
                <div className="rounded-md max-h-36 p-2 flex flex-col gap-2 bg-blue-950">
                    <p className="border-b-2">{user}</p>
                    <p className="overflow-hidden">{message}</p>
                    <div className="flex flex-row items-end">
                        <p className="text-blue-800">{timestamp}</p>
                        <div className="border rounded-md p-1 ml-auto flex flex-row items-center bg-blue-600 text-blue-300 hover:cursor-pointer">
                            <i>
                                <BiSolidUpvote />
                            </i>
                            <p>{upvotes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export { ChatBubble };

const MessageBox = () => {
    const [msg, setMsg] = useState("");
    useEffect(() => {
        console.log(msg);
    }, [msg]);
    return (
        <>
            <div className="w-full flex-1">
                <div className="rounded-md flex flex-row items-center gap-1 ">
                    <input
                        type="text"
                        name="input_message"
                        id="input_message"
                        placeholder="Type something..."
                        onChange={(e) => console.log(setMsg(e.target.value))}
                        className="rounded-md w-full h-10 px-2 bg-blue-300 text-black outline-none placeholder:text-gray-700"
                    />
                    <i className="rounded-md w-10 h-10 bg-blue-600 flex items-center justify-center text-white hover:cursor-pointer">
                        <IoIosSend size={28} />
                    </i>
                </div>
            </div>
        </>
    );
};
const Chat = () => {
    return (
        <>
            <div className="w-full h-full p-1 flex flex-col gap-1">
                <ChatBubble />
                <MessageBox />
            </div>
        </>
    );
};

export default Chat;
