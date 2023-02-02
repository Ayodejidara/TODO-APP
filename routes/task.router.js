const express = require("express");
const router = express.Router();
const {createTask,getAllTask,getTask,updateTask,deleteTask} = require("../controllers/task.controller");

router.route("/").post(createTask).get(getAllTask);
router.route("/:id").patch(updateTask).get(getTask).delete(deleteTask);

module.exports = router;