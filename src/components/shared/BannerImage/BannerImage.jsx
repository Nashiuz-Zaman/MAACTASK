// react
import PropTypes from "prop-types";

// data
import { homeBannerContent } from "../../../interfaceData/homeUiContent";

// styles
import styles from "./BannerImage.module.scss";

const BannerImage = ({ modifyClasses = "" }) => {
  const { tablet, phone } = homeBannerContent.imagesData;

  return (
    <div className={`${styles["banner-image"]} ${modifyClasses}`}>
      {/* glowing tablet div */}

      {/* images */}
      <img src={tablet.imageSource} alt={tablet.alt} />

      <div className={styles["banner-image__phone--container"]}>
        {/* glowing phone div */}
        <div className={styles["banner-image__glow-div--phone"]} />
        <img src={phone.imageSource} alt={phone.alt} />
      </div>
    </div>
  );
};

BannerImage.propTypes = {
  images: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default BannerImage;
