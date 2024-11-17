import { TbDots } from "react-icons/tb";
import TaskBox from "../components/TaskBox";

const Backlog = ({ backlogCollapse }) => {
	return (
		<div className="task-container">
			<TaskBox backlogCollapse={backlogCollapse} />
			<TaskBox backlogCollapse={backlogCollapse} />
			<TaskBox backlogCollapse={backlogCollapse} />
		</div>
	);
};

export default Backlog;
