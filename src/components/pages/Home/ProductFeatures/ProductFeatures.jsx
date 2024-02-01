// components
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import SecondaryHeading from "./../../../shared/SecondaryHeading/SecondaryHeading";
import TertiaryHeading from "./../../../shared/TertiaryHeading/TertiaryHeading";

// styles
import styles from "./ProductFeatures.module.scss";

// data
import { productFeaturesContent } from "../../../../interfaceData/homeUiContent";

const ProductFeatures = () => {
  const { secondaryHeading, tertiaryHeading } = productFeaturesContent;

  return (
    <div className={styles["product-features"]}>
      <InnerContainer>
        <TertiaryHeading
          text={tertiaryHeading}
          modifyClasses="text-center mb-5 font-medium"
        />

        <SecondaryHeading text={secondaryHeading} modifyClasses="text-center" />
      </InnerContainer>
    </div>
  );
};

export default ProductFeatures;
