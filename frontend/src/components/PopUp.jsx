import React from "react";
import "../css/PopUp.css";
import { useDispatch } from "react-redux";
import {
	setTaskCardM,
	setTaskDeleteM,
	setTaskFilterName,
	setTaskFilterP,
	setTaskM,
} from "../redux/slices/stateSlice";
import { toast } from "react-toastify";
import useAllTaskFilter from "../hooks/useAllTaskFilter";

export const TaskMenu = ({ setTaskMenuP, id, task }) => {
	const dispatch = useDispatch();

	const handleTaskEdit = () => {
		dispatch(setTaskM(task));
		dispatch(setTaskCardM(true));
		setTaskMenuP(false);
	};

	const handleTaskDelete = () => {
		dispatch(setTaskDeleteM(true));
		setTaskMenuP(false);
	};
	const handleSharelink = (id) => {
		if (!navigator.clipboard) {
			toast.error(
				"Your browser does not support copying text to the clipboard."
			);
			return;
		}
		navigator.clipboard.writeText(
			`${import.meta.env.VITE_FRONTEND_URL}/task/${id}`
		);

		setTaskMenuP(false);
		toast.success("Link Copied");
	};
	return (
		<div className="popup-box">
			<button onClick={handleTaskEdit}>Edit</button>
			<button onClick={() => handleSharelink(id)}>Share</button>
			<button className="popup-delete" onClick={handleTaskDelete}>
				Delete
			</button>
		</div>
	);
};
export const TaskFilter = () => {
	const dispatch = useDispatch();
	const handleFilter = (filter) => {
		dispatch(setTaskFilterP(false));
		useAllTaskFilter(dispatch, filter);
	};

	return (
		<div className="popup-box pupup-filter">
			<button
				onClick={() => {
					handleFilter("today");
					dispatch(setTaskFilterName("Today"));
				}}
			>
				Today
			</button>
			<button
				onClick={() => {
					handleFilter("this-week");
					dispatch(setTaskFilterName("This week"));
				}}
			>
				This Week
			</button>
			<button
				onClick={() => {
					handleFilter("this-month");
					dispatch(setTaskFilterName("This month"));
				}}
			>
				This Month
			</button>
		</div>
	);
};
