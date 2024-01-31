// react
import PropTypes from "prop-types";

// components
import BrandLogo from "./../BrandLogo/BrandLogo";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import MobileNav from "./../MobileNav/MobileNav";
import LinkBtn from "../LinkBtn/LinkBtn";
import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner";

// redux
import { useSelector } from "react-redux";

// data
import brandlogo from "./../../../assets/websiteLogo/brandlogo.svg";
import { navOptions } from "../../../interfaceData/navigationOptions";

// styles
import styles from "./Header.module.scss";

const Header = ({ modifyClasses = "" }) => {
  // extract user from auth
  const { profileData, appLoading } = useSelector((store) => store.auth);

  return (
    <header className={`${styles["header"]} ${modifyClasses}`}>
      <InnerContainer>
        <div className={styles["header__container"]}>
          {/* website logo */}
          <BrandLogo imageSource={brandlogo} />

          {/* auth related options login/logout etc */}
          <div className={styles["header__container__btn-container"]}>
            {navOptions.map((option) => {
              return (
                <LinkBtn
                  colorTheme={option.colorTheme}
                  key={option.id}
                  text={option.text}
                  url={option.url}
                />
              );
            })}
          </div>

          {/* mobile nav button and mobile nav menu */}
          <MobileNav />
        </div>
      </InnerContainer>
    </header>
  );
};

Header.propTypes = {
  modifyClasses: PropTypes.string,
};

export default Header;
