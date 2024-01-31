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

  // one single place for the link classes
  const linkClasses =
    "leading-[normal] px-2 py-1 rounded-default text-white hover:text-primaryLightest font-medium transition-all duration-200";

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
        <BrandLogo imageSource={brandlogo} />

        {/* regular part */}
        <ul className="flex flex-col gap-3">
          {/* this part will be always shown */}
          {navOptions &&
            navOptions.map((option) => {
              // if hashed link present then return this part, if not then return the next part

              // hashed link
              if (option.hashed) {
                return (
                  <li key={option.id} onClick={closeMobileNav}>
                    <HashLink className={linkClasses} to={option.url}>
                      {option.text}
                    </HashLink>
                  </li>
                );
              }

              // normal link
              return (
                <li key={option.id} onClick={closeMobileNav}>
                  <NavLink className={linkClasses} to={option.url}>
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
