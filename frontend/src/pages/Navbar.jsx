import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import "../css/Dashboard.css";
import "../css/Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-logo">
				{/* <PiCodesandboxLogoLight /> */}
				<PiCodesandboxLogoDuotone fontSize={22} />
				<span>Pro Manage</span>
			</div>
			<div className="nav-links">
				<a href="#board" className="nav-link">
					<MdOutlineSpaceDashboard fontSize={22} />
					<span>Board</span>
				</a>
				<a href="#analytics" className="nav-link">
					<GoDatabase fontSize={22} />
					<span>Analytics</span>
				</a>
				<a href="#settings" className="nav-link">
					<IoSettingsOutline fontSize={22} />
					<span>Settings</span>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
