const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://user:user@cluster0.ba0fe.mongodb.net/noteBook?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;