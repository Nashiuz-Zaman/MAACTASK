// react imports
import PropTypes from "prop-types";

// style
import styles from "./DashboardContainer.module.scss";

const DashboardContainer = ({ children, modifyClasses = "" }) => {
  return (
    <div className={`${styles["dashboard-container"]} ${modifyClasses}`}>
      {children}
    </div>
  );
};

DashboardContainer.propTypes = {
  children: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default DashboardContainer;
