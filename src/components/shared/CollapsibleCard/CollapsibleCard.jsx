import PropTypes from "prop-types";

import { useState } from "react";

// styles
import styles from "./CollapsibleCard.module.scss";
import Accordion from "../Accordion/Accordion";

// image arrow
import arrow from "./../../../assets/home/faq/icons/arrow.png";

const CollapsibleCard = ({ content, modifyClasses = "" }) => {
  const { question, answer } = content;
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <div className={`${styles["collapsible-card"]} ${modifyClasses}`}>
      <button onClick={handleOpen}>
        <h4 className={styles["collapsible-card__question"]}>{question}</h4>
        <img
          className={open ? styles["arrow-open"] : ""}
          src={arrow}
          alt="arrow"
        />
      </button>

      <Accordion expanded={open}>
        <p className={styles["collapsible-card__content"]}>{answer}</p>
      </Accordion>
    </div>
  );
};

CollapsibleCard.propTypes = {
  content: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default CollapsibleCard;
