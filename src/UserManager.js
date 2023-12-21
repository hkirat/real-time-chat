"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
class UserManager {
    constructor() {
        this.rooms = new Map();
    }
    addUser(name, userId, roomId, socket) {
        var _a;
        if (!this.rooms.get(roomId)) {
            this.rooms.set(roomId, {
                users: []
            });
        }
        (_a = this.rooms.get(roomId)) === null || _a === void 0 ? void 0 : _a.users.push({
            id: userId,
            name,
            conn: socket
        });
    }
    removeUser(roomId, userId) {
        var _a;
        const users = (_a = this.rooms.get(roomId)) === null || _a === void 0 ? void 0 : _a.users;
        if (users) {
            users.filter(({ id }) => id !== userId);
        }
    }
    getUser(roomId, userId) {
        var _a;
        const user = (_a = this.rooms.get(roomId)) === null || _a === void 0 ? void 0 : _a.users.find((({ id }) => id === userId));
        return user !== null && user !== void 0 ? user : null;
    }
    broadcast(roomId, userId, message) {
        const user = this.getUser(roomId, userId);
        if (!user) {
            console.error("User not found");
            return;
        }
        const room = this.rooms.get(roomId);
        if (!room) {
            console.error("Rom rom not found");
            return;
        }
        room.users.forEach(({ conn }) => {
            conn.sendUTF(JSON.stringify(message));
        });
    }
}
exports.UserManager = UserManager;
