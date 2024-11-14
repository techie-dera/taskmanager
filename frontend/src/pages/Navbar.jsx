import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
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
				<div>
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
				<div className="nav-logout">
					<a href="#logout" className="nav-log">
						<IoLogOutOutline fontSize={22} />
						<span>Log out</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
