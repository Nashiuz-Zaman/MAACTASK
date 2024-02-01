// style
import styles from "./AboutUs.module.scss";

// component
import AboutUsText from "./AboutUsText/AboutUsText";

// abstract
import abstract from "./../../../../assets/abstract/about-us-abstract.png";

// data
import { aboutUsContent } from "../../../../interfaceData/homeUiContent";

const AboutUs = () => {
  const { textContent, imagesData } = aboutUsContent;

  return (
    <div
      style={{
        background: `url(${abstract})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={styles["about-us"]}
    >
      {/* main content */}
      <div className={styles["about-us__content"]}>
        {/* images */}
        <div></div>

        {/* text content */}
        <div>
          <AboutUsText content={textContent} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
