import React from "react";

const ChatComponent = () => {
    return (
        <div className="bg-[#e8f1fd] rounded p-2 flex items-center">
            <div className="">
                <p className="text-sm flex-1">
                    <span className="font-bold">UserName:</span> Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Autem magni ex
                    harum odio nostrum exercitationem commodi suscipit iste
                    accusamus maxime.
                </p>
                <p className="text-xs text-slate-500  mt-2">3:00pm</p>
            </div>
            <div className="flex gap-3">
                <button className="flex flex-col group  items-center ">
                    <i className="bx bxs-upvote group-hover:text-slate-700 duration-300 text-slate-500"></i>
                    <span className="text-[9px] text-green-800">3</span>
                </button>
                <button className="flex flex-col group items-center ">
                    <i className="bx bxs-downvote text-slate-500 duration-300 group-hover:text-slate-700"></i>
                    <span className="text-[9px] text-green-800">3</span>
                </button>
            </div>
        </div>
    );
};

export default ChatComponent;
