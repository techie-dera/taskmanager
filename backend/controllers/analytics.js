const Task = require("../models/task");

const getAnalytics = async (req, res) => {
	let backlog = await Task.find({ category: "backlog" }).countDocuments();
	let todo = await Task.find({ category: "to-do" }).countDocuments();
	let inProgress = await Task.find({
		category: "in-progress",
	}).countDocuments();
	let done = await Task.find({ category: "done" }).countDocuments();
	let high = await Task.find({ priority: "High Priority" }).countDocuments();
	let moderate = await Task.find({
		priority: "Moderate Priority",
	}).countDocuments();
	let low = await Task.find({
		priority: "Low Priority",
	}).countDocuments();
	let dueDate = await Task.find({
		dueDate: { $ne: "" },
	}).countDocuments();
	res.status(200).send({
		message: "success",
		data: { backlog, todo, inProgress, done, high, moderate, low, dueDate },
	});
};

module.exports = { getAnalytics };
