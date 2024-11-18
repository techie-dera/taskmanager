import React, { useRef, useState } from "react";
import "../css/Model.css";
import { useDispatch } from "react-redux";
import {
	setAddedPeopleM,
	setAddPeopleM,
	setLogoutM,
	setTaskDeleteM,
	setTaskCardM,
} from "../redux/slices/stateSlice";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { removeAuth } from "../redux/slices/authSlice";

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
	return (
		<div className="model-container">
			<div className="model-box model-box-s">
				<h3 className="model-center">
					Are you sure you want to Delete?
				</h3>
				<div className="model-btns">
					<button className="model-submit">Yes, Delete</button>
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
	const handleTaskCard = (e) => {
		e.preventDefault();
		console.log(title);
		console.log(priority);
		console.log(dueDate.current?.value);
	};
	return (
		<div className="model-container">
			<form
				className="model-box model-card"
				onSubmit={(e) => handleTaskCard(e)}
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
						onChange={(e) => setTitle(e.target.value)}
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
						Checklist (0/0) <span className="require">*</span>
					</span>
					<div className="checklist-box">
						<div className="checklist-input-box">
							<span className="checklist-btn checklist-btn-l">
								<input type="checkbox" />
							</span>
							<input
								className="model-input model-input-btn"
								type="text"
								placeholder="Add a task"
								name="task"
								// value={}
							/>
							<span className="checklist-btn checklist-btn-r">
								<AiFillDelete cursor={"pointer"} />
							</span>
						</div>
					</div>
					<span className="checklist-add">
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
						Save
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
							<span className="checklist-btn checklist-btn-l checkbox-public">
								<input type="checkbox" checked />
								<div></div>
							</span>
							<p className="model-input model-input-btn">
								Task to be done
							</p>
						</div>
						<div className="checklist-input-box">
							<span className="checklist-btn checklist-btn-l checkbox-public">
								<input type="checkbox" />
								<div></div>
							</span>
							<p className="model-input model-input-btn">
								Task to be done
							</p>
						</div>
						<div className="checklist-input-box">
							<span className="checklist-btn checklist-btn-l checkbox-public">
								<input type="checkbox" />
								<div></div>
							</span>
							<p className="model-input model-input-btn">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit.
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
