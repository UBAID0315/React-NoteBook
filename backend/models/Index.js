const mongoose = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type:  String,
        default : 'General'
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
  });


  modules.export = mongoose.model('user',UserSchema) //(model name, Schema)