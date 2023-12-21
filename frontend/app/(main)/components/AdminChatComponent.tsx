import React from "react";

const AdminChatComponent = () => {
    return (
        <div className="bg-[#e8f1fd] rounded p-2 ">
            <div className="flex items-center ">
                <p className="text-sm flex-1">
                    <span className="font-bold">UserName:</span> Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Autem magni ex
                    harum odio nostrum exercitationem commodi suscipit iste
                    accusamus maxime.
                </p>
                <div className="flex gap-3">
                    <button className="text-red-500 bg-white border border-red-500 rounded text-sm py-2 px-3 hover:bg-red-500 hover:text-white duration-300">
                        Dismiss
                    </button>
                </div>
            </div>

            <p className="text-xs text-slate-500  mt-2">3:00pm</p>
        </div>
    );
};

export default AdminChatComponent;
