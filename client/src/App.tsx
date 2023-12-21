import React from "react";
import Chat, { ChatBubble } from "./components/Chat";

const App = () => {
    return (
        <>
            <div className="rounded-none flex flex-row w-full h-screen gap-1 bg-black">
                <Chat />
                <div className="border border-blue-950 rounded-md h-full"></div>
                <div className="w-full h-full">
                    <ChatBubble />
                </div>
                <div className="border border-blue-950 rounded-md h-full"></div>
                <div className="w-full h-full">test</div>
            </div>
        </>
    );
};

export default App;
