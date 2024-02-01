// react
import PropTypes from "prop-types";

// styles
import styles from "./TertiaryHeading.module.scss";

const TertiaryHeading = ({ text, modifyClasses = "" }) => {
  return (
    <h3 className={`${styles["tertiary-heading"]} ${modifyClasses}`}>{text}</h3>
  );
};

TertiaryHeading.propTypes = {
  text: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default TertiaryHeading;
