import React from "react";
import "../css/PopUp.css";
import { useDispatch } from "react-redux";
import { setTaskDeleteM } from "../redux/slices/stateSlice";
export const TaskMenu = ({ setTaskMenuP }) => {
	const dispatch = useDispatch();
	const handleTaskDelete = () => {
		dispatch(setTaskDeleteM(true));
		setTaskMenuP(false);
	};
	return (
		<div className="popup-box">
			<button>Edit</button>
			<button>Share</button>
			<button className="popup-delete" onClick={handleTaskDelete}>
				Delete
			</button>
		</div>
	);
};
export const TaskFilter = () => {
	return (
		<div className="popup-box pupup-filter">
			<button>Today</button>
			<button>This Week</button>
			<button>This Month</button>
		</div>
	);
};
