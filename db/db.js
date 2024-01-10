const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =  "mongodb+srv://santhosh:Good12345@board-elements-cluster.q8fmovh.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

class MongoDb {
    constructor() {
        this.db = null;
    }

    static getInstance() {
        if (!this.db) {
            this.db = dbInit();
        }
        return this.db;
    }

    disconnect() {
        client.close();
    }
}

function dbInit() {
    client.connect();
    return client.db("board-elements");
}

module.exports = MongoDb;