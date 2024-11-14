import Navbar from "./Navbar";
import Backlog from "./Backlog";
import ToDo from "./ToDo";
import InProgress from "./InProgress";
import Success from "./Success";
import "../css/Dashboard.css";

const Dashboard = () => {
	return (
		<div>
			<Navbar />

			<div className="dashboard-container">
				<div className="column">
					<h4>Backlog</h4>
					<Backlog />
				</div>
				<div className="column">
					<h4>To Do</h4>
					<ToDo />
				</div>
				<div className="column">
					<h4>In Progress</h4>
					<InProgress />
				</div>
				<div className="column">
					<h4>Success</h4>
					<Success />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
