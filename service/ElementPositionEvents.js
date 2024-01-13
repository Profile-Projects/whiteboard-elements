const ElementService = require("./ElementService");


class ElementPositionEvents {

    constructor( ) {
        this.elementService = new ElementService();
    }

    async updatePosition(params, callback, socket) {
        const { element_sid, board_sid, position } = params;
        const element = await this.elementService.updatePosition({
            sid, 
            board_sid,
            position
        });
        return element;
    }

    



};

module.exports = ElementPositionEvents;