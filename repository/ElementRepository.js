const MongoDb = require("../db/db");

class ElementRepository {
    constructor() {
        this.db = MongoDb.getInstance();
        this.elements = this.db.collection("elements");
    }

    async insert({ element }) {
        return await this.elements.insertOne(element);
    }

    async findByObjectId({ _id }) {
        const qeury = { _id };
        return await this.elements.findOne(qeury);
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
    
    async updatePosition({ sid, board_sid, position }) {
        const query = { sid,  board_sid };
        const element = await this.findById({ sid });
        const updatedElement = { ...element, position};
        const result = await this.elements.updateOne(query, updatedElement);
        return result;
    }
};

module.exports = ElementRepository;