import React from "react";
import Backlog from "./Backlog";
import ToDo from "./ToDo";
import InProgress from "./InProgress";
import Done from "./Done";
import { VscCollapseAll } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import "../css/Task.css";

const Board = () => {
	return (
		<div className="dashboard-container">
			<div className="dashboard-header">
				<div className="header-user">
					<h3>Welcome! Kumar</h3>
					<h4>12th Jan, 2024</h4>
				</div>
				<div>
					<h2>Board</h2>
					<span className="header-time">
						<p>This week</p>
						<IoIosArrowDown />
					</span>
				</div>
			</div>
			<div className="dashboard-column">
				<div className="column">
					<h4>
						<span>Backlog</span> <VscCollapseAll fontSize={18} />
					</h4>
					<Backlog />
				</div>
				<div className="column">
					<h4>
						<span>To Do</span>
						<span>
							<AiOutlinePlus fontSize={18} />
							<VscCollapseAll fontSize={18} />
						</span>
					</h4>
					<ToDo />
				</div>
				<div className="column">
					<h4>
						<span>In Progress</span>{" "}
						<VscCollapseAll fontSize={18} />
					</h4>
					<InProgress />
				</div>
				<div className="column">
					<h4>
						<span>Done</span> <VscCollapseAll fontSize={18} />
					</h4>
					<Done />
				</div>
			</div>
		</div>
	);
};

export default Board;
