const ElementService = require("./ElementService");

class BoardEvents {

    constructor() {
        this.elementService = new ElementService();
    }

    async joinBoard({ user_sid, board_sid, socket }) {
        socket.join(board_sid);
        console.log(`${user_sid} has been joined to board ${board_sid}`);
        socket.to(`${board_sid}`, `user joined : ${user_sid}`)
    } 

    async addElement({ user_sid, board_sid, position, socket }) {
        const element = await this.elementService.insert({
            board_sid,
            position
        });
        socket.to(`${board_sid}`).emit(`element_added`, { element });
    }
}

module.exports = BoardEvents;