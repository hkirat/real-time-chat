import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {
        username: "",
        userId: "",
        socketId: "",
        roomId: "",
        upVoted: 0,
    },
});
