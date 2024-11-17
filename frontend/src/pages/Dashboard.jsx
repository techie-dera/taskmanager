import Navbar from "./Navbar";
import Board from "./Board";
import Analytics from "./Analytics";
import Settings from "./Settings";
import { useSelector } from "react-redux";
import "../css/Dashboard.css";

const Dashboard = () => {
	const dashboardSection = useSelector(
		(store) => store.state.dashboardSection
	);
	return (
		<>
			<Navbar />
			{dashboardSection == "board" && <Board />}
			{dashboardSection == "analytics" && <Analytics />}
			{dashboardSection == "settings" && <Settings />}
		</>
	);
};

export default Dashboard;
