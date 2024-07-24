const mongoose = require("mongoose")
mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.12"

const ConnecttoMongo = ()=>{
    if(mongoose.connect(mongoURI)){
        console.log("Connected to Mongo_DB");
    }
}

module.exports = ConnecttoMongo;
