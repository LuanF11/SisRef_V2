import CardButton from "../CardButton/CardButton";

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
        <CardButton backgroundColorButton="white" colorTextButton="black" contentButton="Entendido"></CardButton>
    </div>
  );
}

CardAttention.propTypes = {
    iconAlert: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
};

export default CardAttention;
