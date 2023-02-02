const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = (DB) =>{
    return mongoose.connect(DB);
};

module.exports = connectDB;