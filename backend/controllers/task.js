const Task = require("../models/task");

const getTask = async (req, res) => {
	const { id } = req.params;
	let task = await Task.findById(id);
	res.status(200).send({ message: "success", data: task });
};

const getAllTask = async (req, res) => {
	let backlog = await Task.find({
		$or: [
			{ $and: [{ userName: req.user._id }, { category: "backlog" }] },
			{ $and: [{ assign: req.user.email }, { category: "backlog" }] },
		],
	}).populate({
		path: "userName",
		select: "name",
	});
	let todo = await Task.find({
		$or: [
			{ $and: [{ userName: req.user._id }, { category: "to-do" }] },
			{ $and: [{ assign: req.user.email }, { category: "to-do" }] },
		],
	}).populate({
		path: "userName",
		select: "name",
	});
	let inProgress = await Task.find({
		$or: [
			{ $and: [{ userName: req.user._id }, { category: "in-progress" }] },
			{ $and: [{ assign: req.user.email }, { category: "in-progress" }] },
		],
	}).populate({
		path: "userName",
		select: "name",
	});
	let done = await Task.find({
		$or: [
			{ $and: [{ userName: req.user._id }, { category: "done" }] },
			{ $and: [{ assign: req.user.email }, { category: "done" }] },
		],
	}).populate({
		path: "userName",
		select: "name",
	});
	res.status(200).send({
		message: "success",
		data: { backlog, todo, inProgress, done },
	});
};

const addTask = async (req, res) => {
	let { title, priority, checklist, dueDate } = req.body;
	let userName = req.user._id;
	let newTask = new Task({
		title,
		priority,
		checklist,
		dueDate,
		userName,
	});
	let createTask = await newTask.save();
	console.log(createTask);
	let task = await Task.findById(createTask._id).populate({
		path: "userName",
		select: "name",
	});
	res.status(200).send({ message: "success", data: task });
};

const updateTask = async (req, res) => {
	let { title, priority, checklist, dueDate } = req.body;
	const { id } = req.params;
	let updatedTask = await Task.findByIdAndUpdate(
		id,
		{ title, priority, checklist, dueDate },
		{ new: true }
	).populate({
		path: "userName",
		select: "name",
	});
	res.status(200).send({ message: "success", data: updatedTask });
};
const deleteTask = async (req, res) => {
	const { id } = req.params;
	const deleteTask = await Task.findByIdAndDelete(id);
	res.status(200).send({ message: "success", data: deleteTask });
};

module.exports = { getTask, getAllTask, addTask, updateTask, deleteTask };
