import React from "react";
import "../css/Model.css";
import { useDispatch } from "react-redux";
import { setAddedPeopleM, setAddPeopleM } from "../redux/slices/stateSlice";

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
