// react
import PropTypes from "prop-types";

// component
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// styles
import styles from "./BannerText.module.scss";

function BannerText({ heading, btnData = [], modifyClasses = "" }) {
  return (
    <div className={`${styles["banner-text"]} ${modifyClasses}`}>
      {/* heading */}
      <h1 className={styles["banner-text__heading"]}>{heading}</h1>

      {/* buttons */}

      {btnData?.length > 0 && (
        <div className={styles["banner-text__btn-container"]}>
          {btnData.map((btn, i) => {
            return <ButtonBtn key={i} {...btn} />;
          })}
        </div>
      )}
    </div>
  );
}

BannerText.propTypes = {
  heading: PropTypes.node,
  btnData: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default BannerText;
