// react
import PropTypes from "prop-types";

// react router
import { NavLink } from "react-router-dom";

// react hashed link
import { HashLink } from "react-router-hash-link";

// components
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import BrandLogo from "../BrandLogo/BrandLogo";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// hook
import useMobileNavigation from "../../../hooks/useMobileNavigation";
import useEscapeClose from "../../../hooks/useEscapeClose";

// redux
import { useSelector } from "react-redux";

// interface data
import { navOptions } from "../../../interfaceData/navigationOptions";

// logo import
import brandlogo from "./../../../assets/websiteLogo/brandlogo.svg";

// styles
import styles from "./MobileNav.module.scss";

const MobileNav = ({ modifyClasses = "" }) => {
  // extract mobile nav functionality
  const { mobileNavOpen, openMobileNav, closeMobileNav } =
    useMobileNavigation();

  const { profileData } = useSelector((store) => store.auth);

  // add escape key close functionality
  useEscapeClose(closeMobileNav);

  return (
    //  mobile nav starts here
    <div className={styles["mobile-nav-container"]}>
      <MobileMenuBtn openNavFunction={openMobileNav} />

      <nav
        className={`${styles["mobile-nav-container__nav"]} ${
          mobileNavOpen ? styles["open"] : ""
        } ${modifyClasses}`}
      >
        {/* X cross button to close nav */}
        <MobileMenuCloseBtn clickHandler={closeMobileNav} />

        {/* brand logo part */}
        <BrandLogo imageSource={brandlogo} modifyClasses={`mx-auto`} />

        {/* regular part */}
        <ul className={styles["mobile-nav-container__nav__list"]}>
          {/* this part will be always shown */}
          {navOptions &&
            navOptions.map((option) => {
              // if hashed link present then return this part, if not then return the next part

              // hashed link
              if (option.hashed) {
                return (
                  <li key={option.id} onClick={closeMobileNav}>
                    <HashLink
                      className={
                        styles["mobile-nav-container__nav__list__link"]
                      }
                      to={option.url}
                    >
                      {option.text}
                    </HashLink>
                  </li>
                );
              }

              // normal link
              return (
                <li key={option.id} onClick={closeMobileNav}>
                  <NavLink
                    className={styles["mobile-nav-container__nav__list__link"]}
                    to={option.url}
                  >
                    {option.text}
                  </NavLink>
                </li>
              );
            })}
        </ul>
        {profileData && (
          <ButtonBtn
            text="Sign Out"
            colorTheme="outlined"
            onClickFunction={() => {
              closeMobileNav();
            }}
            modifyClasses="mt-custom2xsm"
          />
        )}
      </nav>
    </div>
  );
};

MobileNav.propTypes = {
  modifyClasses: PropTypes.string,
};

export default MobileNav;
