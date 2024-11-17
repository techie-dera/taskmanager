import React from "react";
import "../css/Analytics.css";
const Analytics = () => {
	return (
		<div className="dashboard-container">
			<div className="dashboard-header">
				<div className="header-user">
					<h3>Analytics</h3>
				</div>
			</div>
			<div className="analytics-container">
				<div className="analytics-box">
					<div className="analytics-task">
						<div>
							<div className="analytics-circle"></div>
							<span>Backlog Tasks</span>
						</div>
						<span>16</span>
					</div>
					<div className="analytics-task">
						<div>
							<div className="analytics-circle"></div>
							<span>To-do Tasks</span>
						</div>
						<span>14</span>
					</div>
					<div className="analytics-task">
						<div>
							<div className="analytics-circle"></div>
							<span>In-Progress Tasks</span>
						</div>
						<span>03</span>
					</div>
					<div className="analytics-task">
						<div>
							<div className="analytics-circle"></div>
							<span>Completed Tasks</span>
						</div>
						<span>22</span>
					</div>
				</div>
				<div className="analytics-box">
					<div className="analytics-task">
						<div>
							<div className="analytics-circle"></div>
							<span>Low Priority</span>
						</div>
						<span>16</span>
					</div>
					<div className="analytics-task">
						<div>
							<div className="analytics-circle"></div>
							<span>Moderate Priority</span>
						</div>
						<span>14</span>
					</div>
					<div className="analytics-task">
						<div>
							<div className="analytics-circle"></div>
							<span>High Priority</span>
						</div>
						<span>03</span>
					</div>
					<div className="analytics-task">
						<div>
							<div className="analytics-circle"></div>
							<span>Due Date Tasks</span>
						</div>
						<span>03</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
