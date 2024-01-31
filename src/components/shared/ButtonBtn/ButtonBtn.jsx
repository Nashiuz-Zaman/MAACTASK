// react imports
import PropTypes from "prop-types";

// component
// import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// styles
import styles from "./ButtonBtn.module.scss";

const ButtonBtn = ({
  text,
  onClick = () => {
    console.log("Button currently does nothing");
  },
  colorTheme = "primary",
  modifyClasses = "",
  // loading = false,
  disabled = false,
  sizeTheme = "base",
}) => {
  const btnClasses = `${styles["button-btn-container"]} ${styles[colorTheme]} ${styles[sizeTheme]} ${modifyClasses}`;

  return (
    <div className={`${btnClasses}  `}>
      <button
        style={{ backfaceVisibility: "hidden" }}
        disabled={disabled}
        onClick={onClick}
      >
        {/* {loading && (
          <LoadingSpinner onlyLoader={true} loaderSizeClass={"3xl:text-2xl"} />
        )} */}
        {text}
      </button>
    </div>
  );
};

ButtonBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  colorTheme: PropTypes.string,
  modifyClasses: PropTypes.string,
  // loading: PropTypes.bool,
  disabled: PropTypes.bool,
  sizeTheme: PropTypes.string,
};

export default ButtonBtn;
