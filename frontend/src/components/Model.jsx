import React from "react";
import "../css/Model.css";
import { useDispatch } from "react-redux";
import {
	setAddedPeopleM,
	setAddPeopleM,
	setLogoutM,
	setTaskDeleteM,
	setTaskCardM,
} from "../redux/slices/stateSlice";
import { AiOutlinePlus } from "react-icons/ai";

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
	const handleLogout = () => {
		localStorage.removeItem("token");
		dispatch(setLogoutM(false));
		window.location.reload();
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
	return (
		<div className="model-container">
			<div className="model-box model-card">
				<span>
					Title <span>*</span>
				</span>
				<input
					type="email"
					name="email"
					placeholder="Enter task Title"
					className="model-input"
				/>
				<div>
					<span>
						Select Priority <span>*</span>
					</span>
				</div>
				<div>
					<span>
						Checklist (0/0) <span>*</span>
					</span>
				</div>
				<div>
					<AiOutlinePlus fontSize={18} cursor={"pointer"} />
					<span>Add New</span>
				</div>
				<div className="model-btns">
					<button className="model-due-date">Select Due Date</button>
					<button
						className="model-cancel"
						onClick={() => dispatch(setTaskCardM(false))}
					>
						Cancel
					</button>
					<button className="model-submit">Save</button>
				</div>
			</div>
		</div>
	);
};
