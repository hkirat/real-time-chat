import { useState } from "react";
import { userState } from "../state/atoms/userState";
import { useRecoilState } from "recoil";
import { v4 } from "uuid"

const Register = () => {
    const [user, setUser] = useRecoilState(userState);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input != "") {
            setUser({ ...user, username: input, userId: v4() });
        } else {
            console.log("Username cannot be blank!");
        }
    };

    return (
        <form
            className="bg-orange-100 flex flex-col items-center gap-8 pt-8 pb-32"
            onSubmit={handleSubmit}
        >
            <div className="text-4xl">Chat Upvote App</div>
            <div className="text-xl">
                Please enter your username and join chat.
            </div>
            <input
                className="text-xl w-[350px] shadow-md rounded-md p-1"
                type="text"
                placeholder="Enter your awesome username"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="bg-orange-600 hover:bg-orange-500 text-white text-2xl py-2 px-4 rounded-md shadow-md"
                type="submit"
            >
                Join
            </button>
        </form>
    );
};

export default Register;
