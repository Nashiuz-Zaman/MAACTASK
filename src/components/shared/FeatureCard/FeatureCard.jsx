import PropTypes from "prop-types";

// styles
import styles from "./FeatureCard.module.scss";

// image
import featureCube from "./../../../assets/home/featurecube.svg";

const FeatureCard = ({ cardInfo, modifyClasses = "" }) => {
  const { heading, text } = cardInfo;

  return (
    <div
      style={{ marginLeft: "inherit", marginRight: "inherit" }}
      className={`${styles["feature-card"]} ${modifyClasses}`}
    >
      <div
        style={{ marginLeft: "inherit", marginRight: "inherit" }}
        className={styles["feature-card__cube"]}
      >
        <img
          className={styles["feature-card__cube__img"]}
          src={featureCube}
          alt="cube"
        />
      </div>

      <h4 className={styles["feature-card__heading"]}>{heading}</h4>
      <p className={styles["feature-card__description"]}>{text}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  cardInfo: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default FeatureCard;
