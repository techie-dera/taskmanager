const Task = require("../models/task");

const getTask = async (req, res) => {
	const { id } = req.params;
	let task = await Task.findById(id);
	res.status(200).send({ message: "success", data: task });
};
const getAllTask = async (req, res) => {
	let backlog = await Task.find({ category: "backlog" });
	let todo = await Task.find({ category: "to-do" });
	let inProgress = await Task.find({ category: "in-progress" });
	let done = await Task.find({ category: "done" });
	res.status(200).send({
		message: "success",
		data: { backlog, todo, inProgress, done },
	});
};
const addTask = async (req, res) => {
	console.log(req.body);
	let { title, priority, checklist, dueDate } = req.body;
	let newTask = new Task({ title, priority, checklist, dueDate });
	let task = await newTask.save();
	res.status(200).send({ message: "success", data: task });
};
const updateTask = async (req, res) => {
	console.log(req.body);
	res.status(200).send({ message: "success", data: "data" });
};
const deleteTask = async (req, res) => {
	console.log(req.body);
	res.status(200).send({ message: "success", data: "data" });
};

module.exports = { getTask, getAllTask, addTask, updateTask, deleteTask };
