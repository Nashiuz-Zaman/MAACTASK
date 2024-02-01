// components
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import TertiaryHeading from "./../../../shared/TertiaryHeading/TertiaryHeading";
import SecondaryHeading from "./../../../shared/SecondaryHeading/SecondaryHeading";
import CollapsibleCard from "../../../shared/CollapsibleCard/CollapsibleCard";

// styles
import styles from "./Faq.module.scss";

// data
import { frequentlyAskedContent } from "../../../../interfaceData/homeUiContent";
import abstract from "./../../../../assets/home/faq/faq-abstract.webp";

const Faq = () => {
  return (
    <div
      style={{
        background: `url(${abstract}) center center / cover, #0052cc`,
        mixBlendMode: "overlay",
      }}
      className={styles["faq"]}
    >
      <InnerContainer>
        <TertiaryHeading
          text={"Common Question"}
          modifyClasses="text-white font-medium text-center mb-5"
        />
        <SecondaryHeading
          text={"Frequently asked questions"}
          modifyClasses="text-white font-extrabold text-5xl text-center"
        />

        <div className={styles["faq__questions-answers"]}>
          {frequentlyAskedContent.length > 0 &&
            frequentlyAskedContent.map((question) => {
              return <CollapsibleCard key={question.i} content={question} />;
            })}
        </div>
      </InnerContainer>
    </div>
  );
};

export default Faq;
