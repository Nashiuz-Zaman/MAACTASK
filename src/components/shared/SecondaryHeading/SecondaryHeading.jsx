// react
import PropTypes from "prop-types";

// styles
import styles from "./SecondaryHeading.module.scss";

const SecondaryHeading = ({ text, modifyClasses = "" }) => {
  return (
    <h2 className={`${styles["secondary-heading"]} ${modifyClasses}`}>
      {text}
    </h2>
  );
};

SecondaryHeading.propTypes = {
  text: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default SecondaryHeading;
