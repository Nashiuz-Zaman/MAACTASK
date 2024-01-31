// react
import PropTypes from "prop-types";

// icon
import { IoIosMenu } from "react-icons/io";

// styles
import styles from "./MobileMenuBtn.module.scss";

const MobileMenuBtn = ({ openNavFunction, modifyClasses = "" }) => {
  return (
    <button
      className={`${styles["mobile-menu-btn"]} ${modifyClasses}`}
      onClick={openNavFunction}
    >
      <IoIosMenu className={styles["mobile-menu-btn__icon"]}></IoIosMenu>
    </button>
  );
};

MobileMenuBtn.propTypes = {
  openNavFunction: PropTypes.func,
  modifyClasses: PropTypes.string,
};
export default MobileMenuBtn;
