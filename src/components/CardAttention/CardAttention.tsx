import React from "react";
import styles from "./CardAttention.module.css";
import AlertIcon from "../Icons/AlertIcon";
import Button from "../Button/Button";

const CardAttention = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.card}>
    <div className={styles.top}>
      <AlertIcon />
      <span>Atenção</span>
    </div>
    <div className={styles.content}>
      {children}
    </div>
    <Button variant="branco">Entendido</Button>
  </div>
)

export default CardAttention;