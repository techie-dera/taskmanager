import TaskBox from "../components/TaskBox";

const InProgress = ({ progressCollapse }) => {
	return (
		<div className="task-container">
			<TaskBox progressCollapse={progressCollapse} />
			<TaskBox progressCollapse={progressCollapse} />
			<TaskBox progressCollapse={progressCollapse} />
		</div>
	);
};

export default InProgress;
