const MongoDb = require("../db/db");

class ElementRepository {
    constructor() {
        this.db = MongoDb.getInstance();
        this.elements = this.db.collection("elements");
    }

    async findById({ sid }) {
        const query = {  sid };
        const result = await this.elements.findOne({ sid });
        return result;
    }

    async findByBoardSid({ board_sid }) {
        const query = { board_sid };
        const result = await this.elements.find(query).toArray();
        return result;
    }
};

module.exports = ElementRepository;