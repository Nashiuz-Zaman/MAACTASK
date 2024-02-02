// style
import { NavLink } from "react-router-dom";
import "./DashboardNav.scss";

const DashboardNav = () => {
  return (
    <nav className="dashboard-nav">
      <h2>Menu</h2>

      <div className="dashboard-nav__links">
        <p>Geo Information</p>
        <NavLink to="/dashboard/region">Region</NavLink>
        <NavLink to="/dashboard/area">Area</NavLink>
      </div>
    </nav>
  );
};

export default DashboardNav;
