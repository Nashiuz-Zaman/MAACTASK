import PropTypes from "prop-types";

// styles
import styles from "./AboutUsText.module.scss";

// components
import TertiaryHeading from "./../../../../shared/TertiaryHeading/TertiaryHeading";
import SecondaryHeading from "./../../../../shared/SecondaryHeading/SecondaryHeading";

const AboutUsText = ({ content, modifyClasses = "" }) => {
  const { tertiaryHeading, secondaryHeading, description, ceoInfo } = content;

  return (
    <div className={`${styles["about-us-text"]} ${modifyClasses}`}>
      <TertiaryHeading
        text={tertiaryHeading}
        modifyClasses="font-semibold mb-5"
      />

      <div className={styles["about-us-text__bottom-content"]}>
        {/* secondary heading */}
        <SecondaryHeading
          text={secondaryHeading}
          modifyClasses="text-4xl leading-130 mb-10"
        />

        {/* about us description */}
        <p
          className={`${styles["about-us-text__bottom-content__description"]} leading-160`}
        >
          {description}
        </p>

        {/* ceo part */}
        <div className={styles["about-us-text__bottom-content__ceoinfo"]}>
          <img src={ceoInfo.imageSource} alt="CEO" />

          <div className="leading-160">
            <blockquote
              className={`${styles["about-us-text__bottom-content__ceoinfo__quote"]}`}
            >
              {`"${ceoInfo.description}"`}
            </blockquote>

            <p
              className={`${styles["about-us-text__bottom-content__ceoinfo__designation"]}`}
            >
              {ceoInfo.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUsText.propTypes = {
  content: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default AboutUsText;
