// components
import BannerText from "../../../shared/BannerText/BannerText";
import BannerImage from "../../../shared/BannerImage/BannerImage";

// data
import { homeBannerContent } from "../../../../interfaceData/homeUiContent";

// styles
import styles from "./Banner.module.scss";

const Banner = () => {
  // extract heading and subheading
  const { heading, buttonsData } = homeBannerContent;

  return (
    <div className={styles["banner"]}>
      {/* banner text part */}
      <BannerText heading={heading} btnData={buttonsData} />

      {/* banner image*/}
      <BannerImage />
    </div>
  );
};

export default Banner;
