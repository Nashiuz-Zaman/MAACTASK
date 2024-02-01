import PropTypes from "prop-types";

// styles
import styles from "./BackdropBlur.module.scss";

const BackdropBlur = ({
  openState = false,
  clickHandler = null,
  modifyClasses = "",
}) => {
  console.log(openState);
  return (
    <div
      onClick={clickHandler}
      className={`${styles["backdrop-blur"]} ${
        openState ? styles["open"] : ""
      } ${modifyClasses}`}
    ></div>
  );
};

BackdropBlur.propTypes = {
  openState: PropTypes.bool,
  modifyClasses: PropTypes.string,
  clickHandler: PropTypes.any,
};

export default BackdropBlur;
