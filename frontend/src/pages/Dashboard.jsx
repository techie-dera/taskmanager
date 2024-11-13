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
          <h2>Backlog</h2>
          <Backlog />
        </div>
        <div className="column">
          <h2>To Do</h2>
          <ToDo />
        </div>
        <div className="column">
          <h2>In Progress</h2>
          <InProgress />
        </div>
        <div className="column">
          <h2>Success</h2>
          <Success />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
