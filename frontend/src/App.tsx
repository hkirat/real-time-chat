import { useState, useEffect } from "react";
import io from "socket.io-client";
import Register from "./components/Register";
import { userState } from "./state/atoms/userState";
import { useRecoilState } from "recoil";
import { v4 } from "uuid"

const ENDPOINT = "http://localhost:3000";
let socket;

function App() {
  const [user, setUser] = useRecoilState(userState);
  const [input, setInput] = useState({
    message: "",
    upvote: 0
  });
  const [chat, setChat] = useState([]);
  const [filteredChat, setFilteredChat] = useState([]);
  const [topChat, setTopChat] = useState([])

  function filterMessages() {
    const filteredMessages = chat.filter((message) => message.upvote >= 3);
    setFilteredChat(filteredMessages);
  };

  function sortMessagesByUpvotes() {
    const sortedMessages = [...chat].sort((a, b) => b.upvote - a.upvote);
    setTopChat(sortedMessages);
  };

  async function upvote(data, s) {
    if (user.upVoted < 10) {

      const updatedChat = chat.map((message) => {
        if (message.messageId === data.messageId) {
          return { ...message, upvote: message.upvote + 1 };
        }
        return message;
      });

      setChat(updatedChat);
      setUser((prevUser) => ({ ...prevUser, upVoted: user.upVoted + 1 }));

      filterMessages()
      sortMessagesByUpvotes()

      await s.emit("send-upvote", chat);
    }
  }

  async function sendMessage(s) {
    const data = { sender: user.username, messageId: v4(), message: input.message, upvote: input.upvote };
    console.log(data);
    setChat((prevChat) => [...prevChat, { ...data, dir: " ml-auto" }]);
    await s.emit("send-chat-message", data);
  }

  useEffect(() => {
    if (user.username != "") {
      socket = io(ENDPOINT, {
        query: { ...user },
      });

      socket.on("chat-message", (data) => {
        console.log(data);
        setChat((prevChat) => [...prevChat, { ...data, dir: " mr-auto" }]);
      });


    }
  }, [user]);


  if (!user.username) {
    return <Register />;
  } else {
    return (
      <div className="bg-orange-100 flex flex-col items-center gap-4 pt-8 pb-32">
        <div className="text-2xl">Welcome to the chat, {user.username}</div>
        <div className="flex gap-2">
          <div className="bg-gray-100 flex flex-col gap-2 border-2 border-black rounded-lg shadow-md h-[350px] w-[350px] overflow-y-auto">
            {chat &&
              chat.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "bg-orange-700 text-white rounded-md w-2/3 mx-2 p-2 flex items-center justify-between" +
                      data.dir
                    }
                  >
                    <div className="text-lg w-3/4">{data.sender}: {data.message}</div>
                    <div className="flex gap-2 w-1/4">
                      <div className="cursor-pointer" onClick={() => upvote(data, socket)}>Up</div>
                      <div className="">{data.upvote}</div>
                    </div>
                  </div>

                );
              })}
          </div>
          <div className="bg-gray-100 flex flex-col gap-2 border-2 border-black rounded-lg shadow-md h-[350px] w-[350px] overflow-y-auto">
            {filteredChat &&
              filteredChat.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "bg-orange-700 text-white p-2 rounded-md w-2/3 mx-2" +
                      data.dir
                    }
                  >
                    <div className="text-lg w-3/4">{data.sender}: {data.message}</div>
                    <div className="flex gap-2 w-1/4">
                      <div className="cursor-pointer" onClick={() => upvote(data, socket)}>Up</div>
                      <div className="">{data.upvote}</div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="bg-gray-100 flex flex-col gap-2 border-2 border-black rounded-lg shadow-md h-[350px] w-[350px] overflow-y-auto">
            {topChat &&
              topChat.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "bg-orange-700 text-white p-2 rounded-md w-2/3 mx-2" +
                      data.dir
                    }
                  >
                    <div className="text-lg w-3/4">{data.sender}: {data.message}</div>
                    <div className="flex gap-2 w-1/4">
                      <div className="cursor-pointer" onClick={() => upvote(data, socket)}>Up</div>
                      <div className="">{data.upvote}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-[400px] flex gap-2">
          <textarea
            placeholder="You're chatting with a stranger. Say Hi!"
            className="w-full rounded-lg p-1 text-lg shadow-md"
            value={input.message}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
          />
          <button
            onClick={() => sendMessage(socket)}
            className="bg-orange-600 hover:bg-orange-500 text-white text-xl px-2 my-4 rounded-md shadow-lg"
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default App;
