// components
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import SecondaryHeading from "./../../../shared/SecondaryHeading/SecondaryHeading";
import TertiaryHeading from "./../../../shared/TertiaryHeading/TertiaryHeading";

// styles
import styles from "./ProductFeatures.module.scss";

// data
import { productFeaturesContent } from "../../../../interfaceData/homeUiContent";
import FeatureCard from "../../../shared/FeatureCard/FeatureCard";

const ProductFeatures = () => {
  const {
    secondaryHeading,
    tertiaryHeading,
    featuresA,
    featuresB,
    imageSource,
  } = productFeaturesContent;

  return (
    <div className={styles["product-features"]}>
      <InnerContainer>
        <div className={styles["product-features__top-headings"]}>
          <TertiaryHeading
            text={tertiaryHeading}
            modifyClasses="text-center mb-5 font-medium"
          />

          <SecondaryHeading
            text={secondaryHeading}
            modifyClasses="text-center leading-150"
          />
        </div>

        {/* main content */}
        <div className={styles["product-features__info"]}>
          {/* left features */}
          <div
            className={`${styles["product-features__info__features"]} ${styles["product-features__info__features--left"]}`}
          >
            {featuresA.map((feature, i) => {
              return <FeatureCard key={i} cardInfo={feature} />;
            })}
          </div>

          {/* image */}
          <div className={styles["product-features__info__img-container"]}>
            <img src={imageSource} alt="" />
          </div>

          {/* right features */}
          <div
            className={`${styles["product-features__info__features"]} ${styles["product-features__info__features--right"]}`}
          >
            {featuresB.map((feature, i) => {
              return <FeatureCard key={i} cardInfo={feature} />;
            })}
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

export default ProductFeatures;
