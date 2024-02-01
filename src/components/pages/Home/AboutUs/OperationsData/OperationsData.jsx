import PropTypes from "prop-types";

// component
import OperationDataCard from "../../../../shared/OperationDataCard/OperationDataCard";

// styles
import styles from "./OperationsData.module.scss";

const OperationsData = ({ data, modifyClasses = "" }) => {
  return (
    <div className={`${styles["operations-data"]} ${modifyClasses}`}>
      {data &&
        data.length > 0 &&
        data.map((singleData, i) => {
          return <OperationDataCard key={i} operationData={singleData} />;
        })}
    </div>
  );
};

OperationsData.propTypes = {
  data: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default OperationsData;
