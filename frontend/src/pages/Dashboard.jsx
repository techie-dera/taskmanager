import Navbar from "./Navbar";
import Board from "./Board";
import Analytics from "./Analytics";
import Settings from "./Settings";
import { useSelector } from "react-redux";

const Dashboard = () => {
	const dashboardSection = useSelector(
		(store) => store.state.dashboardSection
	);
	return (
		<div>
			<Navbar />
			{dashboardSection == "board" && <Board />}
			{dashboardSection == "analytics" && <Analytics />}
			{dashboardSection == "settings" && <Settings />}
		</div>
	);
};

export default Dashboard;
