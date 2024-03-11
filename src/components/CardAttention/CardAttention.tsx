import React, {useState} from "react";
import styles from "./CardAttention.module.css";
import AlertIcon from "../Icons/AlertIcon";
import Button from "../Button/Button";



const CardAttention = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);
  return(
    isVisible && (
  <div className={styles.card}>
    <div className={styles.top}>
      <AlertIcon />
      <span>Atenção</span>
    </div>
    <div className={styles.content}>
      {children}
    </div>
    <Button variant="branco" onClick={() => setIsVisible(false)}>Entendido</Button>
  </div>
    )
  );
}

export default CardAttention;