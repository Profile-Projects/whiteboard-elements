const ElementRepository = require("../repository/ElementRepository");

class ElementService {

    constructor() {
        this.repo = new ElementRepository();
    }

    async findById({ sid }) {
        return await this.repo.findById({  sid });
    }

    async findByBoardSid({ board_sid }) {
        return await this.repo.findByBoardSid({ board_sid });
    }

    

};

module.exports = ElementService;