const mongoose = require("mongoose")
mongoURI = "mongodb://localhost:27017/test"

const ConnecttoMongo = ()=>{
    if(mongoose.connect(mongoURI)){
        console.log("Connected to Mongo_DB");
    }
}

module.exports = ConnecttoMongo;
