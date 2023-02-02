const express = require("express");
const app = express();
const tasks = require("./routes/task.router");

app.use(express.json());
app.use("/api/v1/tasks", tasks);

module.exports = app;
