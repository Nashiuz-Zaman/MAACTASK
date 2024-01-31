// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// styles
import styles from "./LinkBtn.module.scss";

const LinkBtn = ({
  text,
  url,
  colorTheme = "primary",
  hashed = false,
  modifyClasses = "",
  sizeTheme = "base",
}) => {
  // common classes
  const colorClasses =
    colorTheme === "primary"
      ? styles["primary-btn"]
      : colorTheme === "primaryAlt"
      ? styles["primary-btn-alt"]
      : "";

  const sizeClasses =
    sizeTheme === "base"
      ? styles["base-btn"]
      : sizeTheme === "lg"
      ? styles["large-btn"]
      : "";

  const baseClasses = styles["link-btn-container"];

  if (hashed) {
    return (
      <div className={`${baseClasses} ${colorClasses} ${modifyClasses}`}>
        <HashLink className={`${sizeClasses}`} to={url}>
          {text}
        </HashLink>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${colorClasses} ${modifyClasses}`}>
      <Link className={`${sizeClasses}`} to={url}>
        {text}
      </Link>
    </div>
  );
};

LinkBtn.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  colorTheme: PropTypes.string,
  hashed: PropTypes.bool,
  modifyClasses: PropTypes.string,
  sizeTheme: PropTypes.string,
};

export default LinkBtn;
