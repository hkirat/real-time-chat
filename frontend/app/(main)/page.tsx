import Image from "next/image";
import ChatComponent from "./components/ChatComponent";
import AdminChatComponent from "./components/AdminChatComponent";
export default function Home() {
    return (
        <section className="h-full grid grid-cols-3 gap-2 ">
            <div className="h-full border-r flex flex-col justify-between">
                <div className="flex flex-col justify-end h-full p-2 gap-2">
                    <ChatComponent />
                    <ChatComponent />
                    <ChatComponent />
                </div>
                <div className=" w-full p-2 flex gap-2 border-t">
                    <input
                        type="text"
                        className="bg-white  rounded border  py-2 text-sm w-full focus:outline-none px-2"
                    />
                    <button className="bg-blue-400 text-white font-bold px-2 rounded hover:bg-blue-600 duration-300">
                        Send{" "}
                    </button>
                </div>
            </div>
            <div className="h-full flex flex-col gap-2 py-2">
                <p className=" py-2 text-sm text-slate-500">
                    Upcoming Questions
                </p>
                <ChatComponent />
                <ChatComponent />
            </div>
            <div className="h-full flex flex-col gap-2 py-2 border-l p-2">
                <p className="py-2 text-sm text-slate-500">Admin Area</p>
                <AdminChatComponent />
                <AdminChatComponent />
                <AdminChatComponent />
            </div>
        </section>
    );
}
