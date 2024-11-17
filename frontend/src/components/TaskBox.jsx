import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbDots } from "react-icons/tb";
import { TaskMenu } from "./PopUp";

const TaskBox = ({
	backlogCollapse,
	todoCollapse,
	progressCollapse,
	doneCollapse,
}) => {
	const [collapse, setCollapse] = useState(true);
	const [taskMenuP, setTaskMenuP] = useState(false);

	const handleClickOutside = (event) => {
		if (taskMenuP && !event?.target.closest(".popup-box")) {
			setTaskMenuP(false);
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [taskMenuP]);

	useEffect(() => {
		setCollapse(true);
	}, [backlogCollapse, todoCollapse, progressCollapse, doneCollapse]);
	return (
		<div className="task-box">
			<div className="priority-menu">
				<div>
					<div className="circle-box"></div>
					<p>HIGH PRIORITY</p>
					<div className="circle-name-box">AK</div>
				</div>
				<div className="relative">
					<TbDots
						fontSize={18}
						cursor={"pointer"}
						onClick={() => setTaskMenuP(true)}
					/>
					{taskMenuP && <TaskMenu setTaskMenuP={setTaskMenuP} />}
				</div>
			</div>
			<h3>Hero Section</h3>
			<div className="task-checklist">
				<p>Checklist (1/3)</p>
				<div onClick={() => setCollapse(!collapse)}>
					{collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
				</div>
			</div>
			<div
				className={`task-checklist-details ${
					collapse && "task-checklist-details-collapse"
				}`}
			>
				<label className="checklist-details-box" for="task1">
					<input type="checkbox" id="task1" name="task1" />
					<span>Task to be done</span>
				</label>
				<label className="checklist-details-box" for="task2">
					<input type="checkbox" id="task2" name="task2" />
					<span>Task to be done</span>
				</label>
				<label className="checklist-details-box" for="task3">
					<input type="checkbox" id="task3" name="task3" />
					<span>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</span>
				</label>
			</div>
			<div className="task-btns">
				<div className="task-btn task-btn-red">Feb 10th</div>
				<div>
					<div className="task-btn">PROGRESS</div>
					<div className="task-btn">TO-DO</div>
					<div className="task-btn">DONE</div>
				</div>
			</div>
		</div>
	);
};

export default TaskBox;
