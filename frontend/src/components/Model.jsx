import React, { useEffect, useRef, useState } from "react";
import "../css/Model.css";
import { useDispatch, useSelector } from "react-redux";
import {
	setAddedPeopleM,
	setAddPeopleM,
	setLogoutM,
	setTaskDeleteM,
	setTaskCardM,
} from "../redux/slices/stateSlice";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
	PiCheckSquare,
	PiCodesandboxLogoDuotone,
	PiSquare,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { removeAuth } from "../redux/slices/authSlice";
import useAddTask from "../hooks/useAddTask";
import { toast } from "react-toastify";
import useDeleteTask from "../hooks/useDeleteTask";

export const AddPeople = () => {
	const dispatch = useDispatch();
	return (
		<div className="model-container">
			<div className="model-box">
				<h3>Add people to the board</h3>
				<input
					type="email"
					name="email"
					placeholder="Enter the email"
					className="model-input"
				/>
				<div className="model-btns">
					<button
						className="model-cancel"
						onClick={() => dispatch(setAddPeopleM(false))}
					>
						Cancel
					</button>
					<button className="model-submit">Add Email</button>
				</div>
			</div>
		</div>
	);
};
export const AddedPeople = () => {
	const dispatch = useDispatch();
	return (
		<div className="model-container">
			<div className="model-box">
				<h3 className="model-center">demo@demo.com added to board</h3>
				<div className="model-btns">
					<button
						className="model-submit"
						onClick={() => dispatch(setAddedPeopleM(false))}
					>
						Okey, got it!
					</button>
				</div>
			</div>
		</div>
	);
};

export const Logout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("token");
		dispatch(removeAuth());
		dispatch(setLogoutM(false));
		navigate("/login");
	};
	return (
		<div className="model-container">
			<div className="model-box model-box-s">
				<h3 className="model-center">
					Are you sure you want to Logout?
				</h3>
				<div className="model-btns">
					<button className="model-submit" onClick={handleLogout}>
						Yes, Logout
					</button>
					<button
						className="model-cancel"
						onClick={() => dispatch(setLogoutM(false))}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};
export const TaskDelete = () => {
	const dispatch = useDispatch();
	const id = useSelector((store) => store.state.taskMId);
	const [load, setLoad] = useState("");
	const handleTaskDelete = (e) => {
		useDeleteTask(e, setLoad, dispatch, id);
	};

	return (
		<div className="model-container">
			<div className="model-box model-box-s">
				<h3 className="model-center">
					Are you sure you want to Delete?
				</h3>
				<div className="model-btns">
					<button
						className="model-submit"
						onClick={(e) => handleTaskDelete(e)}
					>
						{load ? "Loading..." : "Yes, Delete"}
					</button>
					<button
						className="model-cancel"
						onClick={() => dispatch(setTaskDeleteM(false))}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};
export const TaskCard = () => {
	const dispatch = useDispatch();
	const dueDate = useRef(null);
	const [title, setTitle] = useState("");
	const [priority, setPriority] = useState("");
	const [checklist, setChecklist] = useState([]);
	const [listBox, setListBox] = useState(0);
	const [load, setLoad] = useState("");

	const handleAddTask = (e) => {
		if (title && priority && checklist.length > 0) {
			const listName = checklist.filter((list) => {
				return list.name == "";
			});
			if (listName.length == 0) {
				useAddTask(
					e,
					setLoad,
					title,
					priority,
					checklist,
					dueDate.current.value,
					dispatch
				);
			} else {
				toast.error("Checklist is required");
			}
		} else {
			toast.error("All fields are required");
		}
	};

	const handleAddChecklist = () => {
		let list = checklist;
		list.push({ name: "", isDone: false });
		setChecklist(list);
		setListBox(checklist.length);
	};
	const handleDeleteChecklist = (idx) => {
		if (listBox > 0) {
			let list = checklist;
			list.splice(idx, 1);
			setChecklist(list);
			setListBox(checklist.length);
		}
	};

	const handleTitle = (name) => {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		setTitle(name);
	};
	return (
		<div className="model-container">
			<form
				className="model-box model-card"
				onSubmit={(e) => {
					e.preventDefault();
					handleAddTask(e);
				}}
			>
				<div className="model-card-details">
					<span>
						Title <span className="require">*</span>
					</span>
					<input
						type="text"
						name="title"
						value={title}
						placeholder="Enter Task Title"
						className="model-input"
						onChange={(e) => handleTitle(e.target.value)}
					/>
					<div className="priority-box">
						<span>
							Select Priority <span className="require">*</span>
						</span>
						<div>
							<input
								type="radio"
								name="priority"
								value={priority}
								onClick={() => setPriority("High Priority")}
								id="high"
							/>
							<label
								htmlFor="high"
								className={`${
									priority == "High Priority" &&
									"selected-priority"
								}`}
							>
								<div
									className="priority-circel"
									style={{ background: "red" }}
								></div>
								<span>High Priority</span>
							</label>
							<input
								type="radio"
								name="priority"
								value={priority}
								onClick={() => setPriority("Moderate Priority")}
								id="moderate"
							/>
							<label
								htmlFor="moderate"
								className={`${
									priority == "Moderate Priority" &&
									"selected-priority"
								}`}
							>
								<div
									className="priority-circel"
									style={{ background: "#18B0FF" }}
								></div>
								<span>Moderate Priority</span>
							</label>
							<input
								type="radio"
								name="priority"
								value={priority}
								onClick={() => setPriority("Low Priority")}
								id="low"
							/>
							<label
								htmlFor="low"
								className={`${
									priority == "Low Priority" &&
									"selected-priority"
								}`}
							>
								<div
									className="priority-circel"
									style={{ background: "#63C05B" }}
								></div>
								<span>Low Priority</span>
							</label>
						</div>
					</div>
					<span className="checklist-head">
						Checklist (
						{checklist.filter((item) => item.isDone == true).length}
						/{listBox}) <span className="require">*</span>
					</span>
					<div className="checklist-box">
						{checklist?.map((el, idx) => {
							return (
								<div className="checklist-input-box">
									<span
										className="checklist-btn checklist-btn-l"
										onClick={() =>
											setChecklist(
												checklist.map((item, i) =>
													i === idx
														? {
																...item,
																isDone: !el.isDone,
														  }
														: item
												)
											)
										}
									>
										{!el.isDone ? (
											<PiSquare fontSize={18} />
										) : (
											<PiCheckSquare fontSize={18} />
										)}
									</span>
									<input
										className="model-input model-input-btn"
										type="text"
										name={`item-${idx + 1}`}
										placeholder="Add a task"
										value={el.name}
										onChange={(e) =>
											setChecklist(
												checklist.map((item, i) =>
													i === idx
														? {
																...item,
																name: e.target
																	.value,
														  }
														: item
												)
											)
										}
									/>
									<span
										className="checklist-btn checklist-btn-r"
										onClick={() =>
											handleDeleteChecklist(idx)
										}
									>
										<AiFillDelete />
									</span>
								</div>
							);
						})}
					</div>
					<span
						className="checklist-add"
						onClick={handleAddChecklist}
					>
						<AiOutlinePlus fontSize={16} />
						<span>Add New</span>
					</span>
				</div>
				<div className="model-btns">
					<label
						htmlFor="model-card-date"
						onClick={(e) => dueDate.current.showPicker()}
					>
						<button className="model-due-date" type="button">
							Select Due Date
						</button>
					</label>
					<input
						type="date"
						name="due-date"
						id="model-card-date"
						ref={dueDate}
					/>
					<button
						type="button"
						className="model-cancel"
						onClick={() => dispatch(setTaskCardM(false))}
					>
						Cancel
					</button>
					<button className="model-submit" type="submit">
						{load == "" ? "Update" : load}
					</button>
				</div>
			</form>
		</div>
	);
};
export const TaskCardPublic = () => {
	return (
		<div className="model-container model-public">
			<div className="nav-logo nav-logo-public">
				<PiCodesandboxLogoDuotone fontSize={22} />
				<span>Pro Manage</span>
			</div>
			<div className="model-box model-card">
				<div className="model-card-details">
					<div className="priority-box priority-public">
						<span
							className="priority-circel"
							style={{ background: "red" }}
						></span>
						<span>High Priority</span>
					</div>
					<h3>Hero Section</h3>
					<div className="checklist-head checklist-public">
						Checklist (0/0)
					</div>
					<div className="checklist-box checklist-box-public">
						<div className="checklist-input-box">
							<span className="checklist-btn checklist-btn-l">
								{true ? (
									<PiSquare fontSize={18} />
								) : (
									<PiCheckSquare fontSize={18} />
								)}
							</span>
							<p className="model-input model-input-btn">
								Task to be done
							</p>
						</div>
					</div>
				</div>
				<div className="model-due">
					<span>Due Date</span>
					<div>Feb 10th</div>
				</div>
			</div>
		</div>
	);
};
