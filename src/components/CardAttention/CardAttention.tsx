import React, {useEffect, useState} from "react";
import styles from "./CardAttention.module.css";
import AlertIcon from "../Icons/AlertIcon";
import Button from "../Button/Button";



const CardAttention = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [message, setMessage] = useState<{message:string}>({message:''});

  useEffect(() => {
    const response = fetch(`${process.env.LOCAL_API_URL}/api/alert`)
        .then(res => res.json())
        .then(data => setMessage(data))
  }, [])
  return(
    isVisible && (
  <div className={styles.card}>
    <div className={styles.top}>
      <AlertIcon />
      <span>Atenção</span>
    </div>
    <div className={styles.content}>
      {message.message}
    </div>
    <Button variant="branco" onClick={() => setIsVisible(false)}>Entendido</Button>
  </div>
    )
  );
}

export default CardAttention;