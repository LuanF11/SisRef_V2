import React from "react";
import styles from "./CardButton.module.css";

const CardButton = ({ backgroundColorButton, colorTextButton, contentButton, borderButton}) => {
  return (
    <button className={styles.btn_confirm} style={{backgroundColor:backgroundColorButton, color:colorTextButton, border:borderButton}}>{contentButton}</button>
  );
};



export default CardButton;