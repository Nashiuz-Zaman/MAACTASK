// react
import PropTypes from "prop-types";

// react icon
import { AiOutlineClose } from "react-icons/ai";

// styles
import styles from "./MobileMenuCloseBtn.module.scss";

const MobileMenuCloseBtn = ({ clickHandler }) => {
  return (
    <button
      className={`${styles["mobile-menu-close-button"]}  w-max block mb-10`}
      onClick={clickHandler}
    >
      <AiOutlineClose
        className={styles["mobile-menu-close-button__icon"]}
      ></AiOutlineClose>
    </button>
  );
};

MobileMenuCloseBtn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default MobileMenuCloseBtn;
