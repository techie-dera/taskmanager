import { useSelector } from "react-redux";
import TaskBox from "../components/TaskBox";

const InProgress = ({ progressCollapse }) => {
	const InProgress = useSelector((store) => store.task.InProgress);
	return (
		<div className="task-container">
			{InProgress?.map((task, index) => (
				<TaskBox
					key={index}
					task={task}
					progressCollapse={progressCollapse}
				/>
			))}
		</div>
	);
};

export default InProgress;
