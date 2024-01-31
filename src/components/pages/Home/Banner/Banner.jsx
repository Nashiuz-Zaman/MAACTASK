// components
import BannerText from "../../../shared/BannerText/BannerText";

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
    </div>
  );
};

export default Banner;
