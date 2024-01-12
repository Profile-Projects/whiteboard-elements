
class BoardEvents {

    constructor() {
    }

    async joinBoard({ user_sid, board_sid, socket }) {
        socket.join(board_sid);
        console.log(`${user_sid} has been joined to board ${board_sid}`);
    } 
}