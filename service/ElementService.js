const ElementRepository = require("../repository/ElementRepository");

class ElementService {

    constructor() {
        this.repo = new ElementRepository();
    }

    async insert({ board_sid, position}) {
        // TODO : incremental element sid to be added
        const element = {
            sid: "BE000002",
            board_sid,
            position
        };
        return await this.repo.insert({ element });
    }

    async findById({ sid }) {
        return await this.repo.findById({  sid });
    }

    async findByBoardSid({ board_sid }) {
        return await this.repo.findByBoardSid({ board_sid });
    }

    

};

module.exports = ElementService;