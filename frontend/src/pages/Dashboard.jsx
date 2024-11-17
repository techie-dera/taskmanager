import Navbar from "./Navbar";
import Board from "./Board";
import Analytics from "./Analytics";
import Settings from "./Settings";
import { useSelector } from "react-redux";
import "../css/Dashboard.css";
import { AddedPeople, AddPeople } from "../components/Model";

const Dashboard = () => {
	const state = useSelector((store) => store.state);
	return (
		<>
			<Navbar />
			{state.dashboardSection == "board" && <Board />}
			{state.dashboardSection == "analytics" && <Analytics />}
			{state.dashboardSection == "settings" && <Settings />}
			{state.addPeopleM && <AddPeople />}
			{state.addedPeopleM && <AddedPeople />}
		</>
	);
};

export default Dashboard;
