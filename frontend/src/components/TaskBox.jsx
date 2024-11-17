import React from "react";
import { TbDots } from "react-icons/tb";

const TaskBox = () => {
	return (
		<div className="task-box">
			<div className="priority-menu">
				<div>
					<div className="circle-box"></div>
					<p>HIGH PRIORITY</p>
					<div className="circle-name-box">AK</div>
				</div>
				<TbDots fontSize={18} />
			</div>
			<h3>High Probability</h3>
			<p>Tasks with a high chance of being prioritized.</p>
		</div>
	);
};

export default TaskBox;
