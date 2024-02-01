// styles
import styles from "./Footer.module.scss";

// component
import BrandLogo from "./../BrandLogo/BrandLogo";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// footer data
import brandlogoWhite from "./../../../assets/websiteLogo/brandlogo-white.svg";

import { socialMediaData } from "./../../../interfaceData/socialMediaContent";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <InnerContainer>
        <div className={styles["footer__container"]}>
          <BrandLogo
            imageSource={brandlogoWhite}
            modifyClasses="footer-logo mx-auto"
          />

          <p className={styles["footer__container__description"]}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque.
          </p>

          <div className={styles["footer__container__social-media"]}>
            {socialMediaData?.length > 0 &&
              socialMediaData.map((el) => {
                return (
                  <a key={el.id} href={el.url}>
                    <img src={el.imageSource} alt="social media" />
                  </a>
                );
              })}
          </div>
        </div>
      </InnerContainer>

      <small>
        &copy; All rights reserve by <span>MAAC</span>
      </small>
    </footer>
  );
};

export default Footer;
