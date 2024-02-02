// react
import PropTypes from "prop-types";

// components
import BrandLogo from "./../BrandLogo/BrandLogo";
import UserProfile from "./../UserProfile/UserProfile";

// data
import brandlogo from "./../../../assets/websiteLogo/brandlogo.svg";

// scss
import "./DashboardHeader.scss";

const DashboardHeader = ({ modifyClasses = "" }) => {
  // extra user from auth

  return (
    <header className={`dashboard-header ${modifyClasses}`}>
      <BrandLogo imageSource={brandlogo} imageModifyClasses="h-[3rem]" />

      <UserProfile profile={null} logoutFunction={null} />
    </header>
  );
};

DashboardHeader.propTypes = {
  modifyClasses: PropTypes.string,
};

export default DashboardHeader;
