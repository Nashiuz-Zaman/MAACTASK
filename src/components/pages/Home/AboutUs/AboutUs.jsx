// style
import styles from "./AboutUs.module.scss";

// component
import AboutUsText from "./AboutUsText/AboutUsText";
import OperationsData from "./OperationsData/OperationsData";

// abstract
import abstract from "./../../../../assets/abstract/about-us-abstract.png";

// data
import { aboutUsContent } from "../../../../interfaceData/homeUiContent";

const AboutUs = () => {
  const {
    textContent,
    imagesData: { avg, topselling, preorder, dotpattern },
    operationsData,
  } = aboutUsContent;

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
        <div className={styles["about-us__content__img-container"]}>
          <img
            className={styles["about-us__content__img-container__dots"]}
            src={dotpattern.imageSource}
            alt={dotpattern.alt}
          />

          <img
            className={`${styles["about-us__content__img-container__topselling"]}`}
            src={topselling.imageSource}
            alt={topselling.alt}
          />

          <img
            className={`${styles["about-us__content__img-container__preorder"]}`}
            src={preorder.imageSource}
            alt={preorder.alt}
          />

          <img
            src={avg.imageSource}
            alt={avg.alt}
            className={`${styles["about-us__content__img-container__avg"]}`}
          />
        </div>

        {/* text content */}

        <AboutUsText content={textContent} />
      </div>

      <OperationsData data={operationsData} />
    </div>
  );
};

export default AboutUs;
