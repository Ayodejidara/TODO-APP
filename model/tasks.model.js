const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Must enter a task"],
        maxlength: [20, "Task must not be more than 20 characters"],
    }, 
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task", TaskSchema)