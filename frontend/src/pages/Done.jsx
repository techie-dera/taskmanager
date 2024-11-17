import TaskBox from "../components/TaskBox";

const Done = ({ doneCollapse }) => {
	return (
		<div className="task-container">
			<TaskBox doneCollapse={doneCollapse} />
			<TaskBox doneCollapse={doneCollapse} />
			<TaskBox doneCollapse={doneCollapse} />
		</div>
	);
};

export default Done;
