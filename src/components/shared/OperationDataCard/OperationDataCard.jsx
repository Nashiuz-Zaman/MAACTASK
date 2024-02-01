import PropTypes from "prop-types";

// styles
import styles from "./OperationDataCard.module.scss";

const OperationDataCard = ({ operationData, modifyClasses = "" }) => {
  const { imageSource, numberInfo, description } = operationData;

  return (
    <div className={`${styles["operation-data-card"]} ${modifyClasses}`}>
      <img src={imageSource} alt={description} />
      <p className={styles["operation-data-card__number-info"]}>{numberInfo}</p>
      <p className={styles["operation-data-card__description"]}>
        {description}
      </p>
    </div>
  );
};

OperationDataCard.propTypes = {
  operationData: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default OperationDataCard;
