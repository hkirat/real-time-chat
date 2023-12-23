import { atom } from 'recoil';

interface ChatType {
    id: number;
    upvotes: number;
    downvotes: number;
    message: string;
};

export const chatState = atom({
    key: "chatState",
    default: [] as ChatType[],
})