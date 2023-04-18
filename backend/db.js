const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Ranjan:inotebook@inotebookdb.rnihd.mongodb.net/test"
// const mongoURI = "mongodb+srv://Ranjan:inotebook@inotebookdb.rnihd.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;