// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

// style
import styles from "./Brandlogo.module.scss";

const BrandLogo = ({
  imageSource,
  modifyClasses = "",
  imageModifyClasses = "",
}) => {
  return (
    <div className={`${styles["brand-logo"]}${modifyClasses}`}>
      <Link to="/">
        <img
          className={`${imageModifyClasses}`}
          src={imageSource}
          alt="Website Logo"
        />
      </Link>
    </div>
  );
};

BrandLogo.propTypes = {
  modifyClasses: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  imageModifyClasses: PropTypes.string,
};

export default BrandLogo;
