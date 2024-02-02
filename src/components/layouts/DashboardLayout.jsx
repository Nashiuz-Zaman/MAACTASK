// react-router imports
import { Outlet } from "react-router-dom";

// component
import DashboardContainer from "../containers/DashboardContainer/DashboardContainer";
import DashboardHeader from "./../shared/DashboardHeader/DashboardHeader";

function DashboardLayout() {
  return (
    <div>
      <DashboardContainer>
        <DashboardHeader />
        <Outlet />
      </DashboardContainer>
    </div>
  );
}

export default DashboardLayout;
