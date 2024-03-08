import Button from "../Button/Button";

import React from "react";
import PropTypes from "prop-types";
import styles from "./CardAttention.module.css";

const CardAttention = ({iconAlert,textContent}) => {
  return (
    <div className={styles.card}>
        <div className={styles.top}>
            <i dangerouslySetInnerHTML={{__html:iconAlert}}/>
            <span>Atenção</span>          
        </div>
      <div className={styles.content}>
        {textContent}
      </div>
        <Button backgroundColorButton="white" colorTextButton="black" contentButton="Entendido"></Button>
    </div>
  );
}

CardAttention.propTypes = {
    iconAlert: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
};

export default CardAttention;
