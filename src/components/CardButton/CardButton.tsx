import React from "react";
import PropTypes from "prop-types";
import styles from "./CardButton.module.css";

const CardButton = ({ backgroundColorButton, colorTextButton, contentButton, borderButton = "none" }) => {
  return (
    <button className={styles.btn_confirm} style={{backgroundColor:backgroundColorButton, color:colorTextButton, border:borderButton}}>{contentButton}</button>
  );
};



export default CardButton;