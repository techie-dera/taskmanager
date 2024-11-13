import "../css/Dashboard.css";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">Dashboard</div>
      <div className="nav-links">
        <a href="#board" className="nav-link">Board</a>
        <a href="#analytics" className="nav-link">Analytics</a>
        <a href="#settings" className="nav-link">Settings</a>
        <a href="#backlog" className="nav-link">Backlog</a>
      </div>
    </div>
  );
};

export default Navbar;

