// react
import PropTypes from "prop-types";

// styles
import styles from "./Accordion.module.scss";

const Accordion = ({ children, expanded, modifyClasses = "" }) => {
  return (
    <div
      className={`${styles["accordion"]}  ${
        expanded ? styles["open"] : ""
      } ${modifyClasses}`}
    >
      <div className={styles["accordion__container"]}> {children}</div>
    </div>
  );
};

Accordion.propTypes = {
  expanded: PropTypes.bool,
  modifyClasses: PropTypes.string,
  children: PropTypes.any,
};

export default Accordion;
