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

    async addElement({ user_sid, board_sid, position, socket }, callback) {
        const element = await this.elementService.insert({
            board_sid,
            position
        });

        const { insertedId:_id } = element;
        const element_from_db = await this.elementService.findByObjectId({ _id });
        socket.to(`${board_sid}`).emit(`element_added`, { element_from_db });
        console.log(`user added a element ${JSON.stringify(element_from_db)}`)
        callback(element_from_db);
    }
}

module.exports = BoardEvents;