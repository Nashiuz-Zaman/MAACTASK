// react-router imports
import { Outlet } from "react-router-dom";

// component
import DashboardContainer from "../../containers/DashboardContainer/DashboardContainer";
import DashboardHeader from "../../shared/DashboardHeader/DashboardHeader";
import DashboardNav from "../../shared/DashboardNav/DashboardNav";

// style
import "./DashboardLayout.scss";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <DashboardContainer>
        <DashboardHeader />
        <div className="dashboard-layout__inner-content">
          <DashboardNav />
          <Outlet />
        </div>
      </DashboardContainer>
    </div>
  );
}

export default DashboardLayout;
