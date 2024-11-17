import { TbDots } from "react-icons/tb";
import TaskBox from "../components/TaskBox";

const Backlog = () => {
	return (
		<div className="task-container">
			<TaskBox />
			<TaskBox />
			<TaskBox />
		</div>
	);
};

export default Backlog;
