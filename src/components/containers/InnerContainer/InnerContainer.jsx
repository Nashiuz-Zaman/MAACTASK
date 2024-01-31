// react imports
import PropTypes from "prop-types";

// style
import styles from "./InnerContainer.module.scss";

const InnerContainer = ({ children, modifyClasses = "" }) => {
  return (
    <div className={`${styles["inner-container"]} ${modifyClasses}`}>
      {children}
    </div>
  );
};

InnerContainer.propTypes = {
  children: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default InnerContainer;
