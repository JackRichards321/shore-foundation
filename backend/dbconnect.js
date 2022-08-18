const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path')


const connectionStr = "mongodb+srv://theshore:theshore@cluster0.3tltpwk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let dbConnection;

module.exports = {
    //try to connect to the db
    connectToServer: function(callback) {
        client.connect(function(err, db) {
            //if db connection is bad
            if(err || !db) {
                return callback(err);
            }

            //connect to OUR db
            dbConnection = db.db("TheShoreFoundation");
            console.log("successfully connected qB)");
            return callback();
        })
    },
    getDb: () => dbConnection,
}
