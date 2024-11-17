import TaskBox from "../components/TaskBox";

const ToDo = ({ todoCollapse }) => {
	return (
		<div className="task-container">
			<TaskBox todoCollapse={todoCollapse} />
			<TaskBox todoCollapse={todoCollapse} />
			<TaskBox todoCollapse={todoCollapse} />
		</div>
	);
};

export default ToDo;
