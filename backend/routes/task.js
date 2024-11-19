const express = require("express");
const router = express.Router();
const {
	getTask,
	getAllTask,
	addTask,
	updateTask,
	deleteTask,
} = require("../controllers/task");
const wrapAsync = require("../middlewares/wrapAsync");
const { authorization } = require("../middlewares/authorization");

router.get("/all", authorization, wrapAsync(getAllTask));
router.get("/:id", authorization, wrapAsync(getTask));
router.post("/add", authorization, wrapAsync(addTask));
router.put("/update", authorization, wrapAsync(updateTask));
router.delete("/delete", authorization, wrapAsync(deleteTask));

module.exports = router;
